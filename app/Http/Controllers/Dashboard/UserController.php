<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        $permissions = Permission::all();
        $roles = Role::all();

        return view('dashboard.views.users', [
            'users' => $users,
            'permissions' => $permissions,
            'roles' => $roles,
        ]);
    }


    public function givePermissions(Request $request)
    {
        $validated =  Validator::make($request->all(), [

        ]);
    }
}
