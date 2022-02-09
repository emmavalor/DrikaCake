<?php

$to = 'emmavalor62@gmail.com';
$from = $_POST['email']; 
$name = $_POST['nom'];
$prenom = $_POST['prenom'];
$phoneNumber = $_POST['phoneNumber'];
$ville = $_POST['ville'];
$codePostal = $_POST['codePostal'];
$adresse = $_POST['adresse'];
$adressePlus = $_POST['adressePlus']; 
$message = $_POST['Message'];
$date = $_POST['date'];
$time = $_POST['heure'];

// pour l'image
// $image = $_FILES['image'];
// $image_temp_name = $_FILES['image'];
// move_uploaded_file($image_temp_name, "/$image");

// if ($_FILES["image"]["size"] > 500000) {
//     echo "Sorry, your file is too large.";
//     $uploadOk = 0;
// }


$theme = " l'evenement " . $_POST["typeEvenement"]. " Le theme : " .$_POST["theme"]. " a la date du " .$date. " a cette heure ci " .$time;
// $numberCake = array ($_POST["NBGateau"], $_POST["NBPart"], $_POST["NBGenoise"], $_POST["NBGanache"]);
$numberCake = "".$_POST["NBName"]. " " .$_POST["NBGateau"] . " " . $_POST["NBPart"] . " ".$_POST["NBGenoise"]." ".$_POST["NBGanache"];
$cakeDesign = "Number Cake" . " " .$_POST["CDPart"]." ".$_POST["CDGenoise"]." ".$_POST["image"]." ".$_POST["allergie"]." ".$_POST["messagesupplementaire"];
$cakeTrad = "Cake Traditionnel". " " . $_POST["TypeCake"];
$miniCup = "Mini Cupcake". " " . $_POST["MCPart"]. "" . $_POST["MCGanache"];
$sables = "Sablés". " " . $_POST["SPart"]. "" . $_POST["SGalacage"];
$sucetteMeringue = "Sucette Meringue". " " . $_POST["SMPart"];
$cakePop = "Cake Pop". " " . $_POST["CPPart"];
$nakedCake = "Naked Cake". " " . $_POST["NCPart"]. " " . $_POST["NCGenoise"]. " " . $_POST["InfoSup"]. " " . $_POST["messagesupplementaire"];
$truffesBresil = "Truffes Brésiliennes". " " . $_POST["TypeTB"];



$client = " 
commande de: 
nom: $name 
prenom : $prenom
Email: $from
N° de telephone: $phoneNumber
Ville: $ville
Code postal: $codePostal 
Adresse: $adresse  
Message: $message
";

$commande = "
theme: $theme
commandes: $numberCake, $cakeDesign, $cakeTrad, $miniCup, $sables, $sucetteMeringue, $cakePop, $nakedCake, $truffesBresil
";


mail($to, $client, $commande);

if(filter_var($from, FILTER_VALIDATE_EMAIL)) {
    echo "ok"; }

?>