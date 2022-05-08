const body = document.body

const container = document.createElement('div')
container.classList.add('container', 'my-5', 'p-0')

const divReports = document.createElement('div')
divReports.classList.add('p-4', 'shadow-sm')

body.appendChild(container)
container.appendChild(divReports)

const h2 = document.createElement('h2')
const textH2 = document.createTextNode('Reportes')

divReports.appendChild(h2)
h2.appendChild(textH2)

// Tabla 1 - Resumen

const titleTable1 = document.createElement('h4')
const textTitleTable1 = document.createTextNode('Resumen')

const table1 = document.createElement('table')
table1.classList.add('table')
const tBodyTable1 = document.createElement('tbody')

// tr1
const trTable1 = document.createElement('tr')

const td1 = document.createElement('td')
const textTd1 = document.createTextNode('Categoría con mayor ganancia')

const td2 = document.createElement('td')
const textTd2 = document.createTextNode('Comida')

const td3 = document.createElement('td')
const textTd3 = document.createTextNode('+$200')

divReports.appendChild(titleTable1)
titleTable1.appendChild(textTitleTable1)

divReports.appendChild(table1)
table1.appendChild(tBodyTable1)
tBodyTable1.appendChild(trTable1)
trTable1.appendChild(td1)
trTable1.appendChild(td2)
trTable1.appendChild(td3)

td1.appendChild(textTd1)
td2.appendChild(textTd2)
td3.appendChild(textTd3)

// tr1
const trTable2 = document.createElement('tr')

const td4 = document.createElement('td')
const textTd4 = document.createTextNode('Categoría con mayor gasto')

const td5 = document.createElement('td')
const textTd5 = document.createTextNode('Comida')

const td6 = document.createElement('td')
const textTd6 = document.createTextNode('+$200')

tBodyTable1.appendChild(trTable2)
trTable2.appendChild(td4)
trTable2.appendChild(td5)
trTable2.appendChild(td6)

td4.appendChild(textTd4)
td5.appendChild(textTd5)
td6.appendChild(textTd6)

// tr3

const trTable3 = document.createElement('tr')

const td7 = document.createElement('td')
const textTd7 = document.createTextNode('Categoría con mayor balance')

const td8 = document.createElement('td')
const textTd8 = document.createTextNode('Comida')

const td9 = document.createElement('td')
const textTd9 = document.createTextNode('+$200')

tBodyTable1.appendChild(trTable3)
trTable3.appendChild(td7)
trTable3.appendChild(td8)
trTable3.appendChild(td9)

td7.appendChild(textTd7)
td8.appendChild(textTd8)
td9.appendChild(textTd9)

// tr4

const trTable4 = document.createElement('tr')

const td10 = document.createElement('td')
const textTd10 = document.createTextNode('Mes con mayor ganancia')

const td11 = document.createElement('td')
const textTd11 = document.createTextNode('Comida')

const td12 = document.createElement('td')
const textTd12 = document.createTextNode('+$200')

tBodyTable1.appendChild(trTable4)
trTable4.appendChild(td10)
trTable4.appendChild(td11)
trTable4.appendChild(td12)

td10.appendChild(textTd10)
td11.appendChild(textTd11)
td12.appendChild(textTd12)

// tr5

const trTable5 = document.createElement('tr')

const td13 = document.createElement('td')
const textTd13 = document.createTextNode('Mes con mayor gasto')

const td14 = document.createElement('td')
const textTd14 = document.createTextNode('Comida')

const td15 = document.createElement('td')
const textTd15 = document.createTextNode('+$200')

tBodyTable1.appendChild(trTable5)
trTable5.appendChild(td13)
trTable5.appendChild(td14)
trTable5.appendChild(td15)

td13.appendChild(textTd13)
td14.appendChild(textTd14)
td15.appendChild(textTd15)

// Table 2 - Total por categorías

const titleTable2 = document.createElement('h4')
const textTitleTable2 = document.createTextNode('Total por categorías')

const table2 = document.createElement('table')
table2.classList.add('table')

const tHeadTable2 = document.createElement('thead')
const th1 = document.createElement('th')
const textTh1 = document.createTextNode('Categoría')
const th2 = document.createElement('th')
const textTh2 = document.createTextNode('Ganancias')
const th3 = document.createElement('th')
const textTh3 = document.createTextNode('Gastos')
const th4 = document.createElement('th')
const textTh4 = document.createTextNode('Balance')

divReports.appendChild(titleTable2)
titleTable2.appendChild(textTitleTable2)

divReports.appendChild(table2)
table2.appendChild(tHeadTable2)
tHeadTable2.appendChild(th1)
tHeadTable2.appendChild(th2)
tHeadTable2.appendChild(th3)
tHeadTable2.appendChild(th4)

th1.appendChild(textTh1)
th2.appendChild(textTh2)
th3.appendChild(textTh3)
th4.appendChild(textTh4)


const tBodyTable2 = document.createElement('tbody')

// tr6 - este se tiene que crear dinámicamente de acuerdo a las categorías que existan con un for

const trTable6 = document.createElement('tr')

const td16 = document.createElement('td')
const textTd16 = document.createTextNode('Comida')

const td17 = document.createElement('td')
const textTd17 = document.createTextNode('+$200')

const td18 = document.createElement('td')
const textTd18 = document.createTextNode('-$1200')

const td19 = document.createElement('td')
const textTd19 = document.createTextNode('$200')

table2.appendChild(tBodyTable2)
tBodyTable2.appendChild(trTable6)
trTable6.appendChild(td16)
trTable6.appendChild(td17)
trTable6.appendChild(td18)
trTable6.appendChild(td19)

td16.appendChild(textTd16)
td17.appendChild(textTd17)
td18.appendChild(textTd18)
td19.appendChild(textTd19)


