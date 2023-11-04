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
        Schema::create('floorplans', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->string('thumbnail')->nullable();
            $table->string('status')->nullable();
            $table->string('suite_name')->nullable();
            $table->unsignedFloat('beds')->nullable();
            $table->unsignedFloat('baths')->nullable();
            $table->unsignedInteger('size')->nullable();
            $table->string('studio')->nullable();
            $table->string('view')->nullable();
            $table->unsignedInteger('interior_size')->nullable();
            $table->string('floor_range')->nullable();
            $table->unsignedInteger('price_from')->nullable();
            $table->unsignedInteger('price_per')->nullable();
            $table->string('mt_fees_per_month')->nullable();
            $table->string('parking')->nullable();
            $table->string('ev_parking')->nullable();
            $table->string('balcony_sqft')->nullable();
            $table->string('locker')->nullable();
            $table->text('deposit_structure')->nullable();
            $table->string('publish_status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('floorplans');
    }
};
