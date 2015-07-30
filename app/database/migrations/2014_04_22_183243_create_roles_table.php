<?php

use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function($table) {
            $table->increments('id');
            $table->string('name', 255);
            $table->string('access', 255)->nullable();
            $table->timestamp('created_at')->default("1970-01-01 00:00:01");
            $table->timestamp('updated_at')->default("1970-01-01 00:00:01");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('roles');
    }

}