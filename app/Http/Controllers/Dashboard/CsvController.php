<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CsvController extends Controller
{
    public function create($rows)
    {
        $fileName = $rows . '-rows.csv';

        $csv = fopen('php://temp/maxmemory:' . (5 * 1024 * 1024), 'r+');
        // $file = fopen($path . $fileName, 'w');

        $headings = array(
            'Id',
            'SKU',
            'Name',
            'Short description',
            'Meta description',
            'Description',
            'Tax status',
            'In Stock',
            'Weight',
            'Price',
            'Categories',
            'Images',
            'Meta Title',
            'Meta Keywords',
        );
        fputcsv($csv, $headings);
        for ($i = 0; $i < $rows; $i++) {
            $row = array(
                'Id' => $i,
                'SKU' => 'F4U-' . $i,
                'Name' => 'name of product ' . 'F4U-' . $i,
                'Short description' => 'Short description of product ' . 'F4U-' . $i,
                'Meta description' => 'name of product ' . 'F4U-' . $i,
                'Description' => 'Meta description of product ' . 'F4U-' . $i,
                'Tax status' => 'taxable',
                'In Stock' => rand(0, 1),
                'Weight' => rand(1, 155),
                'Price' => rand(100, 50000)/100,
                'Categories' => 'UPRIGHT > MAST CAPS',
                'Images' => 'https://forklift4u.com/wp-content/uploads/2022/09/9.jpeg,https://forklift4u.com/wp-content/uploads/2022/09/10.jpeg',
                'Meta Title' => 'Meta Title of product ' . 'F4U-' . $i,
                'Meta Keywords' => 'keyword1,keyword2',
            );
            fputcsv($csv, $row);
        }

        rewind($csv);

        $output = stream_get_contents($csv);
        Storage::disk('public')->put('/' . $fileName, $output);

        $headers = ['Content-Type: application/csv'];
        return response()->download(public_path('storage/' . $fileName), $rows . '-rows.csv', $headers);
    }

    public function getBlank()
    {
        $headers = ['Content-Type: application/csv'];
        return response()->download(public_path('csv/blank.csv'), 'blank.csv', $headers);
    }
}
