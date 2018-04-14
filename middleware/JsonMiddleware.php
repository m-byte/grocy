<?php

namespace Grocy\Middleware;

class JsonMiddleware extends BaseMiddleware
{
	public function __invoke(\Slim\Http\Request $request, \Slim\Http\Response $response, callable $next)
	{
		$response = $next($request, $response, $next);
		return $response->withHeader('Content-Type', 'application/json');
	}
}
