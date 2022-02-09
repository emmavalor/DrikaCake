<div id="ChoiceCD">
            <input
              name="CDPart"
              type="number"
              class="field"
              id="CDPart"
              placeholder="Saississez le nombre de part"
            />
            <label for="CDGenoise">Choix de la genoise</label>
            <select name="CDGenoise" id="CDGenoise">
              <option value="0" disabled></option>
              <option value="Vanille">Vanille</option>
              <option value="Chocolat">Chocolat</option>
            </select>

            <label for="CDGanache">Choix de la ganache</label>
            <select id="CDGanache" name="CDGanache">
              <option value="0" disabled></option>
              <option value="fruitsrouges">Fruits Rouges</option>
              <option value="citron">Citron</option>
              <option value="fruitsexo">Fruits exotiques</option>
              <option value="noixcoco">Noix de Coco</option>
              <option value="pistache">Pistache</option>
              <option value="caramel">Caramel</option>
              <option value="speculoos">Speculoos</option>
              <option value="kinder">Kinder</option>
              <option value="nutella">Nutella</option>
              <option value="praline">Praline</option>
              <option value="mms">M&m's</option>
              <option value="smarties">Smarties</option>
              <option value="raffaello">Raffaello</option>
              <option value="ferrerorocher">Ferrero Rocher</option>
              <option value="oreo">Oreo</option>              
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
              <button id="ajout2" class="btn" value="ajout">
                Ajouter le gâteau
              </button>
            </div>
          </div>