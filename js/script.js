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




