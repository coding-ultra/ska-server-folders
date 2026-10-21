<?php

namespace SKA\ServerFolders\Models;

use Illuminate\Database\Eloquent\Model;

class ServerFolderItem extends Model
{
    protected $fillable = ['user_id', 'folder_id', 'server_identifier', 'position'];
}
