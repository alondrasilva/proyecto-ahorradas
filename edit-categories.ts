const body = document.body

const container = document.createElement('div')
container.classList.add('container', 'my-5', 'p-0','radius')


body.appendChild(container)


const divEditCategory = document.createElement('div')
divEditCategory.classList.add('p-4', 'shadow-sm')

const h2Edit = document.createElement('h2')
const textH2Edit = document.createTextNode('Editar categoría')

container.appendChild(divEditCategory)
divEditCategory.appendChild(h2Edit)
h2Edit.appendChild(textH2Edit)

const formEdit = document.createElement('form')
formEdit.classList.add('d-flex', 'flex-column', 'form-edit')
formEdit.setAttribute('id', 'add-category')


const labelEdit = document.createElement('label')
labelEdit.textContent = "Nombre"

const inputEdit = document.createElement('input')
inputEdit.setAttribute('id', 'input-add-category')
// inputEdit.setAttribute('value', 'input')

divEditCategory.appendChild(formEdit)
formEdit.appendChild(labelEdit)
formEdit.appendChild(inputEdit)

const divBtn = document.createElement('div')
divBtn.classList.add('text-end', 'my-4')

const aBtnCancelCategory = document.createElement('a')
aBtnCancelCategory.setAttribute('href', './categories.html')
const btnCancelCategory = document.createElement('button')
btnCancelCategory.classList.add('btn', 'btn-secondary', 'me-1')
btnCancelCategory.textContent = "Cancelar"

const aBtnEditCategory = document.createElement('a')
aBtnEditCategory.setAttribute('href', './categories.html')
const btnEditCategory = document.createElement('button')
btnEditCategory.classList.add('btn', 'btn-primary')
btnEditCategory.textContent = "Editar"
btnEditCategory.type = "submit"

formEdit.appendChild(divBtn)
divBtn.appendChild(aBtnCancelCategory)
aBtnCancelCategory.appendChild(btnCancelCategory)
divBtn.appendChild(aBtnEditCategory)
aBtnEditCategory.appendChild(btnEditCategory)


// Traerme el nombre de la categoría mediante parámetro

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

const storage = JSON.parse(localStorage.getItem('ahorradas-data'))

const item = storage.categories.find(item => item.id == id)


console.log(item)
console.log(id)
inputEdit.value = item.name

formEdit.addEventListener('submit', (e) => {
    e.preventDefault()

    const storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    const payload = {
        "id" : item.id,
        "name" : inputEdit.value
    }
    console.log(payload)

    const newItemsCategories = storage.categories.map(item => {
        if(item.id == id) {
            return payload
        }
        return item
    })

    const newItemsOperations = storage.operations.map(item => {
        if(item.id == id) {
            // return item.name = name
        }
    })
    

    localStorage.setItem('ahorradas-data', JSON.stringify({
        ...storage,
        // operations: 
        categories: newItemsCategories,
    }))

})

