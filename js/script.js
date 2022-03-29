window.addEventListener("scroll", function()
{
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
}) 


const navigation = document.querySelector('nav');

document.querySelector('.toggle').onclick = 
function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

// galerie //

document.querySelectorAll('.image-container img').forEach(image =>{ 
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display ='block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        }
    });

    document.querySelector('.popup-image span').onclick = () =>{
        document.querySelector('.popup-image').style.display = 'none';
    };
 
// Display Cake

function displayCake() {
    fetch(`../../DrikaCake/DrikaCake-master/src/controllers/request.php?function=findCake`)
        .then(result => 
            result.json())
        .then(data => {
            // console.log(data);
            if (data.status === "OK") {
                let resultCakeSort = [];

                data.result.forEach(cake => {
                    // console.log(cake.nom);
                    if (cake.nom.includes('Cake')) {
                        resultCakeSort.push(cake);
                    }
                });
                // console.log(resultCakeSort);
                resultCakeSort.forEach(cake => {
                    createStyle(cake);
                });
            } else {
                flashMessage(false);
            }
        }
        );
}
displayCake();


function createStyle(cake){

    let bigCake = document.createElement('div');
    bigCake.setAttribute("class", "big_cake");
    bigCake.setAttribute("id", `cake${cake.id}`);

    let titleCake = document.createElement('div');
    titleCake.setAttribute("class", "title_bigcake");

    let img = document.createElement('img');
    img.setAttribute('src', `image/${cake.photo}`);

    let h1_title = document.createElement('h1');
    h1_title.textContent = `${cake.nom}`;
    h1_title.setAttribute("id", `title${cake.id}`);

    let wave = document.createElement('div');
    wave.setAttribute("class", "wave");

    let containerBC = document.createElement('div');
    containerBC.setAttribute("class", "container_bigcake");

    let cakeDescription = document.createElement('div');
    cakeDescription.setAttribute("class", "cake_description");

    let h1_description = document.createElement('h1');
    let text_description = document.createTextNode('Description');

    let p_description = document.createElement('p');
    p_description.setAttribute("id", "description_BC")
    p_description.textContent = `${cake.description}`;

    let cakeDelai = document.createElement('div');
    cakeDelai.setAttribute("class", "cake_delai");

    let h1_delai = document.createElement('h1');
    let text_delai = document.createTextNode('Délai de commande');

    let p_delai = document.createElement('p');
    p_delai.textContent = `${cake.delaiCommande} jours`;

    let cakeGanache = document.createElement('div');
    cakeGanache.setAttribute("class", "cake_ganache");

    let h1_ganache = document.createElement('h1');
    let text_ganache = document.createTextNode('Ganache');

    let p_ganache = document.createElement('p');
    p_ganache.textContent = `${cake.ganache}`;

    let cakeGenoise = document.createElement('div');
    cakeGenoise.setAttribute("class", "cake_genoise");

    let h1_genoise = document.createElement('h1');
    let text_genoise = document.createTextNode('Genoise');

    let p_genoise = document.createElement('p');
    p_genoise.textContent = `${cake.genoise}`;

    let tarif = document.createElement('div');
    tarif.setAttribute("class", "tarif");

    let h1_tarif = document.createElement('h1');
    let text_tarif = document.createTextNode('Tarif');

    let p_tarif = document.createElement('p');
    p_tarif.textContent = `${cake.tarif}`;

    bigCake.appendChild(titleCake);
    titleCake.appendChild(img);
    titleCake.appendChild(h1_title);

    bigCake.appendChild(wave);

    bigCake.appendChild(containerBC);

    containerBC.appendChild(cakeDescription);
    cakeDescription.appendChild(h1_description);
    h1_description.appendChild(text_description);
    cakeDescription.appendChild(p_description);

    containerBC.appendChild(cakeDelai);
    cakeDelai.appendChild(h1_delai);
    h1_delai.appendChild(text_delai);
    cakeDelai.appendChild(p_delai);

    containerBC.appendChild(cakeGanache);
    cakeGanache.appendChild(h1_ganache);
    h1_ganache.appendChild(text_ganache);
    cakeGanache.appendChild(p_ganache);

    containerBC.appendChild(cakeGenoise);
    cakeGenoise.appendChild(h1_genoise);
    h1_genoise.appendChild(text_genoise);
    cakeGenoise.appendChild(p_genoise);

    containerBC.appendChild(tarif);
    tarif.appendChild(h1_tarif);
    h1_tarif.appendChild(text_tarif);
    tarif.appendChild(p_tarif);

    document.querySelector(".bigCake_container").appendChild(bigCake);


}

function sectionBigCake(){
    var carousel1 = document.querySelector('#carousel1');
    var carousel2 = document.querySelector('#carousel2');
    var carousel3 = document.querySelector('#carousel3');
    var carousel4 = document.querySelector('#carousel4');

    var numberCake = document.querySelector('#cake12');
    // console.log(numberCake);

}

sectionBigCake();

function displayDessert() {
    fetch(`../../DrikaCake/DrikaCake-master/src/controllers/request.php?function=findCake`)
        .then(result => 
            result.json())
        .then(data => {
            // console.log(data);
            if (data.status === "OK") {
                let resultCakeSort = [];

                data.result.forEach(cakeDessert => {
                    if (cakeDessert.nom.includes('Dessert')) {
                        resultCakeSort.push(cakeDessert);
                    }
                });
                // console.log(resultCakeSort);
                resultCakeSort.forEach(cakeDessert => {
                    createStyleDessert(cakeDessert);
                });
            } else {
                flashMessage(false);
            }
        }
        );
}
displayDessert();

function createStyleDessert(cakeDessert){
    let dessertItem = document.createElement('div');
    dessertItem.setAttribute("class", "dessert-item");

    let dessertImage = document.createElement('div');
    dessertImage.setAttribute("class", "dessert-img");

    let dessertImg = document.createElement('img');
    dessertImg.setAttribute("src", `image/${cakeDessert.photo}`);
    dessertImg.setAttribute('alt', `photo de ${cakeDessert.nom}`);

    let dessertText = document.createElement('div');
    dessertText.setAttribute("class", "dessert-text");

    let dessertH1 = document.createElement('h1');
    dessertH1.textContent = `${cakeDessert.nom}`;

    let dessertP = document.createElement('p');
    dessertP.textContent = `${cakeDessert.description}`;

    let dessertPrice = document.createElement('div');
    dessertPrice.setAttribute('class', 'dessert-price');

    let dessertPriceP = document.createElement('p');
    dessertPriceP.textContent = `${cakeDessert.tarif}`;  


    dessertItem.appendChild(dessertImage);
    dessertImage.appendChild(dessertImg);

    dessertItem.appendChild(dessertText);

    dessertText.appendChild(dessertH1);
    dessertText.appendChild(dessertP);

    dessertItem.appendChild(dessertPrice);

    dessertPrice.appendChild(dessertPriceP);

    document.querySelector(".dessert").appendChild(dessertItem);

}





        // <div class="dessert-item">
        //     <div class="dessert-img">
        //       <img src="image/quindim.jpg" alt="quindim">
        //     </div>

        //     <div class="dessert-text">
        //       <h1>Quindim</h1>
        //       <p>Dessert brésilien à base de jaune d’œufs, noix de coco fraîche, lait de coco et sucre. <br>
        //         Ce dessert ne contient ni gluten et ni lactose. </p>
        //     </div>

        //     <div class="dessert-price">
        //       <p>18€ - 10 parts</p>
        //     </div>
        // </div>












