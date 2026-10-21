import { createRoot } from 'react-dom/client';
import ServerFolders from './components/ServerFolders.jsx';

export function mount(container, props) {
    const root = createRoot(container);
    root.render(<ServerFolders {...props} />);
    return () => root.unmount();
}

export const extension = {
    id: 'ska-server-folders',
    component: ServerFolders,
    mount,
};

export { ServerFolders };
export default ServerFolders;
