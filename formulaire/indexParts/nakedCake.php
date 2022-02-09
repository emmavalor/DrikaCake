<div id="ChoiceNC">
            <input
              name="NCPart"
              type="number"
              class="field"
              id="NCPart"
              placeholder="Saississez le nombre de part"
            />
            <label for="NCGenoise">Choix de la genoise</label>
            <select name="NCGenoise" id="NCGenoise">
              <option value="0" disabled></option>
              <option value="Vanille">Vanille</option>
              <option value="Chocolat">Chocolat</option>
            </select>

            <!-- INFORMATION SUPPLEMENTAIRE GATEAU -->
            <div name="InfoSup" id="InfoSup">
              <h2>Informations supplémentaires</h2>
              <input name="allergie" id="allergie"
                type="text"
                name="allergie"
                id="allergie"
                class="field"
                placeholder="Allergie(s)"
              />
              <!-- <label for="">Ajouter une photo pour l'inspiration:</label>
              <input returnFileSize() type="file" name="image" id="image"
                type="file"
                id="avatar"
                name="image"
                class="field"
                accept=".jpg, .jpeg, .png"
              /> -->
              <textarea
                name="messagesupplementaire"
                placeholder="Informations supplémentaires"
                id="messagesupplementaire"
                class="field"
              ></textarea>
              <button id="ajout7" class="btn" value="ajout">
                Ajouter le gâteau
              </button>
            </div>
          </div>