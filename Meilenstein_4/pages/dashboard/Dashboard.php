<?php
include ('Dashboard.page.php');
include ('../../modules/template/Template.php');
include ('../../modules/data/CSV.php');
/**
 *
 */

use Data\CSV;
use Template\Template;
?>

<?=Template::genFromList(Template::templateFromFile('../../templates/header.php'),array("title" => "Dashboard","stylesheet" => "css/dashboard.css","base" => "../.."))?>

<?php

include ('../../components/navbar/Navbar.php');
$navItems = array(
        Navbar\navItem("#",true,"fa fa-home fa-lg"),
        Navbar\navItem("../list/ListView.php",false,"fa fa-list fa-lg"),
        Navbar\navItem("../calendar/Calendar.php",false,"fa fa-calendar fa-lg"),
);

Navbar\render($navItems);
?>

<div class="content">
    <header>
        <h1>Event Kalender | Aktuell:</h1>
    </header>
    <main>
        <?php
            $data = new CSV('../../assets/data/data.csv');
            $entry = $data->getLatest(0);
            echo Template::genFromList(Template::templateFromFile('../../templates/list-entry.php'),['date' => $entry[0],'name' => $entry[1],
                'desc' => $entry[2],'address' => $entry[3],'button-display'=>'none']);
            ?>
    </main>
</div>

<?=Template::genFromList(Template::templateFromFile('../../templates/footer.php'))?>