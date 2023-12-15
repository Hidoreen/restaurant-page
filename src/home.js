
export default function createHomePage(){
    const content = document.getElementById('content');
    const homePage = document.createElement('div');
    homePage.classList.add('home');
    content.appendChild(homePage);

    //create image and append to content
    const img = document.createElement('img');
    img.classList.add('backgroundImage');
    img.src = "https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=600";

    homePage.appendChild(img);

    //create and append a headLine
    const headLine = document.createElement('h1');
    headLine.classList.add('title');
    headLine.textContent = `Dance & Dine`;

    homePage.appendChild(headLine);

    //create and append a slogan :)
    const slogan = document.createElement('p');
    slogan.classList.add('slogan');
    slogan.textContent = 'Where Healthy Meals meet Scrumptious';

    homePage.appendChild(slogan);
   
}