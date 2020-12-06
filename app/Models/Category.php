<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
  use SoftDeletes;

  // /**
  //  * Get the notes for the users.
  //  */
  // public function notes()
  // {
  //     return $this->hasMany('App\Notes');
  // }

  protected $dates = [
      'deleted_at'
  ];
}