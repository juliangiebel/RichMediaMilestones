<?php
/**CSV Data Module
 * Handles and reads data from files in CSV format.
 * ---------------
 * GitHub: [juliangiebel](https://github.com/juliangiebel/)
 * Date: 13.12.2017
 * Time: 17:41
 * @author Julian Giebel
 * @version 0.1.0
 */
namespace Data;


class CSV
{

    /**Returns the whole csv file as an array of arrays containing the individual values
     * @param string $filename
     * @return array
     */
    function getCSV(string $filename): array{
        $file = fopen($filename,'r+');
        $output = [];
        while (!feof($file)){
            array_push($output,fgetcsv($file));
        }
        fclose($file);
        return $output;
    }
}