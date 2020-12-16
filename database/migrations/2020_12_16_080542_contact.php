<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Contact extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        if(!Schema::hasTable('contact'))
        {
            Schema::create('contact', function(Blueprint $table) {
                $table->increments('id');
                $table->string('name', 191)->nullable();
                $table->string('email', 191)->nullable();
                $table->string('telephone', 191)->nullable();
                $table->string('comment', 191)->nullable();
                $table->integer('user_id')->length(11)->nullable();
                $table->timestamps();
                // $table->softDeletes();
                $table->dateTime('deleted_at')->nullable();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
