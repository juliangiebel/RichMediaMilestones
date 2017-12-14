<?php
/**
 * Created by PhpStorm.
 * User: Julian Giebel
 * Date: 14.12.2017
 * Time: 11:33
 */

namespace Pages;


use Data\CSV;
use Template\Template;

class ListView
{

    public static function process(){

        $csv = new CSV('../../assets/data/data.csv');

        if(isset($_GET["delete"])){
            echo "rm";
            $csv->remove($_GET["id"]);
            $csv->setCSV();
        }

        if(isset($_POST["submit"])){

            if(isset($_POST["edit"])){
                echo $_POST["edit"];
                $csv->remove($_GET["id"]);
            }
            $entry = [
                $_POST["date"],
                $_POST["name"],
                $_POST["description"],
                $_POST["address"]
            ];
            $csv->add($entry);
            $csv->setCSV();
        }
    }

    public static function renderList(array $list){

        foreach ($list as $index => $entry){

            if($index === 'header') {
                echo '<div class="list-header"><h4>'.$entry[1].'</h4><h4>'.$entry[3].'</h4><h4>'.$entry[0].'</h4></div>';
            }else{
               echo Template::genFromList(Template::templateFromFile('../../templates/list-entry.php'),
                   [
                       'date' => $entry[0],
                       'name' => $entry[1],
                       'desc' => $entry[2],
                       'address' => $entry[3],
                       'button-display' => 'block',
                       'edit-path' => '../edit/Edit.php',
                       'view-path' => './ListView.php',
                       'id' => $index
                   ]);
           }
        }

    }

}