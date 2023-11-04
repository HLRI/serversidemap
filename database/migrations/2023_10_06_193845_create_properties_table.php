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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->text('excerpt')->nullable();
            $table->text('content')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('available_floorplans')->nullable();
            $table->text('address')->nullable();
            $table->text('street_address')->nullable();
            $table->unsignedInteger('pricepersqft')->nullable();
            $table->unsignedInteger('price')->nullable();
            $table->unsignedInteger('price_min')->nullable();
            $table->unsignedInteger('price_max')->nullable();
            $table->unsignedInteger('size_min')->nullable();
            $table->unsignedInteger('size_max')->nullable();
            $table->unsignedInteger('min_bed')->nullable();
            $table->unsignedInteger('max_bed')->nullable();
            $table->unsignedInteger('min_bath')->nullable();
            $table->unsignedInteger('max_bath')->nullable();
            $table->unsignedInteger('min_price_sqft')->nullable();
            $table->unsignedInteger('max_price_sqft')->nullable();
            $table->unsignedInteger('sqft_avg')->nullable();
            $table->unsignedInteger('occupancy')->nullable();
            $table->string('coming_soon')->nullable();
            $table->text('incentives')->nullable();
            $table->string('comission_by_percent')->nullable();
            $table->string('comission_by_flatfee')->nullable();
            $table->string('studio')->nullable();
            $table->string('sales_status')->nullable();
            $table->string('project_status')->nullable();
            $table->string('coords')->nullable();
            $table->string('map_link')->nullable();
            $table->string('architect')->nullable();
            $table->string('interior_designer')->nullable();
            $table->string('floors')->nullable();
            $table->string('suites')->nullable();
            $table->string('parking')->nullable();
            $table->string('locker')->nullable();
            $table->unsignedInteger('parking_price')->nullable();
            $table->unsignedInteger('locker_price')->nullable();
            $table->unsignedInteger('mt_fees')->nullable();
            $table->text('deposit_structure')->nullable();
            $table->text('substage')->nullable();
            $table->unsignedInteger('apps')->nullable();
            $table->text('pdf_files')->nullable();
            $table->unsignedBigInteger('externalid')->nullable();
            $table->string('publish_status')->nullable();
            $table->unsignedBigInteger('city_id')->nullable();
            $table->unsignedBigInteger('neighborhood_id')->nullable();
            $table->unsignedBigInteger('group_id')->nullable();
            $table->unsignedBigInteger('salesteam_id')->nullable();
            $table->unsignedBigInteger('stage_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
