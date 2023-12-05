import createContactPage from "./contact";
import createHomePage from "./home";
import createMenuPage from "./menu";

export default function createnavBar() {

    const content = document.getElementById('content');
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    content.appendChild(navbar);

    //create the navbar menu
    const home = document.createElement('div');
    home.classList.add('tab');
    home.textContent = 'Home';

    const menu= document.createElement('div');
    menu.classList.add('tab');
    menu.textContent = 'Menu';

    const contact = document.createElement('div');
    contact.classList.add('tab');
    contact.textContent = 'Contact';

    home.setAttribute('id', 'home-btn');
    menu.setAttribute('id', 'menu-btn');
    contact.setAttribute('id', 'contact-btn');

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    home.addEventListener('click', ()=>{
        clearContent();
        createHomePage();
    })

    menu.addEventListener('click', () =>{
        clearContent();
        createMenuPage();
    })

    contact.addEventListener('click', () =>{
        clearContent();
        createContactPage();
    })

    //clear function
    function clearContent() {
        const content = document.getElementById('content');
        // Keep the navbar, remove other child elements
        while (content.children.length > 1) {
            content.removeChild(content.lastChild);
        }
    }

}