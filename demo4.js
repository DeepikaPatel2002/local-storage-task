
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const secHeading = document.querySelector('#basket-heading');
secHeading.style.color = 'brown';

const fruits = document.querySelector('.fruits');
// fruits.style.backgroundColor = 'brown';
// fruits.style.padding = '30px';
// fruits.style.margin = '30px';
// fruits.style.width = '50%';
// fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const fruitsItems = document.querySelectorAll('li');
for (let i = 0; i < fruitsItems.length; i++){

    if (i == 1 || i == 3) {
        fruitsItems[i].style.backgroundColor = 'brown';
        fruitsItems[i].style.color = 'white';
   }
   
    fruitsItems[i].style.padding = '10px';
    fruitsItems[i].style.margin = '10px';
    fruitsItems[i].style.borderRadius = '5px';