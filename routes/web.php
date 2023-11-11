<?php

use App\Models\City;
use App\Models\Property;
use App\Models\Stage;
use App\Models\Type;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/map', function () {
    return view('map');
});

Route::get('/json', function () {
    $apiLink = public_path('getResult.json');
    $localInfoMap = json_decode(file_get_contents($apiLink), true);
    foreach ($localInfoMap as $item) {

        if (!empty($item['sales_type'])) {
            $stage = Stage::where('title', $item['sales_type'])->first();
            if (empty($stage->all())) {
                $stage = new Stage();
                $stage->title = $item['stage'];
                $stage->slug = Str::slug($item['stage']);
                $stage->save();
            }
        }

        if (!empty($item['city'])) {
            $city = City::where('title', $item['city'])->first();
            if (empty($city->all())) {
                $city = new City();
                $city->title = $item['city'];
                $city->slug = Str::slug($item['city']);
                $city->save();
            }
        }

        if (!empty($item['type'])) {
            foreach ($item['type'] as $type) {
                $type_res = Type::where('title', $type)->first();
                if (empty($type_res->all())) {
                    $type_res = new Type();
                    $type_res->title = $item['type'];
                    $type_res->slug = Str::slug($item['type']);
                    $type_res->save();
                }
            }
        }

        $property = new Property();
        $property->title = $item['title'];
        $property->slug =  Str::slug($item['title']);
        $property->thumbnail = $item['thumbnail'];
        $property->available_floorplans = $item['available_floorplans'];
        $property->address = $item['address'];
        $property->pricepersqft = $item['pricepersqft'];
        $property->price = $item['price'];
        $property->price_min = $item['price_min;
        $property->price_max = $item['price_max;
        $property->size_min = $item['size_min;
        $property->size_max = $item['size_max;
        $property->min_bed = $item['min_bed;
        $property->max_bed = $item['max_bed;
        $property->min_bath = $item['min_bath;
        $property->max_bath = $item['max_bath;
        $property->min_price_sqft = $item['min_price_sqft;
        $property->max_price_sqft = $item['max_price_sqft;
        $property->sqft_avg = $item['sqft_avg;
        $property->occupancy = $item['occupancy;
        $property->coming_soon = $item['coming_soon;
        $property->incentives = serialize($item['incentives);
        $property->comission_by_percent = $item['comission_by_percent;
        $property->comission_by_flatfee = $item['comission_by_flatfee;
        $property->studio = $item['studio;
        $property->sales_status = $item['sales_status;
        $property->project_status = $item['project_status;
        $property->coords = $item['coords;
        $property->map_link = $item['map_link;
        $property->architect = $item['architect;
        $property->interior_designer = $item['interior_designer;
        $property->floors = $item['floors;
        $property->suites = $item['suites;
        $property->parking = $item['parking;
        $property->locker = $item['locker;
        $property->parking_price = $item['parking_price;
        $property->locker_price = $item['locker_price;
        $property->mt_fees = $item['mt_fees;
        $property->deposit_structure = $item['deposit_structure;
        $property->substage = $item['substage;
        $property->apps = $item['apps;
        $property->pdf_files = serialize($item['pdf_files);
        $property->externalid = $item['externalid;
        $property->publish_status = $item['publish_status;
        $property->city_id = $item['city;
        $property->neighborhood_id = $item['neighborhood;
        $property->group_id = $item['group;
        $property->salesteam_id = $item['salesteam;
        $property->stage_id = $item['stage;
        $property->save();

    }
});
