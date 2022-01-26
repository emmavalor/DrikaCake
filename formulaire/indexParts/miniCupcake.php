<div id="ChoiceMC">
            <input
              name="MCPart"
              type="number"
              id="MCPart"
              class="field"
              min="6" max="1900"
              step="6"
              placeholder="Entrez le nombre de part"
              required
            />
            <!-- Pour incrémenter j'ai utilisé "step" -->

          
            <label for="MCGanache">Choix de la ganache</label>
            <select id="MCGanache" name="MCGanache">
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
            
            <button id="ajout4" class="btn" value="ajout">
              Ajouter le gâteau
            </button>
          </div>