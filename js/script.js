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
            console.log(data);
            if (data.status === "OK") {
                let resultCakeSort = [];

                data.result.forEach(cake => {
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




