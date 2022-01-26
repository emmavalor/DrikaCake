<?php 
try {
		$bdd = new PDO('mysql:host=localhost;dbname=drika', 'root', 'root');
}

catch (PDOException $e) {
	echo "Erreur: ".$e->getMessage()."<br/>"; 
	die();
}

//  Récupération de l'utilisateur et de son password hashé
$user = $_POST['user'];
$userClient = $_POST['user'];

$req = $bdd->prepare("SELECT user, password FROM admin WHERE user = '$userClient'");
$req->execute(array(
    'user' => $user));
$resultat = $req->fetch();

// Comparaison du pass envoyé via le formulaire avec la base

// Comparison of the password with the database
$isPasswordCorrect = password_verify($_POST['password'], $resultat['password']);


if (!$resultat)
{
    header("Location:error.php");
    // echo 'Mauvais identifiant ou mot de passe ! <br/>';
    // echo "<a href=\"../admin.php\">Retourner à la page de connexion</a>";
}
else
{
    if ($isPasswordCorrect) {
        session_start();
        $_SESSION['user'] = $user;
        header("Location:dashboard.php?user=$user");
    }
    else {
        header("Location:error.php");
        // echo '<h2> Mauvais identifiant ou mot de passe ! </h2>';
        // echo "<a href=\"../admin.php\"><p>Retourner à la page de connexion</p></a>";
    }
}
