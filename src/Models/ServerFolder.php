<?php

namespace SKA\ServerFolders\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ServerFolder extends Model
{
    protected $fillable = ['user_id', 'name', 'position'];

    public function items(): HasMany
    {
        return $this->hasMany(ServerFolderItem::class, 'folder_id');
    }
}
