const body = document.body

const container = document.createElement('div')
container.classList.add('wrapper','container', 'my-5')

const rowContainer = document.createElement('div')
rowContainer.classList.add('row', 'd-flex')

const aside = document.createElement('div')
aside.classList.add('aside', 'col-4')

const main = document.createElement('div')
main.classList.add('main','col-8')

body.appendChild(container)
container.appendChild(rowContainer)
rowContainer.appendChild(aside)
rowContainer.appendChild(main)

const rowAside = document.createElement('div')
rowAside.classList.add('flex-row')

const divBalance = document.createElement('div')
divBalance.classList.add('col-3', 'balance', 'mb-3', 'p-4')

const divFilter = document.createElement('div')
divFilter.classList.add('col-8', 'filter', 'p-4')

aside.appendChild(rowAside)
rowAside.appendChild(divBalance)
rowAside.appendChild(divFilter)

// Empieza tabla de Balance

const h3 = document.createElement('h3')
const texth3 = document.createTextNode('Balance')

h3.appendChild(texth3)
divBalance.appendChild(h3)

const balanceTable = document.createElement('table')
balanceTable.classList.add('table')

const tbody = document.createElement('tbody')
const tr1 = document.createElement('tr')
const td1 = document.createElement('td')
const textTd1 = document.createTextNode('Ganancias')
const td2 = document.createElement('td')
td2.classList.add('text-end')
const textTd2 = document.createTextNode('+$0')

divBalance.appendChild(balanceTable)
balanceTable.appendChild(tbody)
tbody.appendChild(tr1)
tr1.appendChild(td1)
td1.appendChild(textTd1)
tr1.appendChild(td2)
td2.appendChild(textTd2)

const tr2 = document.createElement('tr')
const td3 = document.createElement('td')
const textTd3 = document.createTextNode('Gastos')
const td4 = document.createElement('td')
td4.classList.add('text-end')
const textTd4 = document.createTextNode('-$0')

tbody.appendChild(tr2)
tr2.appendChild(td3)
td3.appendChild(textTd3)
tr2.appendChild(td4)
td4.appendChild(textTd4)

const tr3 = document.createElement('tr')
const td5 = document.createElement('td')
const textTd5 = document.createTextNode('Total')
const td6 = document.createElement('td')
td6.classList.add('text-end')
const textTd6 = document.createTextNode('$0')

tbody.appendChild(tr3)
tr3.appendChild(td5)
td5.appendChild(textTd5)
tr3.appendChild(td6)
td6.appendChild(textTd6)

// Empieza seccion de filtros

const filterTop = document.createElement('div')
filterTop.classList.add('d-flex', 'justify-content-between', 'align-items-center')

const h4 = document.createElement('h4')
const texth4 = document.createTextNode('Filtros')
h4.classList.add('m-0')

const p = document.createElement('p')
p.classList.add('m-0')
const textP = document.createTextNode('Ocultar filtros')

divFilter.appendChild(filterTop)
h4.appendChild(texth4)
p.appendChild(textP)
filterTop.appendChild(h4)
filterTop.appendChild(p)


// Comienzo form de la seccion filtros
const form = document.createElement('form')

const labelTypes = document.createElement('label')
const textLabelTypes = document.createTextNode('Tipos')
labelTypes.setAttribute('for', 'select-types')
labelTypes.classList.add('d-block')

const selectTypes = document.createElement('select')
selectTypes.setAttribute('name', 'select-types')
selectTypes.setAttribute('id', 'select-types')


// Options
const option1 = document.createElement('option')
const textOption1 = document.createTextNode('Todos')
option1.setAttribute('value', 'all')

const option2 = document.createElement('option')
const textOption2 = document.createTextNode('Gastos')
option2.setAttribute('value', 'expenses')

const option3 = document.createElement('option')
const textOption3 = document.createTextNode('Ganancias')
option2.setAttribute('value', 'revenues')

divFilter.appendChild(form)
labelTypes.appendChild(textLabelTypes)
form.appendChild(labelTypes)
form.appendChild(selectTypes)
option1.appendChild(textOption1)
selectTypes.appendChild(option1)
option2.appendChild(textOption2)
selectTypes.appendChild(option2)
option3.appendChild(textOption3)
selectTypes.appendChild(option3)
