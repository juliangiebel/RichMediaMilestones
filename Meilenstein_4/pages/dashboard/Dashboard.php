<?php
include ('Dashboard.module.php');
include ('../../modules/template/Template.php');
/**
 *
 */
use Template\Template;
?>

<?=Template::genFromList(Template::templateFromFile('../../templates/header.php'),array("title" => "Dashboard"))?>

<p>super duper dash page!</p>

<?=Template::genFromList(Template::templateFromFile('../../templates/footer.php'))?>