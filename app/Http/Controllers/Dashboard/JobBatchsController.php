<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;

class JobBatchsController extends Controller
{
    public function getAllBatchs()
    {
        $batchesModels = DB::table('job_batches')->where('pending_jobs', '!=', 0)->get();
        $batchesArray = [];
        if (count($batchesModels) > 0) {
            foreach ($batchesModels as $batch) {
                $batch = Bus::findBatch($batch->id);
                array_push(
                    $batchesArray,
                    [
                        'name' => $batch->name,
                        'totalJobs' => $batch->totalJobs,
                        'pendingJobs' => $batch->pendingJobs,
                        'failedJobs' => $batch->failedJobs,
                        'processedJobs' => $batch->processedJobs(),
                        'progress' => $batch->progress(),
                    ]
                );
            }
        }
        return response()->json(['success', true, 'data' => $batchesArray]);
    }
}
