// // FILTER
// (() => {
//     const cakeSection = document.querySelector('.display-cake');
//     cakeFilter = document.querySelector('.nav-part');

//     cakeFilter.addEventListener('click', (event) =>{
//         // si event.target contiens la classe 'filter-item' et ne contiens pas la classe 'active'
//         if (event.target.classList.contains('filter-item') && !event.target.classList.contains('active')) {
//             const target = event.target.getAttribute('data-target');
//             // Desactive la classe existante 'filter-item'
//             console.log(target);
//             cakeFilter.querySelector('.active').classList.remove('active');
//             // Active nouvelle 'filter-item'
//             event.target.classList.add('active');
//             // Desactive la classe existante 'tab-content'
//             cakeSection.querySelector('.tab-content.active').classList.remove('active');
//             // Active nouvelle classe 'tab-content'
//             cakeSection.querySelector(target).classList.add('active');
//         }
//     })
// })();