<?php
include ('Dashboard.page.php');
include ('../../modules/template/Template.php');
/**
 *
 */
use Template\Template;
?>

<?=Template::genFromList(Template::templateFromFile('../../templates/header.php'),array("title" => "Dashboard","stylesheet" => "css/dashboard.css","base" => "../.."))?>

<?php

include ('../../components/navbar/Navbar.php');
$navItems = array(
        Navbar\navItem("#",true,"fa fa-home"),
        Navbar\navItem("#",false,"fa fa-list"),
);

Navbar\render($navItems);

?>

<?=Template::genFromList(Template::templateFromFile('../../templates/footer.php'))?>