<?php

use SKA\ServerFolders\http\Controllers\ServerFolderController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->prefix('api/client/folders')->group(function () {
    Route::get('/', [ServerFolderController::class, 'index']);
    Route::post('/', [ServerFolderController::class, 'store']);
    Route::patch('/{folderId}', [ServerFolderController::class, 'update']);
    Route::delete('/{folderId}', [ServerFolderController::class, 'destroy']);
    Route::post('/reorder', [ServerFolderController::class, 'reorder']);
});
