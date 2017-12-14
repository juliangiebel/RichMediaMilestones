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

    private $filename;
    public $data;


    /**
     * CSV constructor.
     * @param $filename
     */
    public function __construct($filename)
    {

        $this->filename = $filename;
        $this->data = self::getCSV($filename);

    }

    /**Returns the whole csv file as an array of arrays containing the individual values
     * @param string $filename
     * @return array
     */
    public static function getCSV(string $filename): array{
        $file = fopen($filename,'r+');
        $output = array('header' => fgetcsv($file));
        while (!feof($file)){
            $row = fgetcsv($file);
            if(isset($row[0])) array_push($output,$row);
        }
        fclose($file);
        return $output;
    }

    public function add(array $entry){
        array_push($this->data, $entry);
    }

    public function remove($id){
        array_slice($this->data,$id,1);
    }

    public function setCSV(){
        $file = fopen($this->filename,'w');
        fputcsv($file,$this->data['header']);
        foreach ($this->data as $index => $entry){
            if($index != 'header'){
                fputcsv($file,$entry);
            }
        }
        fclose($file);
    }

    /**
     * @param number $compIndex
     *
     * @return array
     */

    public function getLatest($compIndex):array{
        $result = [];
        $last = $this->data[0];
        $lastIndex = 0;


        foreach ($this->data as $index => $row){
            if( $index != 'header' && self::compareByDate($last[$compIndex], $row[$compIndex])){
                    //call_user_func($comp,$last[$compIndex], $row[$compIndex]))
                $lastIndex = $index;
            }
        }

        return $this->data[$lastIndex];
    }

    public static function compareByDate($last, $current){
        $lastTime = strtotime($last);
        $currentTime = strtotime($current);

        return $lastTime > $currentTime;
    }
}