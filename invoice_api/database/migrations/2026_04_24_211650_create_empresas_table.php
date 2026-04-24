<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('empresas', function (Blueprint $table) {
            $table->id();
            $table->string('rfc', 13);
            $table->foreignId('usuario_id')->constrained('users');
            $table->string('folio')->nullable();
            $table->text('sello')->nullable();
            $table->foreignId('cfdi_id')->constrained('cfdis');
            $table->foreignId('regimen_id')->constrained('regimens');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empresas');
    }
};
