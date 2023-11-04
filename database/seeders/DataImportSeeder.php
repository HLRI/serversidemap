<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DataImportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role = new Role();
        $role->name = 'admin';
        $role->display_name = 'Admin';
        $role->save();
        $role = new Role();
        $role->name = 'supervisor';
        $role->display_name = 'Supervisor';
        $role->save();
        $role = new Role();
        $role->name = 'user';
        $role->display_name = 'User';
        $role->save();

        $admin =  User::create([
            'name' => 'احسان باوقار',
            'username' => 'ehsan',
            'email' => 'ehsan@gmail.com',
            'phone' => '09191816172',
            'password' => bcrypt('12345678'),
        ]);

        $admin->giveRolesTo('admin');

        $supervisor = User::create([
            'name' => 'محمد عزیزی',
            'username' => 'mohammad',
            'email' => 'mohammad@gmail.com',
            'phone' => '09035307477',
            'password' => bcrypt('12345678'),
        ]);
        $supervisor->giveRolesTo('supervisor');

        for ($i = 0; $i < 10; $i++) {
            $user =  User::create([
                'name' => Str::random(10),
                'username' => Str::random(10),
                'email' => Str::random(10) . '@gmail.com',
                'phone' => rand(11111111111, 99999999999),
                'password' => bcrypt('secret'),
            ]);
            $user->giveRolesTo('user');
        }
    }
}
