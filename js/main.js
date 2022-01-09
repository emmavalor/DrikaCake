// FILTER
(() => {
    const cakeSection = document.querySelector('.section-cake');
    cakeFilter = document.querySelector('.cake-filter');


    cakeFilter.addEventListener('click', (event) =>{
        // si event.target contiens la classe 'filter-item' et ne contiens pas la classe 'active'
        if (event.target.classList.contains('filter-item') && !event.target.classList.contains('active')) {
            const target = event.target.getAttribute('data-target');
            // Desactive la classe existante 'filter-item'
            console.log(target);
            cakeFilter.querySelector('.active').classList.remove('outer-shadow', 'active');
            // Active nouvelle 'filter-item'
            event.target.classList.add('active', 'outer-shadow');
            // Desactive la classe existante 'tab-content'
            cakeSection.querySelector('.tab-content.active').classList.remove('active');
            // Active nouvelle classe 'tab-content'
            cakeSection.querySelector(target).classList.add('active');
        }
    })
})();


const controls = document.querySelector('.carousel-controls')
const carousel = document.querySelector('.carousel')

controls.addEventListener('click', (e) => {
  const scrollAmount = 250

  if (e.target.classList.contains('carousel-control-prev')) {
    carousel.scrollBy({
      left: -(scrollAmount),
      behavior: 'smooth',
    })
  }

  if (e.target.classList.contains('carousel-control-next')) {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }
})


//////////////// BOOK ////////////////
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");


prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);


let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-100px)";
    nextBtn.style.transform = "translateX(100px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

//////////////// BOUTTON ////////////////

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 4;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 3;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 2;
                break;
            case 5:
                openBook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}

//////////////// CARD ////////////////

var flip_card = document.querySelector('#card1');
var flip_card2 = document.querySelector('#card2');
var flip_card3 = document.querySelector('#card3');
var flip_card4 = document.querySelector('#card4');
var flip_card5 = document.querySelector('#card5');
var titre = document.querySelector('#f1 h1');
var description = document.querySelector('#f2 p');
var tarif = document.querySelector('#f4 p');
var parfum = document.querySelector('#f3 ul');
var parfum_taste = document.querySelector('#f3 p');
var photo1 = document.querySelector('.photo1');
var photo2 = document.querySelector('.photo2');
var photo3 = document.querySelector('.photo3');

console.log(photo1);

flip_card.addEventListener('click', function(){
    titre.innerHTML = "Cupcake";
    description.innerHTML = "Composé d’une génoise moelleuse à la vanille et d’un fourrage gourmand avec un grand choix de parfums. Il y en a pour tous les goûts ! Avec la possibilité de personnaliser les cupcakes : âge, fleurs, licorne, logo… Laissez votre imagination vous guider.";
    tarif.innerHTML = "2€ la pièce <br> (commande à la douzaine, 12,24,36...) <br> Personnalisation spécifique + 1€";
    parfum.style.display = 'block';
    parfum_taste.innerHTML = ' ';
    photo1.style.backgroundImage = "url('image/cupcake_fraise.jpg')";
    photo1.style.backgroundSize = "100% 100%";
    photo2.style.backgroundImage = "url('image/cupacake_mirtille.jpg')";
    photo2.style.backgroundSize = "100% 100%";
    photo3.style.backgroundImage = "url('image/mini_cupcake.jpg')";
    photo3.style.backgroundSize = "100% 100%";
});

flip_card2.addEventListener('click', function(){
    titre.innerHTML = "Cake Pop";
    description.innerHTML = "C’est une sucette au gâteau au chocolat, enrobé d’un glaçage au chocolat coloré. C’est un véritable succès. Il y a la possibilité de personnaliser: âge, fleurs, licorne.";
    tarif.innerHTML = "2€ la pièce <br> (commande à la douzaine, 12,24,36...) <br> Personnalisation spécifique + 1€";
    parfum.style.display = 'none';
    parfum_taste.innerHTML = 'dans la description';
    photo1.style.backgroundImage = "url('image/cakepop_seul.jpg')";
    photo1.style.backgroundSize = "100% 100%";
    photo2.style.backgroundImage = "url('image/cakepop_rose.jpg')";
    photo2.style.backgroundSize = "100% 100%";
    photo3.style.backgroundImage = "url('image/cakepop_rouge.jpg')";
    photo3.style.backgroundSize = "100% 100%";
});

flip_card3.addEventListener('click', function(){
    titre.innerHTML = "Sucette Meringue";
    description.innerHTML = "C’est de la meringue suisse en forme de sucette. Avec un grand choix de couleurs et de décores avec des paillettes comestibles ou perles en sucre. Emballé individuellement.";
    tarif.innerHTML = "Tarif: 2€ la pièce <br>( commande à la douzaine 12,24,48…)";
    parfum.style.display = 'none';
    parfum_taste.innerHTML = 'dans la description';
    photo1.style.backgroundImage = "url('image/sucette_meringue.jpg')";
    photo1.style.backgroundSize = "100% 100%";
    photo2.style.backgroundImage = "url('image/sucette_meringue.jpg')";
    photo2.style.backgroundSize = "100% 100%";
    photo3.style.backgroundImage = "url('image/sucette_meringue.jpg')";
    photo3.style.backgroundSize = "100% 100%";
});

flip_card4.addEventListener('click', function(){
    titre.innerHTML = "Sablé";
    description.innerHTML = "Biscuit croquant et fondant pur beurre, peu sucré avec une touche de vanille de Madagascar. Toutes les formes et couleurs sont possibles. Chaque biscuit est une pièce unique et soigneusement glissé dans un sachet transparent, joliment emballé.";
    tarif.innerHTML = "À partir de 2€ (décoration en pâte à sucre) à partir de 3€ (décoration au glaçage royal) <br> Commande à la douzaine (12,24,36…)";
    parfum.style.display = 'none';
    parfum_taste.innerHTML = 'dans la description';
    photo1.style.backgroundImage = "url('image/sables_glacage_royal.jpg')";
    photo1.style.backgroundSize = "100% 100%";
    photo2.style.backgroundImage = "url('image/sable_etoile2.jpg')";
    photo2.style.backgroundSize = "100% 100%";
    photo3.style.backgroundImage = "url('image/sable_etoile.jpg')";
    photo3.style.backgroundSize = "100% 100%";
});

flip_card5.addEventListener('click', function(){
    titre.innerHTML = "Truffes Brésiliennes";
    description.innerHTML = "Friandises typiques du Brésil, ces truffes font le régal des petits et des grands. Plusieurs parfums sont proposés : le classique Brigadeiro 100% chocolat fait avec un chocolat 70% cacao, Beijinho de coco 100% coco, fait avec de la noix de coco fraîche, Cajuzinho, fait à base de cacahuète, Olho de sogra, fait à base de noix de coco et pruneau. ";
    tarif.innerHTML = "1€ la pièce (Commande à la douzaine, 12,24,36…) <br> Pérsonnalisation spécifique + 1€";
    parfum.style.display = 'none';
    parfum_taste.innerHTML = 'dans la description';
    photo1.style.backgroundImage = "url('image/boule_chocolat.jpg')";
    photo1.style.backgroundSize = "100% 100%";
    photo2.style.backgroundImage = "url('image/boule_coco.jpg')";
    photo2.style.backgroundSize = "100% 100%";
    photo3.style.backgroundImage = "url('image/boule_chocolat2.jpg')";
    photo3.style.backgroundSize = "100% 100%";
});




