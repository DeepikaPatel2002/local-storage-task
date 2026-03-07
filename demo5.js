
const firstDiv = divs[0];
const mainHeading = firstDiv.querySelector('h1');

const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high quality fruits online';

mainHeading.insertAdjacentElement('afterend', subHeading);
subHeading.style.fontStyle = 'italic';

const secondDiv = divs[1];
const fruitsList = secondDiv.querySelector('ul');

const totalPara = document.createElement('p');
totalPara.textContent = 'Total fruits:4';
totalPara.id = 'fruits-total';

secondDiv.insertBefore(totalPara, fruitsList);
