<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\CategoryProduct;
use App\Models\Coupon;
use App\Models\Product;
use App\Models\ProductImage;
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


        
        
        
        \App\Models\Category::factory(6)->create();
        \App\Models\Category::factory(30)->create()->each(function(Category $category)  {
            $category->update(['parent_id' => rand(1, 6)]);
        });

        $urls = [
            'http://127.0.0.1:8000/images/products/1.jpg',
            'http://127.0.0.1:8000/images/products/2.jpg',
            'http://127.0.0.1:8000/images/products/3.jpg',
        ];
    
        \App\Models\Product::factory(200)->create()->each(function(Product $product) use($urls) {
            foreach ($urls as $url) {
                ProductImage::create([
                    'product_id' => $product->id,
                    'url' => $url,
                ]);
            } 

            for ($i=1; $i <= 3 ; $i++) { 
                CategoryProduct::create(['product_id' => $product->id,'category_id'=>rand(1, 36)]);
            }   
        });

        Coupon::factory()->create(); // seeding test-coupon
       

        $this->call(CountriesTableSeeder::class);
        $this->call(StatesTableSeeder::class);
        $this->call(CitiesTableSeeder::class);
    }
}
