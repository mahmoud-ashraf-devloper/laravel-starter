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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_id')->nullable();
            $table->string('payment_method')->nullable();
            $table->boolean('payment_status')->default(false);
            $table->unsignedInteger('shipping_cost');
            $table->unsignedInteger('discount')->nullable();
            $table->unsignedInteger('total_price');

            $table->foreignId('user_id')->nullable()->references('id')->on('users')->nullOnDelete();
            $table->foreignId('coupon_id')->nullable()->references('id')->on('coupons')->nullOnDelete();
            $table->foreignId('shipping_address_id')->nullable()->references('id')->on('addresses')->nullOnDelete();
            $table->foreignId('billing_address_id')->nullable()->references('id')->on('addresses')->nullOnDelete();
            
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
        Schema::dropIfExists('orders');
    }
};
