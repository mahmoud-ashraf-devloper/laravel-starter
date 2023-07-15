<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('address_1');
            $table->string('address_2')->nullable();
            $table->string('appartment_suit_unit')->nullable();
            $table->string('city')->nullable();
            $table->foreignId('country_id')->references('id')->on('countries');
            $table->foreignId('state_id')->references('id')->on('states');
            $table->string('zip_code');
            $table->string('phone');
            $table->string('company')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
};
