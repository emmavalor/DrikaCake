<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://kit.fontawesome.com/b0f29e9bfe.js" crossorigin="anonymous"></script>
		<link href="https://fonts.googleapis.com/css?family=Charmonman" rel="stylesheet"/>
		<link rel="stylesheet" href="css/styleAdmin.css">
		<script src="js/formulaire.js"></script>
		<link rel="icon" type="image/png" href="image/logo-final.png">
		<title>Administrateur</title>
	</head>

	<body>
		<section class="container">
			<div class="img">
				<img src="image/admin-co.png" alt="image administarteur">
			</div>

			<form method="POST" class="connexion" action="admin/espace_admin.php">
					<h1>Connexion</h1>
						<div class="input" id="input1">
							<label>Nom d'utilisateur</label>
							<input type="text" name="user" id="user" required>
						</div>

						<div class="input" id="input2">
							<label>Mot de pase</label>
							<input type="password" name="password" id="password" required>
							<span></span>
						</div>
					<input type="submit" name="submit" id="button" value="Connexion"></input>
			</form>
		</section>


	</body>
</html>