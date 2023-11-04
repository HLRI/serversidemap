<?php

use App\Http\Controllers\Admin\AjaxController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DeveloperController;
use App\Http\Controllers\Admin\FloorplanController;
use App\Http\Controllers\Admin\GroupController;
use App\Http\Controllers\Admin\MindController;
use App\Http\Controllers\Admin\NeighborhoodController;
use App\Http\Controllers\Admin\PropertyController;
use App\Http\Controllers\Admin\RequestController;
use App\Http\Controllers\Admin\Rolecontroller;
use App\Http\Controllers\Admin\SalesteamController;
use App\Http\Controllers\Admin\StageController;
use App\Http\Controllers\Admin\TypeController;
use App\Http\Controllers\Admin\Usercontroller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::group(['middleware' => ['role:admin|supervisor']], function () {
    Route::get('users', [Usercontroller::class, 'index'])->name('users.index');
    Route::get('users/create', [Usercontroller::class, 'create'])->name('users.create');
    Route::post('users', [Usercontroller::class, 'store'])->name('users.store');
    Route::get('users/{user}/edit', [Usercontroller::class, 'edit'])->name('users.edit');
    Route::post('users/{user}/update', [Usercontroller::class, 'update'])->name('users.update');

    Route::get('roles', [Rolecontroller::class, 'index'])->name('roles.index');
    Route::post('roles', [Rolecontroller::class, 'store'])->name('roles.store');
    Route::get('roles/{role}/edit', [Rolecontroller::class, 'edit'])->name('roles.edit');
    Route::post('roles/{role}/update', [Rolecontroller::class, 'update'])->name('roles.update');
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('properties/create', [PropertyController::class, 'create'])->name('properties.create');
    Route::post('properties/store', [PropertyController::class, 'store'])->name('properties.store');
    Route::get('floorplans', [FloorplanController::class, 'index'])->name('floorplans.index');
    Route::get('floorplans/create', [FloorplanController::class, 'create'])->name('floorplans.create');
    Route::post('floorplans/store', [FloorplanController::class, 'store'])->name('floorplans.store');
    Route::get('floorplans/{id}/edit', [FloorplanController::class, 'edit'])->name('floorplans.edit');
    Route::get('cities/create', [CityController::class, 'create'])->name('cities.create');
    Route::get('cities/{id}/edit', [CityController::class, 'edit'])->name('cities.edit');
    Route::post('cities/store', [CityController::class, 'store'])->name('cities.store');
    Route::get('neighborhoods/create', [NeighborhoodController::class, 'create'])->name('neighborhoods.create');
    Route::post('neighborhoods/store', [NeighborhoodController::class, 'store'])->name('neighborhoods.store');
    Route::post('neighborhoods/{id}/edit', [NeighborhoodController::class, 'edit'])->name('neighborhoods.edit');
    Route::get('groups/create', [GroupController::class, 'create'])->name('groups.create');
    Route::post('groups/store', [GroupController::class, 'store'])->name('groups.store');
    Route::post('groups/{id}/edit', [GroupController::class, 'edit'])->name('groups.edit');
    Route::get('developers/create', [DeveloperController::class, 'create'])->name('developers.create');
    Route::post('developers/store', [DeveloperController::class, 'store'])->name('developers.store');
    Route::post('developers/{id}/edit', [DeveloperController::class, 'edit'])->name('developers.edit');
    Route::get('salesteams/create', [SalesteamController::class, 'create'])->name('salesteams.create');
    Route::post('salesteams/store', [SalesteamController::class, 'store'])->name('salesteams.store');
    Route::post('salesteams/{id}/edit', [SalesteamController::class, 'edit'])->name('salesteams.edit');
    Route::get('types/create', [TypeController::class, 'create'])->name('types.create');
    Route::post('types/store', [TypeController::class, 'store'])->name('types.store');
    Route::post('types/{id}/edit', [TypeController::class, 'edit'])->name('types.edit');
    Route::get('stages/create', [StageController::class, 'create'])->name('stages.create');
    Route::post('stages/store', [StageController::class, 'store'])->name('stages.store');
    Route::post('stages/{id}/edit', [StageController::class, 'edit'])->name('stages.edit');
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
});
