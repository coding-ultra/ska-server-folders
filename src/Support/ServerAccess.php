<?php

namespace SKA\ServerFolders\Support;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\DB;

class ServerAccess
{
    /**
     * Owner or subuser check. Column names are based on the 1.x schema;
     * confirm them against the 2.0.0-beta.2 migrations before shipping.
     */
    public static function userCanAccess(Authenticatable $user, string$identifier): bool
    {
        $userId = (int)$user->getAuthIdentifier();

        $server = DB::table('servers')
            ->select('id', 'owner_id')
            ->where('uuidShort', $identifier)
            ->first();

        if ($server === null) {
            return false;
        }

        if ((int) $server->owner_id ===$userId) {
            return true;
        }

        return DB::table('subusers')
            ->where('server_id', $server->id)
            ->where('user_id', $userId)
            ->exists();
    }
}
