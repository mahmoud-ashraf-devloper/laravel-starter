<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function add(Request $request)
    {
        $data = Validator::make($request->all(), [
            "name" =>  'required|string',
            'subCategories.*.value' => 'exists:categories,id',
        ]);

        if ($data->fails()) {
            return response()->json(['success' => false, 'errors' => $data->errors()]);
        }

        $data = $data->validated();
        $category = Category::create(['name' => $data['name']]);

        if (isset($data['subCategories'])) {
            $categoriesIds = [];
            foreach ($data['subCategories'] as $key => $value) {
                array_push($categoriesIds, $value['value']);
            }

            $subCategories = Category::whereIntegerInRaw('id', $categoriesIds)->get();

            foreach ($subCategories as $key => $subCategory) {
                $subCategory->update(['parent_id' => $category->id]);
            }
        }

        $data = Category::with('subCategories')->latest()->get();
        return response()->json(['success' => true, 'categories' => $data]);
    }

    public function update(Request $request, Category $category)
    {
        $data = Validator::make($request->all(), [
            "name" =>  'required|string',
            'subCategories.*.value' => 'exists:categories,id',
        ]);

        if ($data->fails()) {
            return response()->json(['success' => false, 'errors' => $data->errors()]);
        }

        $data = $data->validated();
        $category->update(['name' => $data['name']]);

        if (isset($data['subCategories'])) {
            // inserting new
            $categoriesIds = [];
            foreach ($data['subCategories'] as $key => $value) {
                array_push($categoriesIds, $value['value']);
            }

            // deleteing old
            $category->load('subCategories');
            foreach ($category->subCategories as $key => $subCategory) {
                $subCategory->update(['parent_id' => NULL]);
            }

            $subCategories = Category::whereIntegerInRaw('id', $categoriesIds)->get();

            foreach ($subCategories as $key => $subCategory) {
                if ($subCategory->parent_id == null) {
                    $subCategory->update(['parent_id' => $category->id]);
                }
            }
        } else {
            // deleteing old
            $category->load('subCategories');
            foreach ($category->subCategories as $key => $subCategory) {
                $subCategory->update(['parent_id' => NULL]);
            }
        }

        $data = Category::with('subCategories')->latest()->get();
        return response()->json(['success' => true, 'categories' => $data]);
    }

    public function delete(Category $category)
    {
        if ($category->delete()) {
            $data = Category::with('subCategories')->latest()->get();
            return response()->json(['success' => true, 'categories' => $data]);
        }

        return response()->json(['success' => false, 'categories' => []]);
    }
}
