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
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');

            $table->integer('price')->nullable();
            $table->double('weight', 5, 2)->default(0);

            $table->text('desc');
            $table->text('short_desc');

            $table->boolean('tax_status')->default(true);
            $table->string('sku')->unique();

            $table->foreignId('meta_id')->nullable()->references('id')->on('meta_data')->onDelete('CASCADE');

            $table->boolean('in_stock')->default(true);
            $table->boolean('visible')->default(true);
            $table->boolean('featured')->default(false);

            $table->string('slug');

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
        Schema::dropIfExists('products');
    }
};

