<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <form
      id="DrikaForm"
      class="container"
      method="POST"
      onsubmit="sendRequest(event)"
    >
      <div class="contact-box">
        <div class="left"></div>
        <div class="right">
          <br />

          <div class="message">
      <h3>IMPORTANT</h3>
      <p>Besoin d'un account de 50% pour valider une commande</p>
    </div>
    <br>

          <?php include './indexParts/theme.php'; ?>

          <h2>Choix des gateaux</h2>
          <select
            id="ChoicesCakes"
            name="ChoicesCakes"
            onclick="displayNBChoice()"
          >
            <option value="G">Choisir un gâteau</option>
            <option value="CD">Cake Design</option>
            <option value="NB">Number Cake</option>
            <option value="NC">Naked Cake</option>
            <option value="CT">Cake Traditionnel</option>
            <option value="MC">Mini Cupcake</option>
            <option value="CP">Cake Pop</option>
            <option value="SM">Sucette Meringue</option>
            <option value="S">Sablés</option>
            <option value="TB">Truffes Brésiliennes</option>
            <option value="D">Desserts</option>
          </select>

          <!-- Number Cake -->
          <?php include './indexParts/numberCake.php'; ?>

          <!-- CAKE DESIGN -->
          <?php include './indexParts/cakeDesign.php'; ?>

          <!-- CAKE TRADITIONNEL -->
          <?php include './indexParts/cakeTrad.php'; ?>

          <!-- MINI CUPCACKE -->
          <?php include './indexParts/miniCupcake.php'; ?>

          <!-- SABLE -->
          <?php include './indexParts/sable.php'; ?>

          <!-- SUCETTE MERINGUE -->
          <?php include './indexParts/sucetteMeringue.php'; ?>

          <br />

          <div class="tabDesGateaux">
            <table name="cake1" id="me1" class="me1a"></table>

            <table name="cake2" id="me2" class="me2a"></table>

            <table name="cake3" id="me3" class="me3a"></table>

            <table name="cake4" id="me4" class="me4a"></table>

            <table name="cake5" id="me5" class="me5a"></table>

            <table name="cake6" id="me6" class="me6a"></table>
          </div>

          <br />
          <!-- INFO CLIENT -->
          <?php include './indexParts/infoClient.php'; ?>

        </div>
      </div>
    </form>
  </body>
</html>
