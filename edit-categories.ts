const params = new URLSearchParams(window.location.search);

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

divEditCategory.appendChild(formEdit)
formEdit.appendChild(labelEdit)
formEdit.appendChild(inputEdit)

const divBtn = document.createElement('div')
divBtn.classList.add('text-end')

const btnCancelCategory = document.createElement('button')
btnCancelCategory.classList.add('btn', 'btn-secondary', 'me-1')
// btnEdit.setAttribute('value', `${category.id}`)
btnCancelCategory.textContent = "Cancelar"

const btnEditCategory = document.createElement('button')
btnEditCategory.classList.add('btn', 'btn-primary')
// btnDelete.setAttribute('value', `${category.id}`)
btnEditCategory.textContent = "Editar"

divEditCategory.appendChild(divBtn)
divBtn.appendChild(btnCancelCategory)
divBtn.appendChild(btnEditCategory)



