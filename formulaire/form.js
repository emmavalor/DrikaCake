function chargerPage() {
    fetch(`../../../DrikaCakeML-master/DrikaCake-master/src/controllers/request.php?function=findCake`)
        .then(result => 
            result.json())
        .then(data => {
            if (data.status === "OK") {
             formCreate(data.result);
             hideChoices(data.result);
             displayNBChoice(data.result);
             addCake(data.result);

            } else {
                flashMessage(false);
            }
        }
        );
}
chargerPage();


function formCreate(data) {

    let contact_box = document.createElement('div');
    contact_box.setAttribute('class', 'contact-box');
    
    let left = document.createElement('div');
    left.setAttribute('class', 'left');

    let right = document.createElement('div');
    right.setAttribute('class', 'right');

    let br = document.createElement('br');

    let message = document.createElement('div');
    message.setAttribute('class', 'message');

    let h3_important = document.createElement('h3');
    h3_important.textContent = 'IMPORTANT';

    let p_info = document.createElement('p');
    p_info.textContent = "Besoin d'un account de 50% pour valider une commande" ;

    let br2 = document.createElement('br');

    // Evenement 

    let h2_evenement = document.createElement('h2');
    h2_evenement.textContent = 'Votre évènement';

    let input_evenement = document.createElement('input');
    input_evenement.setAttribute('name', 'typeEvenement');
    input_evenement.setAttribute('type', 'text');
    input_evenement.setAttribute('id', 'typeEvenement');
    input_evenement.setAttribute('class', 'field');
    input_evenement.setAttribute('placeholder', "Type d'évènement");

    let input_date = document.createElement('input');
    input_date.setAttribute('name', 'date');
    input_date.setAttribute('type', 'date');
    input_date.setAttribute('id', 'date');
    input_date.setAttribute('class', 'field');

    let input_heure = document.createElement('input');
    input_heure.setAttribute('name', 'heure');
    input_heure.setAttribute('type', 'time');
    input_heure.setAttribute('id', 'time');
    input_heure.setAttribute('class', 'field');

    // Selection des gateaux

    let h2_choix = document.createElement('h2');
    h2_choix.textContent = 'Choix des gâteaux';

    let select_gateaux = document.createElement('select');
    select_gateaux.setAttribute('id', 'ChoicesCakes');
    select_gateaux.setAttribute('name', 'ChoicesCakes');
    select_gateaux.setAttribute('onchange', `displayNBChoice()`);

    let optionDisabled = document.createElement('option');
    optionDisabled.setAttribute('value', ' ');
    optionDisabled.textContent = 'Choix du gâteau';

    select_gateaux.appendChild(optionDisabled);

    data.forEach(cake => {
        let option_gateaux = document.createElement('option');
        option_gateaux.setAttribute('value', `${cake.nom}`);
        option_gateaux.setAttribute('id', `Cake${cake.nom}`);
        option_gateaux.textContent = `${cake.nom}`;

        select_gateaux.appendChild(option_gateaux);
    });


    contact_box.appendChild(left);
    contact_box.appendChild(right);

    right.appendChild(br);
    right.appendChild(message);

    message.appendChild(h3_important);
    message.appendChild(p_info);

    right.appendChild(br2);

    right.appendChild(h2_evenement);
    right.appendChild(input_evenement);
    right.appendChild(input_date);
    right.appendChild(input_heure);

    right.appendChild(h2_choix);
    right.appendChild(select_gateaux);

    data.forEach(cake => {
        let divCake = document.createElement('div');
        divCake.setAttribute('id', `cake${cake.id}`);

        let inputCake = document.createElement('input');
        inputCake.setAttribute('name', `${cake.nom}`);
        inputCake.setAttribute('id', `number${cake.nom}`);
        inputCake.setAttribute('type', 'number');
        inputCake.setAttribute('class', 'field');
        inputCake.setAttribute('min', `${cake.minimumCommande}`);
        inputCake.setAttribute('step', `${cake.minimumCommande}`);
        inputCake.setAttribute('placeholder', `Entrez le nombre que vous souhaitez pour ${cake.nom}` );

        // choix de la ganache

            if (cake.ganache != "Il n'y a pas de ganache" && cake.ganache != '' && cake.ganache != "Il n'y a pas de ganache. Des décorations sont présentes pour couvrir le gâteau." && cake.ganache != "Noix de coco" && cake.ganache != "Chocolat"){

                let labelGanache = document.createElement('label');
                labelGanache.setAttribute('for', `${cake.nom}`);
                labelGanache.textContent = 'Choix de la ganache';
        
                let selectGanache = document.createElement('select');
                selectGanache.setAttribute('name', `${cake.nom}Ganache`);
                selectGanache.setAttribute('id', `${cake.nom}Ganache`);
        
                let optionGanacheV = document.createElement('option');
                optionGanacheV.setAttribute('value', 'Vanille');
                optionGanacheV.textContent = 'Vanille';
        
                let optionGanacheC = document.createElement('option');
                optionGanacheC.setAttribute('value', 'Chocolat');
                optionGanacheC.textContent = 'Chocolat';
        
                let optionGanacheN = document.createElement('option');
                optionGanacheN.setAttribute('value', 'Nutella');
                optionGanacheN.textContent = 'Nutella';
        
                let optionGanacheK = document.createElement('option');
                optionGanacheK.setAttribute('value', 'Kinder');
                optionGanacheK.textContent = 'Kinder';
        
                let optionGanacheO = document.createElement('option');
                optionGanacheO.setAttribute('value', 'Oreo');
                optionGanacheO.textContent = 'Oreo';
        
                let optionGanacheM = document.createElement('option');
                optionGanacheM.setAttribute('value', "M&m's");
                optionGanacheM.textContent = "M&m's";
        
                let optionGanacheS = document.createElement('option');
                optionGanacheS.setAttribute('value', 'Smarties');
                optionGanacheS.textContent = 'Smarties';
        
                let optionGanacheCa = document.createElement('option');
                optionGanacheCa.setAttribute('value', 'Caramel');
                optionGanacheCa.textContent = 'Caramel';
        
                let optionGanacheSpe = document.createElement('option');
                optionGanacheSpe.setAttribute('value', 'Spéculoos');
                optionGanacheSpe.textContent = 'Spéculoos';
        
                let optionGanacheNDC = document.createElement('option');
                optionGanacheNDC.setAttribute('value', 'Noix de coco');
                optionGanacheNDC.textContent = 'Noix de coco';
        
                let optionGanacheFE = document.createElement('option');
                optionGanacheFE.setAttribute('value', 'Fruits éxotiques');
                optionGanacheFE.textContent = 'Fruits éxotiques';
        
                let optionGanacheFR = document.createElement('option');
                optionGanacheFR.setAttribute('value', 'Fruits rouges');
                optionGanacheFR.textContent = 'Fruits rouges';
        
                let optionGanacheF = document.createElement('option');
                optionGanacheF.setAttribute('value', 'Fraise');
                optionGanacheF.textContent = 'Fraise';
        
                let optionGanacheFram = document.createElement('option');
                optionGanacheFram.setAttribute('value', 'Framboise');
                optionGanacheFram.textContent = 'Framboise';
        
                let optionGanacheCi = document.createElement('option');
                optionGanacheCi.setAttribute('value', 'Citron');
                optionGanacheCi.textContent = 'Citron';
        
                let optionGanacheMy = document.createElement('option');
                optionGanacheMy.setAttribute('value', 'Myrtille');
                optionGanacheMy.textContent = 'Myrtille';
        
                let optionGanacheP = document.createElement('option');
                optionGanacheP.setAttribute('value', 'Pistache');
                optionGanacheP.textContent = 'Pistache';
        
                divCake.appendChild(labelGanache);
                divCake.appendChild(selectGanache);
                selectGanache.appendChild(optionGanacheV);
                selectGanache.appendChild(optionGanacheC);
                selectGanache.appendChild(optionGanacheN);
                selectGanache.appendChild(optionGanacheK);
                selectGanache.appendChild(optionGanacheO);
                selectGanache.appendChild(optionGanacheM);
                selectGanache.appendChild(optionGanacheS);
                selectGanache.appendChild(optionGanacheCa);
                selectGanache.appendChild(optionGanacheSpe);
                selectGanache.appendChild(optionGanacheNDC);
                selectGanache.appendChild(optionGanacheFE);
                selectGanache.appendChild(optionGanacheFR);
                selectGanache.appendChild(optionGanacheF);
                selectGanache.appendChild(optionGanacheFram);
                selectGanache.appendChild(optionGanacheCi);
                selectGanache.appendChild(optionGanacheMy);
                selectGanache.appendChild(optionGanacheP);
        }

        // choix de la genoise

            if (cake.genoise != '' && cake.genoise != 'Chocolat' && cake.genoise != 'Citron' && cake.genoise != 'Vanille' && cake.genoise != 'Banane' && cake.genoise != 'Orange' && cake.genoise != 'Manioc' && cake.genoise != 'Noix de Coco' && cake.genoise != 'Carotte'){

                let labelGenoise = document.createElement('label');
                labelGenoise.setAttribute('for', `${cake.nom}`);
                labelGenoise.textContent = 'Choix de la genoise';
        
                let selectGenoise = document.createElement('select');
                selectGenoise.setAttribute('name', `${cake.nom}Genoise`);
                selectGenoise.setAttribute('id', `${cake.nom}Genoise`);
        
                let optionGenoiseV = document.createElement('option');
                optionGenoiseV.setAttribute('value', 'Vanille');
                optionGenoiseV.textContent = 'Vanille';
        
                let optionGenoiseC = document.createElement('option');
                optionGenoiseC.setAttribute('value', 'Chocolat');
                optionGenoiseC.textContent = 'Chocolat';            
        
                divCake.appendChild(labelGenoise);
                divCake.appendChild(selectGenoise);
                selectGenoise.appendChild(optionGenoiseV);
                selectGenoise.appendChild(optionGenoiseC);
            } 

            if (cake.nom === 'Number Cake'){

                let inpuNumberCake = document.createElement('input');
                inpuNumberCake.setAttribute('name', `${cake.nom}`);
                inpuNumberCake.setAttribute('id', `chiffre${cake.nom}`);
                inpuNumberCake.setAttribute('type', 'number');
                inpuNumberCake.setAttribute('class', 'field');
                inpuNumberCake.setAttribute('placeholder', `Entrez le nombre pour la forme du ${cake.nom}` );
        
                divCake.appendChild(inpuNumberCake);
            }

        right.appendChild(divCake);
        divCake.appendChild(inputCake);

        // Informations supplememtaires

        let divInfoSup = document.createElement('div');
        divInfoSup.setAttribute('id', 'InfoSup'); 
    
        let h2_infoSupp = document.createElement('h2');
        h2_infoSupp.textContent = 'Informations supplementaires';
    
        let input_infoSupp = document.createElement('input');
        input_infoSupp.setAttribute('name', 'allergie');
        input_infoSupp.setAttribute('type', 'text');
        input_infoSupp.setAttribute('id', `${cake.id}Allergie`);
        input_infoSupp.setAttribute('class', 'field');
        input_infoSupp.setAttribute('placeholder', "Allergie(s)");
    
        let textArea_messageSup = document.createElement('textarea');
        textArea_messageSup.setAttribute('name', 'messagesupplementaire');
        textArea_messageSup.setAttribute('id', `${cake.id}Message`);
        textArea_messageSup.setAttribute('class', 'field');
        textArea_messageSup.setAttribute('placeholder', 'Informations supplémentaires');
    
        let button_infoSup = document.createElement('button');
        button_infoSup.setAttribute('type', 'button');
        button_infoSup.setAttribute('value', 'ajout');
        button_infoSup.setAttribute('id', `ajout${cake.id}`);
        button_infoSup.setAttribute('class', 'btn');
        button_infoSup.textContent = `Ajouter le(s) ${cake.nom}`
        divCake.appendChild(h2_infoSupp);
        divCake.appendChild(input_infoSupp);
        divCake.appendChild(textArea_messageSup);
        divCake.appendChild(button_infoSup);
    });

    let h2InfoClient = document.createElement('h2');
    h2InfoClient.textContent = "Informations personnelles";

    let inputPrenom = document.createElement('input');
    inputPrenom.setAttribute('name', 'prenom');
    inputPrenom.setAttribute('type', 'text');
    inputPrenom.setAttribute('class', 'field');
    inputPrenom.setAttribute('placeholder', 'Prénom');
    inputPrenom.setAttribute('required', '');

    let inputNom = document.createElement('input');
    inputNom.setAttribute('name', 'nom');
    inputNom.setAttribute('type', 'text');
    inputNom.setAttribute('class', 'field');
    inputNom.setAttribute('placeholder', 'Nom');
    inputNom.setAttribute('required', '');

    let inputEmail = document.createElement('input');
    inputEmail.setAttribute('name', 'email');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('id', 'email');
    inputEmail.setAttribute('class', 'field');
    inputEmail.setAttribute('placeholder', 'E-mail');
    inputEmail.setAttribute('required', '');

    let inputConfEmail = document.createElement('input');
    inputConfEmail.setAttribute('name', 'confirmationemail');
    inputConfEmail.setAttribute('id', 'confirmationemail');
    inputConfEmail.setAttribute('type', 'email');
    inputConfEmail.setAttribute('class', 'field');
    inputConfEmail.setAttribute('placeholder', 'Confirmation de votre e-mail');
    inputConfEmail.setAttribute('required', '');

    let inputTel = document.createElement('input');
    inputTel.setAttribute('name', 'phoneNumber');
    inputTel.setAttribute('type', 'number');
    inputTel.setAttribute('class', 'field');
    inputTel.setAttribute('placeholder', 'Numéro de téléphone');
    inputTel.setAttribute('required', '');

    let inputAdresse = document.createElement('input');
    inputAdresse.setAttribute('name', 'adresse');
    inputAdresse.setAttribute('type', 'text');
    inputAdresse.setAttribute('class', 'field');
    inputAdresse.setAttribute('placeholder', 'Adresse');
    inputAdresse.setAttribute('required', '');

    let inputVille = document.createElement('input');
    inputVille.setAttribute('name', 'ville');
    inputVille.setAttribute('type', 'text');
    inputVille.setAttribute('class', 'field');
    inputVille.setAttribute('placeholder', 'Ville');
    inputVille.setAttribute('required', '');

    let inputCodeP = document.createElement('input');
    inputCodeP.setAttribute('name', 'codePostal');
    inputCodeP.setAttribute('type', 'number');
    inputCodeP.setAttribute('class', 'field');
    inputCodeP.setAttribute('placeholder', 'Code Postal');
    inputCodeP.setAttribute('required', '');

    let inputMessage = document.createElement('textarea');
    inputMessage.setAttribute('name', 'message');
    inputMessage.setAttribute('id', 'message');
    inputMessage.setAttribute('class', 'field');
    inputMessage.setAttribute('placeholder', 'Votre message');

    let inputBtn = document.createElement('input');
    inputBtn.setAttribute('class', 'btn');
    inputBtn.setAttribute('type', 'submit');
    inputBtn.setAttribute('onclick', 'confirmEmail()');
    inputBtn.setAttribute('value', 'Envoyer');

    right.appendChild(h2InfoClient);
    right.appendChild(inputPrenom);
    right.appendChild(inputNom);
    right.appendChild(inputEmail);
    right.appendChild(inputConfEmail);
    right.appendChild(inputTel);
    right.appendChild(inputAdresse);
    right.appendChild(inputVille);
    right.appendChild(inputCodeP);
    right.appendChild(inputMessage);
    right.appendChild(inputBtn);


    document.querySelector("#DrikaForm").appendChild(contact_box);

}


function addCake(data){


    data.forEach(cake =>{
        document.getElementById(`ajout${cake.id}`).addEventListener('click', function(event){
        event.preventDefault();
            var cakeName = document.getElementById(`Cake${cake.nom}`).value;
            var cakePart = document.getElementById(`number${cake.nom}`).value;
                if (cake.ganache != "Il n'y a pas de ganache" && cake.ganache != '' && cake.ganache != "Il n'y a pas de ganache. Des décorations sont présentes pour couvrir le gâteau." && cake.ganache != "Noix de coco" && cake.ganache != "Chocolat"){
                    var cakeGanache = document.getElementById(`${cake.nom}Ganache`).value;
                }
                if (cake.genoise != '' && cake.genoise != 'Chocolat' && cake.genoise != 'Citron' && cake.genoise != 'Vanille' && cake.genoise != 'Banane' && cake.genoise != 'Orange' && cake.genoise != 'Manioc' && cake.genoise != 'Noix de Coco' && cake.genoise != 'Carotte'){
                    var cakeGenoise = document.getElementById(`${cake.nom}Genoise`).value;
                }
                if (cake.nom === 'Number Cake'){
                    var numberCakeChiffre = document.getElementById(`chiffre${cake.nom}`).value;
                }
            var allergie = document.getElementById(`${cake.id}Allergie`).value;
            var messagesupplementaire = document.getElementById(`${cake.id}Message`).value;

                var table = document.createElement('table');
                table.setAttribute('name', `${cake.nom}`);
                table.setAttribute('id', `${cake.id}Table`);
                table.setAttribute('class', 'me1a');   

                let divCakeName = document.createElement('div');

                let h3CakeName = document.createElement('h3');
                h3CakeName.textContent = cakeName;

                let pNbPart = document.createElement('p');
                pNbPart.textContent = "Nombre de gâteaux / Parts : " + cakePart;

                let pGanache = document.createElement('p');
                pGanache.textContent = "Ganache choisie : " + cakeGanache;

                let pGenoise = document.createElement('p');
                pGenoise.textContent = "Génoise choisie : " + cakeGenoise;

                let pAllergie = document.createElement('p');
                pAllergie.textContent = "Allergie : " + allergie;

                let pMessage = document.createElement('p');
                pMessage.textContent = "Message : " + messagesupplementaire;

                table.appendChild(divCakeName);                 
                table.appendChild(h3CakeName);                 
                table.appendChild(pNbPart);                 
                table.appendChild(pGanache);                 
                table.appendChild(pGenoise);                 
                table.appendChild(pAllergie);                 
                table.appendChild(pMessage);

                document.querySelector('.tabDesGateaux').appendChild(table);

        })
        
    })
}

function hideChoices(data) {

    let resultCakeId = [];

    data.forEach(cake => {    
        resultCakeId.push(cake.id);
    });

    resultCakeId.forEach(cake => {
        document.getElementById(`cake${cake}`).style.display = "none";
    });
}

function displayNBChoice(data) {
    fetch(`../../../DrikaCakeML-master/DrikaCake-master/src/controllers/request.php?function=findCake`)
        .then(result => 
            result.json())
        .then(data => {
     // console.log(data);
    data.result.forEach(cake => {
        if (document.getElementById("ChoicesCakes").value == `${cake.nom}`) {
            document.getElementById(`cake${cake.id}`).style.display = "block";
        } else {
            document.getElementById(`cake${cake.id}`).style.display = "none";
        }
    });
});
};

// ENVOIE MAIL ET VALIDATION 

function sendRequest(event) {
    event.preventDefault();
    if (ValidateEmail()) {
        fetch("form.php", {
                method: "POST",
                body: new FormData(document.querySelector('form'))
            })
            .then((data) => data.json())
            .then((json) => console.log(json.response))
    }
}

function ValidateEmail() {
    let mail = document.querySelector('input[name=email]');
    let confmail = document.querySelector('input[name=confirmationemail]');
    return (mail.value === confmail.value);
}

function confirmEmail() {
    const email = document.getElementById("email").value
    const confemail = document.getElementById("confirmationemail").value
    if (email != confemail) {
        alert('Attention les e-mails ne correspondent pas');
    }
};

