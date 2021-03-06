<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
	protected $table = 'memberships';
    protected $fillable = ['user_id', 'project_id', 'level'];
    protected $visible = ['user', 'project_id', 'level', 'time_started'];

    public function user() {
    	return $this->hasOne('App\Models\User', 'id', 'user_id');
    }
}
