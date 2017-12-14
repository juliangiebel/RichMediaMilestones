<?php
include ('ListView.page.php');
include ('../../modules/template/Template.php');
include ('../../modules/data/CSV.php');
/**
 *
 */

use Data\CSV;
use Pages\ListView;
use Template\Template;

ListView::process();
?>

<?=Template::genFromList(Template::templateFromFile('../../templates/header.php'),array("title" => "Events","stylesheet" => "css/listView.css","base" => "../.."))?>

<?php

include ('../../components/navbar/Navbar.php');
$navItems = array(
    Navbar\navItem("../dashboard/Dashboard.php",false,"fa fa-home fa-lg"),
    Navbar\navItem("#",true,"fa fa-list fa-lg"),
    Navbar\navItem("../calendar/Calendar.php",false,"fa fa-calendar fa-lg"),
);

Navbar\render($navItems);
?>

    <div class="content">
        <header>
            <h1>Events:</h1>
            <div class="button"><a href="../edit/Edit.php?id=new" class="link"><span class="fa fa-plus fa-lg"></span></a></div>
        </header>
        <main>
            <?php ListView::renderList(CSV::getCSV('../../assets/data/data.csv')) ?>
        </main>
    </div>

<?=Template::genFromList(Template::templateFromFile('../../templates/footer.php'))?>