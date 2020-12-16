<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         \DB::table('users')->insertGetId(
            [
                'name'=>'Anjali',
                'email'=>'demoemail@example.com',
                'password'=>Hash::make('pass@123'),
                'active' =>1,
                'created_at'=>\Carbon\Carbon::now(),
                'updated_at'=>\Carbon\Carbon::now()
            ]);
    }
}
