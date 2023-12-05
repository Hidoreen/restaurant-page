
export default function createMenuPage(){
    const content = document.getElementById('content');
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');
    

    //create and append menu
    const card = document.createElement('div');
    card.classList.add('card');

    //create an item card
    const foodImage = document.createElement('img');
    foodImage.classList.add('foodImage');
    foodImage.src = "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=400"
    foodImage.height = 100;

    const foodName = document.createElement('h3');
    foodName.classList.add('foodName');
    foodName.textContent = 'Rissoto'

    const foodContent = document.createElement('p')
    foodContent.classList.add('foodContent');
    foodContent.textContent = 'Rice, Coconut Milk, Mushroom and Our Secret Ingriedient';

    card.appendChild(foodImage);
    card.appendChild(foodName);
    card.appendChild(foodContent);

    menuPage.appendChild(card);
    content.appendChild(menuPage);

}