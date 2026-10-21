<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('server_folders', function (Blueprint $t) {
            $t->id();$t->unsignedInteger('user_id');
            $t->string('name', 64);$t->unsignedInteger('position')->default(0);
            $t->timestamps();$t->index(['user_id', 'position']);
        });

        Schema::create('server_folder_items', function (Blueprint $t) {$t->id();
            $t->unsignedInteger('user_id');$t->foreignId('folder_id')->nullable()->constrained('server_folders')->nullOnDelete();
            $t->string('server_identifier', 32);$t->unsignedInteger('position')->default(0);
            $t->timestamps();$t->unique(['user_id', 'server_identifier']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('server_folder_items');
        Schema::dropIfExists('server_folders');
    }
};
