<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Employees/Employees', [
            'auth' => $request->user(),
        ]);
    }
}
