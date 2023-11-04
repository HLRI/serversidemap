<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    public function floorplans(){
        return $this->belongsToMany(Floorplan::class);
    }

    public function city(){
        return $this->belongsTo(City::class);
    }

    public function neighborhood(){
        return $this->belongsTo(Neighborhood::class);
    }

    public function group(){
        return $this->belongsTo(Group::class);
    }

    public function developers(){
        return $this->belongsToMany(Developer::class);
    }

    public function salesteam(){
        return $this->belongsTo(Salesteam::class);
    }

    public function types(){
        return $this->belongsToMany(Type::class);
    }

    public function stage(){
        return $this->belongsTo(Stage::class);
    }
}
