<?php
use Zizaco\Confide\ConfideUser;
use Zizaco\Confide\Confide;

class AssignedRole extends Eloquent {
	protected $table = 'assigned_roles';
	public static $unguarded = true;

	public function user()
    {
		return $this->belongsTo('User');
    }
}