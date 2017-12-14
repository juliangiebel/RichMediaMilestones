<?php
include ('Edit.page.php');
include ('../../modules/template/Template.php');
include ('../../modules/data/CSV.php');
/**
 *
 */

use Data\CSV;
use Template\Template;
use Pages\Edit;
?>

<?=Template::genFromList(Template::templateFromFile('../../templates/header.php'),array("title" => "Bearbeiten","stylesheet" => "css/edit.css","base" => "../.."))?>

<?php

include ('../../components/navbar/Navbar.php');
$navItems = array(
    Navbar\navItem("../list/ListView.php",false,"fa fa-arrow-left fa-lg"),
);

Navbar\render($navItems);
?>

    <div class="content">
        <header>
            <h1>Edit:</h1>
        </header>
        <main>
            <?php
                Edit::process();
            ?>
        </main>
    </div>

<?=Template::genFromList(Template::templateFromFile('../../templates/footer.php'))?>