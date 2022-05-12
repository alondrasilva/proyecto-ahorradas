//LOCAL STORAGE//
// const initialStorage: LStorage = {
//     categories: [
//         {
//             "id" : 1,
//             "name" : "Comida"
//         },
//         {
//             "id" : 2,
//             "name" : "Entretenimiento"
//         },
//         {
//             "id" : 3,
//             "name" : "Transporte"
//         },
//     ],
//     operations: []
// }
// const lStorage = localStorage.setItem('ahorradas-data', JSON.stringify(initialStorage))
// const getStorage = (): LStorage => {
//     let lStor = JSON.parse(localStorage.getItem('ahorradas-data'))
//     if(!lStor) {
//         lStor = {
//             categories: [],
//             operations: [] 
//         }
//     } 
//     return lStor
// }
var loadStorageIfEmpty = function () {
    var lStor = JSON.parse(localStorage.getItem('ahorradas-data'));
    if (!lStor) {
        lStor = {
            categories: [{
                    "id": 1,
                    "name": "Servicios"
                },
                {
                    "id": 2,
                    "name": "Comidas"
                },
                {
                    "id": 3,
                    "name": "Salidas"
                },
                {
                    "id": 4,
                    "name": "Educacion"
                },
                {
                    "id": 5,
                    "name": "Transporte"
                },
                {
                    "id": 6,
                    "name": "Trabajo"
                }
            ],
            operations: []
        };
    }
    var lStorage = localStorage.setItem('ahorradas-data', JSON.stringify(lStor));
    return lStorage;
};
loadStorageIfEmpty();
//Navbar
var body = document.body;
var header = document.createElement('header');
var navbar = document.createElement('nav');
navbar.classList.add('navbar', 'container-fluid', 'shadow-sm');
var navbarLogo = document.createElement('div');
var navbarMenu = document.createElement('div');
body.appendChild(header);
header.appendChild(navbar);
navbar.appendChild(navbarLogo);
navbar.appendChild(navbarMenu);
var aNavbarLogo = document.createElement('a');
aNavbarLogo.setAttribute('href', 'index.html');
aNavbarLogo.classList.add('nav-link', 'navbar-brand', "title");
var imgNavbar = document.createElement('img');
imgNavbar.setAttribute('src', './assets/images/wallet-solid.png');
imgNavbar.setAttribute('alt', 'Navbar Logo');
imgNavbar.setAttribute('width', '60');
var titleNavbar = document.createTextNode('AhorrADAs');
imgNavbar.classList.add('d-inline-block', 'align-text-top');
aNavbarLogo.appendChild(imgNavbar);
aNavbarLogo.appendChild(titleNavbar);
navbarLogo.appendChild(aNavbarLogo);
var navbarList = document.createElement('ul');
navbarList.classList.add('navbar-nav', 'flex-row', 'me-3');
var navbarItem1 = document.createElement('li');
var aNavbarItem1 = document.createElement('a');
navbarItem1.classList.add('nav-item', 'me-3');
aNavbarItem1.setAttribute('href', './index.html');
aNavbarItem1.classList.add('nav-link');
// nav-link active
navbarItem1.appendChild(aNavbarItem1);
var imgBalance = document.createElement('img');
imgBalance.setAttribute('src', './assets/images/balance.png');
imgBalance.setAttribute('alt', 'Navbar Logo Balance');
imgBalance.setAttribute('width', '30');
imgBalance.setAttribute('height', '24');
var navbarItemText1 = document.createTextNode('Balance');
navbarMenu.appendChild(navbarList);
navbarList.appendChild(navbarItem1);
aNavbarItem1.appendChild(imgBalance);
aNavbarItem1.appendChild(navbarItemText1);
var navbarItem2 = document.createElement('li');
var aNavbarItem2 = document.createElement('a');
navbarItem2.classList.add('nav-item', 'me-3');
aNavbarItem2.setAttribute('href', './categories.html');
aNavbarItem2.classList.add('nav-link');
navbarItem2.appendChild(aNavbarItem2);
var imgCategories = document.createElement('img');
imgCategories.setAttribute('src', './assets/images/categories.png');
imgCategories.setAttribute('alt', 'Navbar Logo Categories');
imgCategories.setAttribute('width', '30');
imgCategories.setAttribute('height', '24');
var navbarItemText2 = document.createTextNode('Categorías');
navbarList.appendChild(navbarItem2);
aNavbarItem2.appendChild(imgCategories);
aNavbarItem2.appendChild(navbarItemText2);
var navbarItem3 = document.createElement('li');
var aNavbarItem3 = document.createElement('a');
navbarItem3.classList.add('nav-item', 'me-3');
aNavbarItem3.setAttribute('href', './reports.html');
aNavbarItem3.classList.add('nav-link');
navbarItem3.appendChild(aNavbarItem3);
var imgReports = document.createElement('img');
imgReports.setAttribute('src', './assets/images/reports.png');
imgReports.setAttribute('alt', 'Navbar Logo Reports');
imgReports.setAttribute('width', '30');
imgReports.setAttribute('height', '24');
var navbarItemText3 = document.createTextNode('Reportes');
navbarList.appendChild(navbarItem3);
aNavbarItem3.appendChild(imgReports);
aNavbarItem3.appendChild(navbarItemText3);
