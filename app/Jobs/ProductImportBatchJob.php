<?php

namespace App\Jobs;

use Illuminate\Bus\Batch;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Log;
use Symfony\Component\ErrorHandler\Debug;
use Throwable;

class ProductImportBatchJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $file;
    /**
     * Create a new job instance.
     */
    public function __construct($file)
    {
        $this->file  = $file;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $chunk = [];
        $chunkCount = 100;

        $batch = Bus::batch([])->then(function (Batch $batch) {
            // All jobs completed successfully...
        })->catch(function (Batch $batch, Throwable $e) {
            // First batch job failure detected...
        })->finally(function (Batch $batch) {
            // The batch has finished executing...
        })->name('Bulk Products import Batch')->dispatch();

        // Open the file for reading
        $fileStream = fopen(storage_path('app/public/' . $this->file), 'r');

        $skipHeader = true;
        ini_set('auto_detect_line_endings', TRUE);
        while (($line = fgetcsv($fileStream)) !== false) {
            if ($skipHeader) {
                // Skip the header
                $skipHeader = false;
                continue;
            }

            if ($line[0] !== "") { // ignore blank lines
                array_push($chunk, $line);
            }

            if (count($chunk) === $chunkCount) {
                $batch->add(new ProductImportProcessJob($chunk));
                $chunk = [];
            }
            // For each line, we dispatch a job to process the line
        }
        
        // adding the remaining of the chunk
        if (count($chunk) != 0) {
            Log::info('chunk',$chunk);
            $batch->add(new ProductImportProcessJob($chunk));
        }

        // Close the file
        fclose($fileStream);

        // Deletes the file after processing
        unlink(storage_path('app/public/' . $this->file));
    }
}
