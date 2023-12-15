export default  function createContactPage(){
const content = document.getElementById('content');
const contactPage = document.createElement('div');
contactPage.classList.add('contact');
content.appendChild(contactPage);

const telNum = document.createElement('p');
telNum.textContent = '+254 000 000 001';
contactPage.appendChild(telNum);

const address = document.createElement('address');
address.textContent = 'Kenyatta Road, 00100, Along Mama Ngina Street';
address.classList.add('address');
contactPage.appendChild(address);

const map = document.createElement('img');
map.src = '../images.png/map.png';
map.width = 855;
map.height = 443;
contactPage.appendChild(map);

}