<?php

use Illuminate\Database\Migrations\Migration;

class CreateUsernotesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_notes', function($table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->index();
            $table->integer('admin_id')->unsigned()->nullable();
            $table->longText('note')->nullable();
			$table->timestamp('created_at')->default("1970-01-01 00:00:01");
            $table->timestamp('updated_at')->default("1970-01-01 00:00:01");
			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('user_notes');
    }

}