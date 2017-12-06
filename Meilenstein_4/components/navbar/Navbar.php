<?php
/**
 *
 * User: jugiebel
 * Date: 06.12.17
 * Time: 14:25
 * @TODO Document
 */
namespace Navbar{
    use Template\Template;

    function navItem(string $dest, bool $active, string $icon){
        $activeString = $active? "active" : "";

        return array("dest" => $dest, "active" => $activeString, "icon" => $icon);
    }


    function render(array $items)
    {
        echo "<nav class='sidebar'>".PHP_EOL;

        echo Template::templateForEach("<a href='{{ dest }}' class='link {{ active }}'><i class='{{ icon }}' aria-hidden='true'></i> 
            </a>", $items).PHP_EOL;

        echo "</nav>".PHP_EOL;
    }

}