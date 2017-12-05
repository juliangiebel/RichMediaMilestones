<?php
include ('modules/router/Router.php');
/**
 * ---------------
 * GitHub: [juliangiebel](https://github.com/juliangiebel/)
 * Date: 04.12.2017
 * Time: 19:51
 */
use Router\Config;
use Router\Router;

Config::set('basepath','/');

Router::init();

Router::add('',function(){
    //TODO: Show Page Dash
});

Router::add('list',function(){
    //Do something
    echo 'Hello from test.html';
});

Router::add('fallback/()/detail',function($title){
    //Do something
    echo 'Hello from test.html';
});

Router::add('fallback/()/edit',function($title){
    //Do something
    echo 'Hello from test.html';
});

Router::add404(function($url){

    //Send 404 Header
    header("HTTP/1.0 404 Not Found");
    echo '404 :-(';

});

Router::run();