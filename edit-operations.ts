const body = document.body

const container = document.createElement('div')
container.classList.add('container', 'my-5')

const divNewOperations = document.createElement('div')
divNewOperations.classList.add('main', 'p-4', 'shadow-sm')

body.appendChild(container)
container.appendChild(divNewOperations)

const h2 = document.createElement('h2')
const textH4 = document.createTextNode('Editar operación')

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
inputDescription.setAttribute('required', 'true')

form.appendChild(labelDescription)
form.appendChild(inputDescription)

const labelAmount = document.createElement('label')
labelAmount.setAttribute('for', `amount`)
labelAmount.textContent = "Monto"

const inputAmount = document.createElement('input')
inputAmount.setAttribute('for', 'amount')
inputAmount.setAttribute('id', 'amount')
inputAmount.setAttribute('required', 'true')

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
                option.setAttribute('value', `${category.name}`)
                option.setAttribute('id', `${category.name}`)
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
inputDate.setAttribute('value', '2022-05-02')
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
btnAdd.classList.add('btn', 'btn-primary', 'active')
btnAdd.textContent = 'Editar'

form.appendChild(div)
div.appendChild(aBtnCancel)
aBtnCancel.appendChild(btnCancel)
div.appendChild(aBtnAdd)
aBtnAdd.appendChild(btnAdd)

// Traerme los datos de la operación mediante params para modificarlos y reescribirlos

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

const storage = JSON.parse(localStorage.getItem('ahorradas-data'))

const item = storage.operations.find(item => item.id == id)


const getNameCategory = (id) => {

    let categoryName = ""

    const ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    let categorySelected = ls_Storage.operations.find(operation => operation.id == id).categoryID
    
    categoryName = ls_Storage.categories.find(category => category.id == categorySelected).name

    return categoryName

}

inputDescription.value = item.description
inputAmount.value = item.amount
selectType.value = item.type
selectCategory.value = getNameCategory(id)
inputDate.value = item.date

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    const payload = {
        "id" : item.id,
        "description" : inputDescription.value,
        "amount" : inputAmount.value,
        "type" : selectType.value,
        "categoryID" : selectCategory.value,
        // "categoryName" : getNameCategory(id), // No me trae las categorías, puede ser porque se crean por defecto dependiendo de las que estan creadas
        "date" : inputDate.value
    }
    console.log(payload)

    const newItems = storage.operations.map(item => {
        if(item.id == id) {
            return payload
        }
        return item
    })
    

    localStorage.setItem('ahorradas-data', JSON.stringify({
        ...storage,
        operations: newItems,
    }))

    window.location.href = "index.html"

})