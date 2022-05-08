const body = document.body

const container = document.createElement('div')
container.classList.add('container', 'my-5', 'p-0')

const divCategory = document.createElement('div')
divCategory.classList.add('p-4', 'shadow-sm')

body.appendChild(container)
container.appendChild(divCategory)

const h2 = document.createElement('h2')
const textH2 = document.createTextNode('Categorías')

divCategory.appendChild(h2)
h2.appendChild(textH2)

const form = document.createElement('form')
form.classList.add('d-flex')

const div = document.createElement('div')
div.classList.add('input-categories', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-end')
const div2 = document.createElement('div')
div2.classList.add('d-flex', 'flex-column', 'input-categories2')

const label = document.createElement('label')
label.textContent = "Nombre"

const input = document.createElement('input')
input.setAttribute('id', 'input-add-category')


const btn = document.createElement('button')
btn.classList.add('btn', 'btn-primary')
btn.setAttribute('id', 'btn-add-category')
btn.textContent = "Agregar"

divCategory.appendChild(form)
form.appendChild(div)
div.appendChild(div2)
div.appendChild(btn)
div2.appendChild(label)
div2.appendChild(input)

const select = document.getElementById('categories')

// Crear nueva categorías
// guardar en el local storage

const categoriesList = document.createElement('div')

// De acá hacia abajo hay meterlo en un for para que reconozca las categories que estan en el localStorage y las agregue dinámicamente

const categoryItem = document.createElement('div')
categoryItem.classList.add('d-flex', 'justify-content-between', 'category-item')

const categoryName = document.createElement('p')
const textCategoryName = document.createTextNode('Comida')

const categoryButtons = document.createElement('div')

const btnEdit = document.createElement('button')
btnEdit.classList.add('btn', 'btn-secondary', 'btn-sm', 'me-1')
btnEdit.textContent = "Editar"

const btnDelete = document.createElement('button')
btnDelete.classList.add('btn', 'btn-secondary','btn-sm')
btnDelete.textContent = "Eliminar"

divCategory.appendChild(categoriesList)
categoriesList.appendChild(categoryItem)
categoryItem.appendChild(categoryName)
categoryName.appendChild(textCategoryName)
categoryItem.appendChild(categoryButtons)
categoryButtons.appendChild(btnEdit)
categoryButtons.appendChild(btnDelete)

// For