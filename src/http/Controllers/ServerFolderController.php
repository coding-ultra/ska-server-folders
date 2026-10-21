<?php

namespace SKA\ServerFolders\http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use SKA\ServerFolders\Models\ServerFolder;
use SKA\ServerFolders\Models\ServerFolderItem;
use SKA\ServerFolders\Support\ServerAccess;

class ServerFolderController extends Controller
{
    public function index(Request $request)
    {
        $uid =$request->user()->id;

        return response()->json([
            'folders' => ServerFolder::where('user_id', $uid)->orderBy('position')->get(['id', 'name', 'position']),
            'items' => ServerFolderItem::where('user_id', $uid)->get(['server_identifier', 'folder_id', 'position']),
        ]);
    }

    public function store(Request $request)
    {
        $data =$request->validate(['name' => 'required|string|max:64']);
        $uid =$request->user()->id;

        $folder = ServerFolder::create([
            'user_id' => $uid,
            'name' => trim($data['name']),
            'position' => ((int) ServerFolder::where('user_id', $uid)->max('position')) + 1,
        ]);

        return response()->json($folder, 201);
    }

    public function update(Request $request, int$folderId)
    {
        $data =$request->validate(['name' => 'required|string|max:64']);
        $folder =$this->ownedFolder($request,$folderId);

        $folder->update(['name' => trim($data['name'])]);

        return response()->json($folder);
    }

    public function destroy(Request $request, int$folderId)
    {
        // Servers in the folder fall back to ungrouped (nullOnDelete).
        $this->ownedFolder($request,$folderId)->delete();

        return response()->noContent();
    }

    public function reorder(Request $request)
    {
        $data =$request->validate([
            'items' => 'required|array|max:500',
            'items.*.server_identifier' => 'required|string|max:32',
            'items.*.folder_id' => 'nullable|integer',
            'items.*.position' => 'required|integer|min:0',
        ]);

        $user =$request->user();
        $ownedFolderIds = ServerFolder::where('user_id',$user->id)->pluck('id')->all();

        foreach ($data['items'] as$item) {
            if ($item['folder_id'] !== null && !in_array($item['folder_id'],$ownedFolderIds, true)) {
                abort(422, 'Unknown folder.');
            }

            if (!ServerAccess::userCanAccess($user,$item['server_identifier'])) {
                abort(403, 'You do not have access to one of these servers.');
            }
        }

        DB::transaction(function () use ($data,$user) {
            foreach ($data['items'] as$item) {
                ServerFolderItem::updateOrCreate(
                    ['user_id' => $user->id, 'server_identifier' =>$item['server_identifier']],
                    ['folder_id' => $item['folder_id'], 'position' =>$item['position']]
                );
            }
        });

        return response()->noContent();
    }

    private function ownedFolder(Request $request, int$folderId): ServerFolder
    {
        return ServerFolder::where('user_id', $request->user()->id)->findOrFail($folderId);
    }
}
