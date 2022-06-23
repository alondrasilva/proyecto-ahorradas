const body = document.body

const container = document.createElement('div')
container.classList.add('wrapper','container-fluid','container', 'my-5')

const rowContainer = document.createElement('div')
rowContainer.classList.add('row','container-fluid','d-flex')

const aside = document.createElement('div')
aside.classList.add('aside', 'container-fluid','col-4')

const main = document.createElement('div')
main.classList.add('main','container-fluid','col-8', 'p-4', 'shadow-sm')

body.appendChild(container)
container.appendChild(rowContainer)
rowContainer.appendChild(aside)
rowContainer.appendChild(main)

const rowAside = document.createElement('div')
rowAside.classList.add('flex-row')

const divBalance = document.createElement('div')
divBalance.classList.add('col-3', 'balance', 'mb-3', 'p-4', 'shadow-sm')

const divFilter = document.createElement('div')
divFilter.classList.add('col-8', 'filter', 'p-4', 'shadow-sm')

aside.appendChild(rowAside)
rowAside.appendChild(divBalance)
rowAside.appendChild(divFilter)

// Empieza tabla de Balance

const h3 = document.createElement('h3')
const texth3 = document.createTextNode('Balance')

h3.appendChild(texth3)
divBalance.appendChild(h3)

const balanceTable = document.createElement('table')
balanceTable.classList.add('table','table-borderless')

const tbody = document.createElement('tbody')
const tr1 = document.createElement('tr')
const td1 = document.createElement('td')
const textTd1 = document.createTextNode('Ganancias')
const td2 = document.createElement('td')
td2.classList.add('text-end', 'color-green')
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
td4.classList.add('text-end', 'color-red')
const textTd4 = document.createTextNode('$0')

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


const btnOcultarFiltros = document.createElement('button')
btnOcultarFiltros.classList.add('btn', 'btn-light')
const textBtnOcultarFiltros = document.createTextNode('Ocultar filtros')

const btnMostrarFiltros = document.createElement('button')
btnMostrarFiltros.classList.add('btn', 'btn-light', 'd-none')
const textBtnMostrarFiltros = document.createTextNode('Mostrar filtros')


divFilter.appendChild(filterTop)
h4.appendChild(texth4)
filterTop.appendChild(h4)
filterTop.appendChild(btnOcultarFiltros)
btnOcultarFiltros.appendChild(textBtnOcultarFiltros)
filterTop.appendChild(btnMostrarFiltros)
btnMostrarFiltros.appendChild(textBtnMostrarFiltros)


// Comienzo form de la seccion filtros

const form = document.createElement('form')

// label tipo
const labelTypes = document.createElement('label')
const textLabelTypes = document.createTextNode('Tipo')
labelTypes.setAttribute('for', 'select-types')
labelTypes.classList.add('d-block')

// select tipo
const selectTypes = document.createElement('select')
selectTypes.setAttribute('name', 'select-types')
selectTypes.setAttribute('id', 'select-types')

//option todos
const option1 = document.createElement('option')
const textOption1 = document.createTextNode('Todos')
option1.setAttribute('value', 'all')

//option gastos
const option2 = document.createElement('option')
const textOption2 = document.createTextNode('Gastos')
option2.setAttribute('value', 'expenses')

//option ganancias
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

//label categoria 
const labelCategory = document.createElement('label')
labelCategory.textContent = "Categorías"
labelCategory.setAttribute('for', 'categories')
const selectCategory = document.createElement('select')
selectCategory.setAttribute('name', 'categories')
selectCategory.setAttribute('id', 'filter-categories')

const optionAll = document.createElement('option')
optionAll.setAttribute('value', 'todos')
optionAll.setAttribute('id', 'todos')
optionAll.textContent = "Todos"
                
selectCategory.appendChild(optionAll)

form.appendChild(labelCategory)
form.appendChild(selectCategory)


//label "desde", fecha
const labelDate = document.createElement('label')
const textLabelDate = document.createTextNode('Desde')
labelDate.setAttribute('for', 'input-date')
labelDate.classList.add('d-block')

//input date, fecha
const input = document.createElement('input')
input.setAttribute('name', 'input-date')
input.setAttribute('type', 'date')
input.setAttribute('value', '2022-01-01')
input.setAttribute('id', 'input-date')

form.appendChild(labelDate)
form.appendChild(input)

labelDate.appendChild(textLabelDate)

//label ordenar
const labelOrder = document.createElement('label')
const textLabelOrder = document.createTextNode('Ordenar por')
labelOrder.setAttribute('for', 'select-order')
labelOrder.classList.add('d-block')

//select ordernar por
const selectOrder = document.createElement('select')
selectOrder.setAttribute('name', 'select-category')
selectOrder.setAttribute('id', 'select-category')

//option más reciente
const optionO1 = document.createElement('option')
const textOptionO1 = document.createTextNode('Más reciente')
optionO1.setAttribute('value', 'recent')

//option menos reciente
const optionO2 = document.createElement('option')
const textOptionO2 = document.createTextNode('Menos reciente')
optionO2.setAttribute('value', 'least recent')

//option mayor monto
const optionO3 = document.createElement('option')
const textOptionO3 = document.createTextNode('Mayor monto')
optionO3.setAttribute('value', 'high value')

//option menor monto
const optionO4 = document.createElement('option')
const textOptionO4 = document.createTextNode('Menor monto')
optionO4.setAttribute('value', 'less value')

//option A/Z
const optionO5 = document.createElement('option')
const textOptionO5 = document.createTextNode('A/Z')
optionO5.setAttribute('value', 'a/z')

//option Z/A
const optionO6 = document.createElement('option')
const textOptionO6 = document.createTextNode('Z/A')
optionO6.setAttribute('value', 'z/a')

form.appendChild(labelOrder)
form.appendChild(selectOrder)

labelOrder.appendChild(textLabelOrder)

optionO1.appendChild(textOptionO1)
selectOrder.appendChild(optionO1)

optionO2.appendChild(textOptionO2)
selectOrder.appendChild(optionO2)

optionO3.appendChild(textOptionO3)
selectOrder.appendChild(optionO3)

optionO4.appendChild(textOptionO4)
selectOrder.appendChild(optionO4)

optionO5.appendChild(textOptionO5)
selectOrder.appendChild(optionO5)

optionO6.appendChild(textOptionO6)
selectOrder.appendChild(optionO6)

//Comienza parte de Operaciones

const divOperations = document.createElement('div')
divOperations.classList.add('d-flex', 'justify-content-between')
const operationTitle = document.createElement('h4')
const operationTitleText = document.createTextNode('Operaciones')

const a = document.createElement('a')
a.setAttribute('href', './newOperation.html')

const btn = document.createElement('button')
btn.classList.add('btn', 'btn-primary')
btn.setAttribute('id', 'btn-new-operation')
const textBtn = document.createTextNode('+ Nueva operación')

main.appendChild(divOperations)
divOperations.appendChild(operationTitle)
operationTitle.appendChild(operationTitleText)

divOperations.appendChild(a)
a.appendChild(btn)
btn.appendChild(textBtn)

const divOperationsEmpty = document.createElement('div')
divOperationsEmpty.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'margin-top')

const pEmpty = document.createElement('p')
pEmpty.classList.add('fs-3')
const textPEmpty = document.createTextNode('Sin resultados')

const pEmpty2 = document.createElement('p')
const textPEmpty2 = document.createTextNode('Cambia los filtros o agreaga operaciones')

const imgEmpty = document.createElement('img')
imgEmpty.classList.add('img')
imgEmpty.setAttribute('src', './assets/images/moneys.jpeg')

main.appendChild(divOperationsEmpty)

divOperationsEmpty.appendChild(pEmpty)
divOperationsEmpty.appendChild(pEmpty2)
divOperationsEmpty.appendChild(imgEmpty)
pEmpty.appendChild(textPEmpty)
pEmpty2.appendChild(textPEmpty2)

const divOperationsShow = document.createElement('div')

//Seccion de operaciones con contenido con tablas

const tableOperations = document.createElement('table')
tableOperations.classList.add('table')
tableOperations.setAttribute('id', 'table-operations')
const theadOperations = document.createElement('thead')
const trOperations = document.createElement('tr')

const th1Operations = document.createElement('th')
const textTh1Operations = document.createTextNode('Descripción')

const th2Operations = document.createElement('th')
const textTh2Operations = document.createTextNode('Monto')

// const th3Operations = document.createElement('th')
// const textTh3Operations = document.createTextNode('Tipo')

const th4Operations = document.createElement('th')
const textTh4Operations = document.createTextNode('Categoría')

const th5Operations = document.createElement('th')
const textTh5Operations = document.createTextNode('Fecha')

const th6Operations = document.createElement('th')
const textTh6Operations = document.createTextNode('Acciones')
th6Operations.classList.add('text-center')

main.appendChild(divOperationsShow)

divOperationsShow.appendChild(tableOperations)
tableOperations.appendChild(theadOperations)
theadOperations.appendChild(trOperations)

trOperations.appendChild(th1Operations)
trOperations.appendChild(th2Operations)
// trOperations.appendChild(th3Operations)
trOperations.appendChild(th4Operations)
trOperations.appendChild(th5Operations)
trOperations.appendChild(th6Operations)

th1Operations.appendChild(textTh1Operations)
th2Operations.appendChild(textTh2Operations)
// th3Operations.appendChild(textTh3Operations)
th4Operations.appendChild(textTh4Operations)
th5Operations.appendChild(textTh5Operations)
th6Operations.appendChild(textTh6Operations)

const tbodyOperations = document.createElement('tbody')
tbodyOperations.setAttribute('id', 'table-body')

const balance = () => {

    td2.textContent = 0
    td4.textContent = 0

    let totalGastos: number = 0
    let totalGanancias: number = 0
    let totalBalance: number = 0

    const ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    const gastos = () => {

            ls_Storage.operations.forEach((operation) => {
                if(operation.type == "Gasto") {
                    totalGastos = totalGastos + parseInt(operation.amount) 
                    td4.textContent = totalGastos
                }
            })
            return totalGastos
    }

    const ganancias = () => {

        ls_Storage.operations.forEach((operation) => {
            if(operation.type == "Ganancia") {
                totalGanancias = totalGanancias + parseInt(operation.amount) 
                td2.textContent = totalGanancias
            }
        })
        return totalGanancias
    }
    
    const total = () => {
        td6.textContent = totalGanancias - totalGastos
    }

    gastos()
    ganancias()
    total()
    
   
}

balance()

const getNameCategory = (id) => {

    const ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    return ls_Storage.categories.find(category => category.id == id).name

}

const loadOperations = ()=> {

    tbodyOperations.innerHTML = ""

    const ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    let operations = ls_Storage.operations;

    const params = new URLSearchParams(window.location.search)

    if(params.get('category')) {
        operations = operations.filter(op => op.categoryID === params.get('category'));
    }
    
    operations = operations.filter(op => {
        const dasdeDate = new Date(params.get('date'));
        const opDate = new Date(op.date);       

        return dasdeDate.getTime() <= opDate.getTime();
    });

    operations.forEach(operation => {

        const tr = document.createElement('tr')
        tr.setAttribute('value', operation.id)

        for(const prop in operation) {

            if((prop != "id") && (prop !== "categoryID") && ("prop != type")) {

                const td = document.createElement('td')
                
                td.appendChild(document.createTextNode(operation[prop]))
                tr.appendChild(td)
            } 
        }
        
        const td = document.createElement('td')
        
        td.appendChild(document.createTextNode(getNameCategory(operation.id)))
        tr.appendChild(td)

        
        const tdBtn = document.createElement('td')
        tdBtn.classList.add('text-end')

        const aBtnEditCategory = document.createElement('a')
        aBtnEditCategory.setAttribute('href', `./edit-operations.html?id=${operation.id}`)
        const btnEdit = document.createElement('button')
        btnEdit.setAttribute('id', 'btn-edit-category')
        btnEdit.classList.add('btn', 'me-1')
        btnEdit.textContent = "Editar"

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'me-1')
        btnDelete.textContent = "Eliminar"
        
        tr.appendChild(tdBtn)
        tdBtn.appendChild(aBtnEditCategory)
        aBtnEditCategory.appendChild(btnEdit)
        tdBtn.appendChild(btnDelete)


        tableOperations.appendChild(tbodyOperations)
        tbodyOperations.appendChild(tr)

        
        // Boton que elimina categorias en el local storage y en el documento
        btnDelete.addEventListener('click', (e) => {

            const lStorage = JSON.parse(localStorage.getItem('ahorradas-data'))

            let findIndex = lStorage.operations.findIndex(operation => operation.id == e.target.value)
            lStorage.operations.splice(findIndex, 1)
            

            localStorage.setItem('ahorradas-data', JSON.stringify(lStorage))
            balance()
            window.location.reload()
            showOrEmpty()
            
        })
    });

}

loadOperations()




//Local Storage//

const createCategoryFilter = () => {

    const ls_storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    ls_storage.categories.forEach(category => {

        for(const prop in category) {

            if(prop == "name") {

                const option = document.createElement('option')
                option.setAttribute('value', `${category.id}`)
                option.setAttribute('id', `${category.name}`)
                option.textContent = `${category.name}`
                
                selectCategory.appendChild(option)
            }
        }

    }) 

    localStorage.setItem('ahorradas-data', JSON.stringify(ls_storage))
}

createCategoryFilter()

// Boton agregar y remover filtros

btnOcultarFiltros.addEventListener('click', () => {
    btnMostrarFiltros.classList.remove('d-none')
    btnOcultarFiltros.classList.add('d-none')
    form.classList.add('d-none')
})

btnMostrarFiltros.addEventListener('click', () => {
    btnMostrarFiltros.classList.add('d-none')
    btnOcultarFiltros.classList.remove('d-none')
    form.classList.remove('d-none')
})

const showOrEmpty = () => {
    const ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'))
    
    if(ls_Storage.operations.length == 0) {
        tableOperations.classList.add('d-none')
        divOperationsEmpty.classList.remove('d-none')

    } else if (ls_Storage.operations.length >= 1){
        divOperationsEmpty.classList.add('d-none')
        tableOperations.classList.remove('d-none')
    }
}

showOrEmpty()

// Filtros

const filters = () => {

    const ls_storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    ls_storage.operations.forEach(operation => {

        if(operation.type == "Gasto") {

            const noSelected = ls_storage.operations.filter(operation => operation.type !== "Gasto")
            console.log(noSelected
)
                 

        
        }
            
           
    })

}

filters()

selectCategory.addEventListener('change', (e) => {
    const params = new URLSearchParams(window.location.search);
    params.set('category', e.target.value);

    window.location.href = window.location.pathname + '?' + params.toString()
})

input.addEventListener('change', (e) => {
    const params = new URLSearchParams(window.location.search);
    params.set('date', e.target.value);
    
    window.location.href = window.location.pathname + '?' + params.toString()
})
