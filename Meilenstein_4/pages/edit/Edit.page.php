<?php
/**
 * Created by PhpStorm.
 * User: Julian Giebel
 * Date: 14.12.2017
 * Time: 12:21
 */

namespace Pages;


use Data\CSV;
use Template\Template;

class Edit
{

    public static function process(){
        $id = $_GET["id"] ?? "new";

        if($id == "new"){

            self::renderForm([
                'path' => '../list/ListView.php',
                'name' => '',
                'desc' => '',
                'date' => '',
                'address' => '',
                'checked' => '',
                'id' => $id
            ]);
        } else {
            $data = CSV::getCSV('../../assets/data/data.csv')[$id];

            self::renderForm([
                'path' => '../list/ListView.php',
                'name' => $data[1],
                'desc' => $data[2],
                'date' => $data[0],
                'address' => $data[3],
                'checked' => 'checked',
                'id' => $id
            ]);
        }
    }

    public static function renderForm(array $values){
        echo Template::genFromList(Template::templateFromFile('../../templates/edit-form.php'),$values);
    }

}