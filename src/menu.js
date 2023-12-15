
export default function createMenuPage(){
    const content = document.getElementById('content');
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');
    
    const myItems = [
        new Item ('https://images.unsplash.com/photo-1671048116404-454fefede763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vb2R8ZW58MHx8MHx8fDA%3D', 'Italian Pasta', 'Pasta, Egg and Tomato sauce'),
        new Item ('https://images.unsplash.com/photo-1613520422094-290a378bbc11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vb2R8ZW58MHx8MHx8fDA%3D', 'Chicken Guacamole', 'Chicken and Spices'),
        new Item('https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=400', 'Rissoto Rice', 'Rice, Coconut Milk, Mushroom and Our Secret Ingriedient'),
        new Item ('https://images.unsplash.com/photo-1671048116404-454fefede763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vb2R8ZW58MHx8MHx8fDA%3D', 'Italian Pasta', 'Pasta, Egg and Tomato sauce'),
        new Item ('https://images.unsplash.com/photo-1613520422094-290a378bbc11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vb2R8ZW58MHx8MHx8fDA%3D', 'Chicken Guacamole', 'Chicken and Spices'),
        new Item('https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=400', 'Rissoto Rice', 'Rice, Coconut Milk, Mushroom and Our Secret Ingriedient'),
    ]

    function Item (img, name, ingriedients) {
       this.img = img;
       this.name = name;
       this.ingriedients = ingriedients;
    }

    function getItem(arr) {

        arr.forEach(item  => {
             //create and append menu
    const card = document.createElement('div');
    card.classList.add('card');

    //create an item card
    const foodImage = document.createElement('img');
    foodImage.classList.add('foodImage');
    foodImage.src = item.img;
    foodImage.height = 100;

    const foodName = document.createElement('h3');
    foodName.classList.add('foodName');
    foodName.textContent = item.name;

    const foodContent = document.createElement('p')
    foodContent.classList.add('foodContent');
    foodContent.textContent = item.ingriedients;

    card.appendChild(foodImage);
    card.appendChild(foodName);
    card.appendChild(foodContent);

    menuPage.appendChild(card);
    content.appendChild(menuPage);
        }) 
    }

    getItem(myItems);
}