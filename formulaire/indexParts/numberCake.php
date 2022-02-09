<div id="ChoiceNB" name="Numbercakeu">
  <!-- <h3 id="NBName" name="NBName">Number Cake</h3> -->
  <br>
            <input
              name="NBGateau"
              type="number"
              id="field1"
              class="field"
              placeholder="Nombre de votre gâteau"
            />

            <input
              name="NBPart"
              type="number"
              id="field2"
              class="field"
              min="10" max="25"
              step="5"
              placeholder="Entrez le nombre de part"
            />

            <label for="NBGenoise">Choix de la genoise</label>
            <select name="NBGenoise" id="NBGenoise">
              <option value="0" disabled></option>
              <option value="Vanille">Vanille</option>
              <option value="Citron">Citron</option>
              <option value="Chocolat">Chocolat</option>
            </select>
            <label for="NBGanache">Choix de la ganache</label>
            <select name="NBGanache" id="NBGanache">
              <option value="0" disabled></option>
              <option value="fruits rouge">Fruits rouges</option>
              <option value="Citron">Citron</option>
              <option value="Fruit Exotiques">Fruits exotiques</option>
            </select>
            <button id="ajout1" class="btn" value="ajout">
              Ajouter le gâteau
            </button>
          </div>