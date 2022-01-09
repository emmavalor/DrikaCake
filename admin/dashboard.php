<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<script src="https://kit.fontawesome.com/b0f29e9bfe.js" crossorigin="anonymous"></script>
			<link href="https://fonts.googleapis.com/css?family=Charmonman" rel="stylesheet"/>
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
			<link rel="stylesheet" href="../css/styleAdmin.css">
			<script src="../js/formulaire.js" defer></script>
			<script src="../DrikaCake-master/scripts/cake.js" defer></script>
			<script src="../DrikaCake-master/scripts/App.js" defer></script>
			<link rel="icon" type="image/png" href="../image/logo-final.png">
			<title>Administrateur</title>
		</head>

		<body class="page2">

			<header class="page2">
				<div class="nav-part">
					<div class="cake-filter">
						<span class="filter-item active" data-target='.allcake'>Tous les gâteaux</span>
						<span class="filter-item" data-target='.bigcake'>Gâteaux</span>
						<span class="filter-item" data-target='.littlecake'>Petits gâteaux</span>
						<span class="filter-item" data-target='.dessert'>Dessert</span>
        			</div>
				</div>
			</header>

			<div class="button-dash">
				<a href="logout.php">Déconnexion</a>
			</div>

			<div class="admin-part">
				<h2>Espace administrateur</h2>
					<div id="bienvenue">
						<p>Bienvenue <span> <?php echo $_GET['user']; ?> !</span></p>
						<p></p>
					</div>
			</div>

			

			<section class="display-cake">
				<div class="alert alert-success" role="alert">
			  		A simple success alert—check it out!
				</div>
				<div class="alert alert-danger" role="alert">
			  		A simple danger alert—check it out!
				</div>
					<div class="allcake tab-content active">
						 <p>emma</p>
					</div>

					<div class="bigcake tab-content">
						 <p>cvfghjkl</p>
					</div>

					<div class="littlecake tab-content">
						 <p>lorem ipsum</p>
					</div>

					<div class="dessert tab-content">
						 <p>emma</p>
					</div>
			</section>

			

			<section class="form">
				<form action="" method="POST" class="d-flex flex-column flex-wrap align-content-center mt-2">
		<div class="row">
		    <div class="col mt-2 d-flex flex-column align-content-center flex-wrap" style="min-width: 200px;">
		     	<div class="form-group text-align-center">
					<label>Entrez le nom du gâteau
					<input class="form-control" type="text" name="nom" id="nom" placeholder="Nom" required>
					</label>
				</div>
		    </div>
		    <div class="col mt-2 d-flex flex-column align-content-center flex-wrap" style="min-width: 200px;">
		    	<div class="form-group text-align-center">
					<label>Entrez la description du gâteau
					<textarea class="form-control" name="description" id="description" placeholder="Description" required></textarea>
					</label>
				</div>
		    </div>
		</div>

		<div class="row">
		    <div class="col mt-2 d-flex flex-column align-content-center flex-wrap" style="min-width: 200px;">
		     	<div class="form-group text-align-center">
					<label>Citez les allergènes du gâteu
					<textarea class="form-control" type="text" name="allergene" id="allergene" placeholder="Allergene"></textarea>
					</label>
				</div>
		    </div>
		    <div class="col mt-2 d-flex flex-column align-content-center flex-wrap" style="min-width: 200px;">
		    	<div class="form-group text-align-center">
					<label>Le gâteau est-il bio ?
						<div class="form-check">
							<input class="form-check-input" type="radio" name="question1" value="oui" id="oui1" required /><label class="form-check-label" for="oui1">oui</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="question1" value="non" id="non1" required /><label class="form-check-label" for="non1">non</label>
						</div>
					</label>
				</div>
			</div>
		</div>

		<div class="row">
		    <div class="col mt-2 d-flex flex-column align-content-center flex-wrap" style="min-width: 200px;">
				<div class="form-group text-align-center">
					<label>Le gâteau contient-il du gluten ?
						<div class="form-check">
							<input class="form-check-input" type="radio" name="question2" value="oui" id="oui2" required /><label class="form-check-label" for="oui2">oui</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="question2" value="non" id="non2" required /><label class="form-check-label" for="non2">non</label>
						</div>
					</label>
				</div>
			</div>
		    <div class="col mt-2 d-flex flex-column align-content-center flex-wrap" style="min-width: 200px;">
				<div class="form-group text-align-center">
					<label>Citez la ou les génoise(s)
					<textarea class="form-control" name="genoise" id="genoise" placeholder="Génoise" required></textarea>
					</label>
				</div>
			</div>
		</div>

		<div class="row">
		    <div class="col mt-2 d-flex flex-column align-content-center flex-wrap" style="min-width: 200px;">
				<div class="form-group text-align-center">
					<label>Citez la ou les ganache(s)
					<textarea class="form-control" name="ganache" id="ganache" placeholder="Ganache" required></textarea>
					</label>
				</div>
		    </div>
		    <div class="col mt-2 d-flex flex-column align-content-center flex-wrap" style="min-width: 200px;">
				<div class="form-group text-align-center">
					<label>Precisez le délai de commande (en jour)
					<input class="form-control" type="number" name="delai" id="delai" placeholder="Délai de commande" required>
					</label>
				</div>
			</div>
		</div>

		<div class="row">
		    <div class="col mt-2 d-flex flex-column align-content-center flex-wrap" style="min-width: 200px;">
				<div class="form-group text-align-center">
					<label>Precisez le tarif pour chaque part
					<textarea class="form-control" type="number" name="tarif" id="tarif" placeholder="Tarif" required></textarea>
					</label>
				</div>
		    </div>
		    <div class="col mt-2 d-flex flex-column align-content-center flex-wrap" style="min-width: 200px;">
				<div class="form-group text-align-center">
					<label>Choissisez une photo
					<input class="form-control" type="file" class="form-control-file" id="photo" name="photo" accept="image/png, image/jpeg, image/jpg">
					</label>
				</div>
			</div>
		</div>

		<button type="submit" class="btn btn-primary mt-5">Submit</button>
	</form>
			</section>
		</body>
	</html>
