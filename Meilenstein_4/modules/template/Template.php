<?php
/**
 * ---------------
 * GitHub: [juliangiebel](https://github.com/juliangiebel/)
 * Date: 05.12.2017
 * Time: 20:10
 * @author Julian Giebel
 * @version 0.1.0
 * @TODO Document this module
 */
namespace Template {

    class Template {
        /**
         * @param string $template
         * @param array $list
         * @return string
         */
        public static function genFromList(string $template, array $list = array()):string {

                $output = $template;

                foreach ($list as $key => $arg) {
                    $output = preg_replace("/{{\s*?" . $key . "\s*?}}/", $arg, $output);
                }

                return $output;
        }

        /**
         * @param string $path
         * @return string
         */
        public static function templateFromFile(string $path):string {
            $template = file_get_contents($path);

            if($template === false){
                throw new \RuntimeException("File ". $path." not found.");
            }

            return $template;
        }

        /**
         * @param string $template
         * @param array $entryList
         * @return string
         */
        public static function templateForEach(string $template, array $entryList):string {

            $out = "";

            foreach ($entryList as $entry) {
                $out = $out.PHP_EOL.self::genFromList($template, $entry);
            }

            return $out;
        }
    }
}
