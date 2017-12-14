<?php
/**CSV Data Module
 * Handles and reads data from files in CSV format.
 * ---------------
 * GitHub: [juliangiebel](https://github.com/juliangiebel/)
 * Date: 13.12.2017
 * Time: 17:41
 * @author Julian Giebel
 * @version 0.2.0
 */
namespace Data;

//Todo: make this handle different csv structures.

class CSV
{

    private $data;


    /**
     * CSV constructor.
     * @param $filename
     */
    public function __construct($filename)
    {
        $data = self::getCSV($filename);
    }

    /**Returns the whole csv file as an array of arrays containing the individual values
     * @param string $filename
     * @return array
     */
    static function getCSV(string $filename): array{
        $file = fopen($filename,'r+');
        $output = array('header' => fgetcsv($file));
        while (!feof($file)){
            array_push($output,fgetcsv($file));
        }
        fclose($file);
        return $output;
    }


    /**
     * @param number $compIndex
     * @param callable $comp
     * @return array
     */
    function getLatest(number $compIndex, callable $comp):array{
        $result = [];
        $last = $this->data[0];


        foreach ($this->data as $index => $row){
            if( $index != 'header' && $comp($last[$compIndex], $row[$compIndex])){
                $lastIndex = $index;
            }
        }

        return $last;
    }

    static function compareByDate($last, $current){
        $lastTime = strtotime($last);
        $currentTime = strtotime($current);

        return $lastTime < $currentTime;
    }
}