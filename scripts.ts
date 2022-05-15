
//LOCAL STORAGE//

type LStorage = {
    categories: Category[],
    operations: Object[]
}

type Category = {
    id: number,
    name: string,
}

type Operation = {
    id: number,
    description: string,
    category: Category,
    date: Date,
    amount: number
}


const loadStorageIfEmpty = () => {

    let lStor = JSON.parse(localStorage.getItem('ahorradas-data'))

    if(!lStor) {

        lStor = {
                categories: [
                {
                    "id" : 1,
                    "name" : "Servicios"
                },
                {
                    "id" : 2,
                    "name" : "Comidas"
                },
                {
                    "id" : 3,
                    "name" : "Salidas"
                },
                {
                    "id" : 4,
                    "name" : "Educacion"
                },
                {
                    "id" : 5,
                    "name" : "Transporte"
                },
                {
                    "id" : 6,
                    "name" : "Trabajo"
                }
            ],

            cuentas: [
                {
                    "gastos": []
                },
                {
                    "ganancias": []
                }
            ],    
                operations: [] 
        }
    } 
    
    const lStorage = localStorage.setItem('ahorradas-data', JSON.stringify(lStor))

    return lStorage
}

loadStorageIfEmpty()

//Navbar

const body = document.body

const header = document.createElement('header')
const navbar = document.createElement('nav')
navbar.classList.add('navbar', 'container-fluid', 'shadow-sm')

const navbarLogo = document.createElement('div')
const navbarMenu = document.createElement('div')

body.appendChild(header)
header.appendChild(navbar)
navbar.appendChild(navbarLogo)
navbar.appendChild(navbarMenu)

const aNavbarLogo = document.createElement('a')
aNavbarLogo.setAttribute('href', 'index.html')
aNavbarLogo.classList.add('nav-link', 'navbar-brand', "title")
const imgNavbar = document.createElement('img')
imgNavbar.setAttribute('src','./assets/images/wallet-solid.png')
imgNavbar.setAttribute('alt', 'Navbar Logo')
imgNavbar.setAttribute('width', '60')
const titleNavbar = document.createTextNode('AhorrADAs')
imgNavbar.classList.add('d-inline-block', 'align-text-top')


aNavbarLogo.appendChild(imgNavbar)
aNavbarLogo.appendChild(titleNavbar)
navbarLogo.appendChild(aNavbarLogo)

const navbarList = document.createElement('ul')
navbarList.classList.add('navbar-nav', 'flex-row', 'me-3')

const navbarItem1 = document.createElement('li')
const aNavbarItem1 = document.createElement('a')
navbarItem1.classList.add('nav-item', 'me-3')
aNavbarItem1.setAttribute('href', './index.html')
aNavbarItem1.classList.add('nav-link')


// nav-link active
navbarItem1.appendChild(aNavbarItem1)

const imgBalance = document.createElement('img')
imgBalance.setAttribute('src','./assets/images/balance.png')
imgBalance.setAttribute('alt', 'Navbar Logo Balance')
imgBalance.setAttribute('width', '30')
imgBalance.setAttribute('height', '24')
const navbarItemText1 = document.createTextNode('Balance')

navbarMenu.appendChild(navbarList)

navbarList.appendChild(navbarItem1)
aNavbarItem1.appendChild(imgBalance)
aNavbarItem1.appendChild(navbarItemText1)


const navbarItem2 = document.createElement('li')
const aNavbarItem2 = document.createElement('a')
navbarItem2.classList.add('nav-item','me-3')
aNavbarItem2.setAttribute('href', './categories.html')
aNavbarItem2.classList.add('nav-link')

navbarItem2.appendChild(aNavbarItem2)

const imgCategories = document.createElement('img')
imgCategories.setAttribute('src','./assets/images/categories.png')
imgCategories.setAttribute('alt', 'Navbar Logo Categories')
imgCategories.setAttribute('width', '30')
imgCategories.setAttribute('height', '24')
const navbarItemText2 = document.createTextNode('Categorías')


navbarList.appendChild(navbarItem2)
aNavbarItem2.appendChild(imgCategories)
aNavbarItem2.appendChild(navbarItemText2)

const navbarItem3 = document.createElement('li')
const aNavbarItem3 = document.createElement('a')
navbarItem3.classList.add('nav-item','me-3')
aNavbarItem3.setAttribute('href', './reports.html')
aNavbarItem3.classList.add('nav-link')

navbarItem3.appendChild(aNavbarItem3)

const imgReports = document.createElement('img')
imgReports.setAttribute('src','./assets/images/reports.png')
imgReports.setAttribute('alt', 'Navbar Logo Reports')
imgReports.setAttribute('width', '30')
imgReports.setAttribute('height', '24')
const navbarItemText3 = document.createTextNode('Reportes')

navbarList.appendChild(navbarItem3)
aNavbarItem3.appendChild(imgReports)
aNavbarItem3.appendChild(navbarItemText3)

