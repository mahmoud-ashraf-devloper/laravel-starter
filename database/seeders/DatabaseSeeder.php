<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        
        Permission::create(['name' => 'create-users']);
        Permission::create(['name' => 'edit-users']);
        Permission::create(['name' => 'delete-users']);
        
        Permission::create(['name' => 'create-product']);
        Permission::create(['name' => 'edit-product']);
        Permission::create(['name' => 'delete-product']);
        
        
        
        $adminRole = Role::create(['name' => 'Admin']);
        $editorRole = Role::create(['name' => 'Editor']);
        
        $adminRole->givePermissionTo([
            'create-users',
            'edit-users',
            'delete-users',
            'create-product',
            'edit-product',
            'delete-product',
        ]);
        
        $editorRole->givePermissionTo([
            'create-product',
            'edit-product',
            'delete-product',
        ]);
        
        
        $admin = \App\Models\User::factory()->create([
            'name' => 'Mahmoud Ashraf',
            'email' => 'admin@admin.com',
        ]);
        $editor = \App\Models\User::factory()->create([
            'name' => 'Mahmoud Ashraf',
            'email' => 'editor@editor.com',
        ]);
        
        $admin->assignRole('Admin');
        $editor->assignRole('Editor');
        \App\Models\User::factory(10)->create();

    }
}
