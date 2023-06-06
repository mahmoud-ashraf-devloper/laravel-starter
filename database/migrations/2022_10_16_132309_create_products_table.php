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

            $table->double('price', 5, 2)->nullable();
            $table->double('weight', 5, 2)->default(0);

            $table->text('desc');
            $table->text('short_desc');

            $table->text('meta_desc');
            $table->text('meta_title');
            $table->text('meta_keywords');

            $table->boolean('tax_status')->default(true);
            $table->string('sku')->unique();
            


            $table->boolean('in_stock')->default(true);
            $table->boolean('visible')->default(true);
            $table->boolean('featured')->default(false);

            $table->string('images');
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

