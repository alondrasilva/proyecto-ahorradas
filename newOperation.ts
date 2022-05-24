const body = document.body

const container = document.createElement('div')
container.classList.add('container', 'my-5')

const divNewOperations = document.createElement('div')
divNewOperations.classList.add('main', 'p-4', 'shadow-sm')

body.appendChild(container)
container.appendChild(divNewOperations)

const h2 = document.createElement('h2')
const textH4 = document.createTextNode('Nueva operación')

divNewOperations.appendChild(h2)
h2.appendChild(textH4)

const form = document.createElement('form')
form.classList.add('d-flex', 'flex-column')
divNewOperations.appendChild(form)

const labelDescription = document.createElement('label')
labelDescription.setAttribute('for', `description`)
labelDescription.textContent = "Descripción"

const inputDescription = document.createElement('input')
inputDescription.setAttribute('for', 'description')
inputDescription.setAttribute('id', 'description')
inputDescription.setAttribute('placeholder', 'Introduce aquí el nombre de la operación. Por ej. Sueldo')

form.appendChild(labelDescription)
form.appendChild(inputDescription)

const labelAmount = document.createElement('label')
labelAmount.setAttribute('for', `amount`)
labelAmount.textContent = "Monto"

const inputAmount = document.createElement('input')
inputAmount.setAttribute('for', 'amount')
inputAmount.setAttribute('id', 'amount')
inputAmount.setAttribute('value', '0')

form.appendChild(labelAmount)
form.appendChild(inputAmount)

const labelType = document.createElement('label')
labelType.setAttribute('for', 'types')
labelType.textContent = "Tipo"

const selectType = document.createElement('select')
selectType.setAttribute('name', 'types')
selectType.setAttribute('id', 'types')

const selectTypeOp1 = document.createElement('option')
selectTypeOp1.textContent = "Gasto"
const selectTypeOp2 = document.createElement('option')
selectTypeOp2.textContent = "Ganancia"

form.appendChild(labelType)
form.appendChild(selectType)

selectType.appendChild(selectTypeOp1)
selectType.appendChild(selectTypeOp2)

const labelCategory = document.createElement('label')
labelCategory.textContent = "Categoría"
labelCategory.setAttribute('for', 'category')

const selectCategory = document.createElement('select')
selectCategory.setAttribute('name', 'category')
selectCategory.setAttribute('id', 'category')

form.appendChild(labelCategory)
form.appendChild(selectCategory)

const createCategoryFilter = () => {

    const ls_storage = JSON.parse(localStorage.getItem('ahorradas-data'))
    ls_storage.categories.forEach(category => {

        for(const prop in category) {

            if(prop == "name") {

                const option = document.createElement('option')
                option.setAttribute('value', `${category.id}`)
                option.setAttribute('id', `${category.id}`)
                option.textContent = `${category.name}`
                
                selectCategory.appendChild(option)
            }
        }

    }) 
}

createCategoryFilter()

const date = document.createElement('label')
date.textContent = "Fecha"
date.setAttribute('for', 'date')

const inputDate = document.createElement('input')
inputDate.setAttribute('name', 'date')
inputDate.setAttribute('type', 'date')
inputDate.setAttribute('value', new Date();)
inputDate.setAttribute('id', 'date')

form.appendChild(date)
form.appendChild(inputDate)

const div = document.createElement('div')
div.classList.add('d-flex', 'justify-content-end', 'mt-5')

const aBtnCancel = document.createElement('a')
aBtnCancel.setAttribute('href', './index.html')
const btnCancel = document.createElement('button')
btnCancel.classList.add('btn', 'btn-primary', 'me-3', 'btn-light')
btnCancel.textContent = 'Cancelar'

const aBtnAdd = document.createElement('a')
aBtnAdd.setAttribute('href', './index.html')
const btnAdd = document.createElement('button')
btnAdd.setAttribute('type', 'submit')
btnAdd.classList.add('btn', 'btn-primary')
btnAdd.textContent = 'Agregar'

form.appendChild(div)
div.appendChild(aBtnCancel)
aBtnCancel.appendChild(btnCancel)
div.appendChild(aBtnAdd)
aBtnAdd.appendChild(btnAdd)


// Crear un nuevo ID para cada categoría nueva

const createIDOperations = () => {

    let lStor = JSON.parse(localStorage.getItem('ahorradas-data'))

    let arrayId = lStor.operations.map(elem => {
        
        return elem.id
        
    })
    console.log(arrayId)

    if(arrayId.length == 0) {
        return 1
    } else {
        let lastId = Math.max(...arrayId)
        let newId = lastId + 1  
        return newId
    }
    
}

// Función para buscar el nombre de una categoría recibiendo como parámetro el ID

// const getCategoryName = (id) => {

//     let lStorage = JSON.parse(localStorage.getItem('ahorradas-data'))

//     return lStorage.categories.find(category => category.id == id).name

// }

// console.log(getCategoryName(id))

//Boton para agregar nueva operacion en el local storage 

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    ls_Storage.operations.push({
        "id" : createIDOperations(),
        "description" : inputDescription.value,
        "amount" : inputAmount.value,
        "type" : selectType.value,
        "categoryID" : selectCategory.value,
        "date" : inputDate.value

    }) 
    localStorage.setItem('ahorradas-data', JSON.stringify(ls_Storage))
})

