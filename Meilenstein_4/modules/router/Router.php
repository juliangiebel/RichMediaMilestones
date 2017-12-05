<?php
/**
 * Module used for parsing out variables from readable urls.
 * Uses regular expressions to parse variables out of a given url
 * and pass them to a function or page.
 * Also routes urls to pages and shows 404 message for unknown urls.
 *
 * Inspired by [steampixel/simplePHPRouter](https://github.com/steampixel/simplePHPRouter)
 *
 * ---------------
 * GitHub: [juliangiebel](https://github.com/juliangiebel/)
 * Date: 04.12.2017
 * Time: 20:51
 * @author Julian Giebel
 * @version 1.0.0
 */
namespace Router {


    /**
     * Can be used globally to store values.
     *
     * *Unaltered version of config.php from repository linked in module description*
     * @package Router
     * @author [steampixel](https://github.com/steampixel)
     */
    class Config
    {


        private static $registry = Array();

        /**
         * Sets a key value pair.
         * @param string $key
         * @param mixed $value
         */
        public static function set($key, $value)
        {
            self::$registry[$key] = $value;
        }

        /**
         * Returns the corresponding value for the given key.
         * @param string $key
         * @return bool|mixed Returns false if the key isn't set otherwise the set value.
         */
        public static function get($key)
        {
            if (array_key_exists($key, self::$registry)) {
                return self::$registry[$key];
            }
            return false;
        }

    }
    //TODO: Document this class.
    /**
     * Router class.
     * @package Router
     */
    class Router
    {



        public static $routes = Array();
        public static $routes404 = Array();
        public static $path;

        public static function init(){

            $parsed_url = parse_url($_SERVER['REQUEST_URI']);//Parse Uri
            if(isset($parsed_url['path'])){
                self::$path = $parsed_url['path'];
            }else{
                self::$path = '/';
            }

        }

        /**
         * Adds a route to the list of possible routes.
         * @param string $expression Expression to match against the url.
         * @param callback $function Callback function the parsed parameters are passed to.
         */
        public static function add($expression,$function){

            array_push(self::$routes,Array(
                'expression'=>$expression,
                'function'=>$function
            ));

        }

        /**
         * Adds a function to the list of functions that get called when the url couldn't be matched against a route.
         * @param callback $function
         */
        public static function add404($function){

            array_push(self::$routes404,$function);

        }

        //TODO: Elaborate description
        /**
         * Start matching the current url.
         * @TODO Validate urls to prevent injection attacks when using (*) inside expression or prevent its use.
         */
        public static function run(){

            $route_found = false;

            foreach(self::$routes as $route){

                //Add basepath to matching string
                if(Config::get('basepath')&&Config::get('basepath')!=''&&Config::get('basepath')!='/'){
                    $route['expression'] = '('.Config::get('basepath').')'.$route['expression'];
                }

                //Add 'find string start' automatically
                $route['expression'] = '^'.$route['expression'];

                //Add 'find string end' automatically
                $route['expression'] = $route['expression'].'$';

                //echo $route['expression'].'<br/>';

                //check match
                if(preg_match('#'.$route['expression'].'#',self::$path,$matches)){
                    array_shift($matches);//Always remove first element. This contains the whole string

                    if(Config::get('basepath')&&Config::get('basepath')!=''&&Config::get('basepath')!='/'){

                        array_shift($matches);//Remove Basepath

                    }

                    call_user_func_array($route['function'], $matches);

                    $route_found = true;

                }

            }

            if(!$route_found){

                foreach(self::$routes404 as $route404){

                    call_user_func_array($route404, Array(self::$path));

                }

            }

        }
    }
}