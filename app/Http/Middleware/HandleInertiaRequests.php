<?php

namespace App\Http\Middleware;

use App\Helpers\Helper;
use App\Http\Controllers\Site\ShoppingCartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
       
        return array_merge(parent::share($request), [
            // Synchronously...
            'appName' => config('app.name'),
            'appUrl' => config('app.url'),


            // Lazily...
            'user' => auth()->user(),
            'currency' => Helper::getCurrency((session()->get('currency') ? session()->get('currency') : 'USD')),
            'profile' => Auth::user()->profile ?? null,

            'message' => session()->get('message'),
            'error' => session()->get('error'),
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy())->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'user.authenticated' => auth()->check(),
            'user.permissions' => function () use ($request) {
                return ($request->user() ? $request->user()->getAllPermissions()->pluck('name') : null);
            },
            'user.roles' => function () use ($request) {
                return ($request->user() ? $request->user()->roles()->pluck('name') : null);
            },
        ]);
    }
}
