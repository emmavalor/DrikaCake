<?php        
session_start();  
//session_destroy sert à detruire la session  
session_destroy();  
// echo" Vous êtes  déconnecté";    
?> 

<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<script src="https://kit.fontawesome.com/b0f29e9bfe.js" crossorigin="anonymous"></script>
			<link href="https://fonts.googleapis.com/css?family=Charmonman" rel="stylesheet"/>
			<link rel="stylesheet" href="../css/styleAdmin.css">
			<script src="../js/formulaire.js" defer></script>
			<link rel="icon" type="image/png" href="../image/logo-final.png">
			<title>Déconnexion</title>
		</head>

		<body class="page3">
			<h2>Vous êtes déconnecté(e)</h2>

			<div id="deconnexion">
				<p>Aurevoir et à bientôt</p>
				<a href="../admin.php"><p>Cliquez ici pour revenir à la page de connexion</p></a>
			</div>

		</body>
	</html>