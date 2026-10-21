import { useCallback, useEffect, useMemo, useState } from 'react';

const xsrf = () => decodeURIComponent((document.cookie.match(/XSRF-TOKEN=([^;]+)/) || [])[1] || '');

async function api(path, method = 'GET', body) {
    const res = await fetch(`/api/client/folders${path}`, {
        method,
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': xsrf(),
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Request failed (${res.status})`);
    }

    return res.status === 204 ? null : res.json();
}

// Servers not yet placed go to the ungrouped section, keeping their dashboard order.
function mergeEntries(servers, items) {
    const known = new Map(items.map((i) => [i.server_identifier, i]));
    return servers.map(
        (s, idx) =>
            known.get(s.identifier) ?? {
                server_identifier: s.identifier,
                folder_id: null,
                position: 100000 + idx,
            }
    );
}

export default function ServerFolders({ servers }) {
    const [folders, setFolders] = useState([]);
    const [entries, setEntries] = useState([]);
    const [newName, setNewName] = useState('');
    const [error, setError] = useState(null);

    const serverById = useMemo(
        () => Object.fromEntries(servers.map((s) => [s.identifier, s])),
        [servers]
    );

    const load = useCallback(async () => {
        const data = await api('');
        setFolders(data.folders);
        setEntries(mergeEntries(servers, data.items));
    }, [servers]);

    useEffect(() => {
        load().catch((e) => setError(e.message));
    }, [load]);

    async function createFolder(e) {
        e.preventDefault();
        const name = newName.trim();
        if (!name) return;

        try {
            const folder = await api('', 'POST', { name });
            setFolders((f) => [...f, folder]);
            setNewName('');
        } catch (err) {
            setError(err.message);
        }
    }

    async function deleteFolder(id) {
        try {
            await api(`/${id}`, 'DELETE');
            await load();
        } catch (err) {
            setError(err.message);
        }
    }

    async function moveServer(identifier, targetFolderId, beforeIdentifier = null) {
        if (!identifier || identifier === beforeIdentifier) return;

        const previous = entries;
        const rest = entries.filter((e) => e.server_identifier !== identifier);

        const target = rest
            .filter((e) => e.folder_id === targetFolderId)
            .sort((a, b) => a.position - b.position);

        const at = beforeIdentifier
            ? target.findIndex((e) => e.server_identifier === beforeIdentifier)
            : -1;

        target.splice(at === -1 ? target.length : at, 0, {
            server_identifier: identifier,
            folder_id: targetFolderId,
            position: 0,
        });

        const reordered = target.map((e, i) => ({ ...e, position: i }));
        const others = rest.filter((e) => e.folder_id !== targetFolderId);
        const next = [...others, ...reordered];

        setEntries(next);

        try {
            await api('/reorder', 'POST', {
                items: next.map((e) => ({
                    server_identifier: e.server_identifier,
                    folder_id: e.folder_id,
                    position: e.position,
                })),
            });
        } catch (err) {
            setEntries(previous);
            setError(err.message);
        }
    }

    function renderCard(entry) {
        const s = serverById[entry.server_identifier];
        if (!s) return null;

        return (
            <div
                key={entry.server_identifier}
                draggable
                onDragStart={(e) => e.dataTransfer.setData('text/plain', entry.server_identifier)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    moveServer(e.dataTransfer.getData('text/plain'), entry.folder_id, entry.server_identifier);
                }}
                style={{ border: '1px solid #444', borderRadius: 8, padding: 12, cursor: 'grab' }}
            >
                <strong>{s.name}</strong>
                {s.status && <div style={{ fontSize: 12, opacity: 0.7 }}>{s.status}</div>}
            </div>
        );
    }

    function renderSection(title, folderId, onDelete) {
        const cards = entries
            .filter((e) => e.folder_id === folderId)
            .sort((a, b) => a.position - b.position);

        return (
            <section
                key={folderId ?? 'ungrouped'}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault();
                    moveServer(e.dataTransfer.getData('text/plain'), folderId);
                }}
                style={{ marginTop: 16, padding: 12, border: '1px dashed #555', borderRadius: 12 }}
            >
                <header style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3>{title}</h3>
                    {onDelete && <button onClick={onDelete}>Delete folder</button>}
                </header>
                <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                    {cards.length === 0 ? <em>Drop servers here</em> : cards.map(renderCard)}
                </div>
            </section>
        );
    }

    return (
        <div>
            {error && <p role="alert" style={{ color: 'salmon' }}>{error}</p>}
            <form onSubmit={createFolder} style={{ display: 'flex', gap: 8 }}>
                <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    maxLength={64}
                    placeholder="New folder name"
                />
                <button type="submit">Create Folder</button>
            </form>

            {renderSection('Ungrouped', null)}
            {folders.map((f) => renderSection(f.name, f.id, () => deleteFolder(f.id)))}
        </div>
    );
}
