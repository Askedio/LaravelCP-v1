<?php

use Illuminate\Database\Migrations\Migration;

class CreateTodosTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function($table) {
            $table->increments('id');
            $table->integer('admin_id')->unsigned()->nullable();
            $table->integer('status')->unsigned()->nullable();
            $table->string('title', 255)->nullable();
            $table->longText('description')->nullable();
			$table->timestamp('due_at')->default("1970-01-01 00:00:01");
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
        Schema::drop('todos');
    }

}