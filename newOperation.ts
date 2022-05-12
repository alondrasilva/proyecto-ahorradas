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

form.appendChild(labelDescription)
form.appendChild(inputDescription)

const labelAmount = document.createElement('label')
labelAmount.setAttribute('for', `amount`)
labelAmount.textContent = "Monto"

const inputAmount = document.createElement('input')
inputAmount.setAttribute('for', 'amount')
inputAmount.setAttribute('id', 'amount')

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
labelCategory.textContent = "Categoria"
labelCategory.setAttribute('for', 'category')

const selectCategory = document.createElement('select')
selectCategory.setAttribute('name', 'category')
selectCategory.setAttribute('id', 'category')

const selectCategoryOp1 = document.createElement('option')
selectCategoryOp1.textContent = "Comida"

const selectCategoryOp2 = document.createElement('option')
selectCategoryOp2.textContent = "Servicios"

const selectCategoryOp3 = document.createElement('option')
selectCategoryOp3.textContent = "Salidas"

const selectCategoryOp4 = document.createElement('option')
selectCategoryOp4.textContent = "Educacíon"

const selectCategoryOp5 = document.createElement('option')
selectCategoryOp5.textContent = "Transporte"

const selectCategoryOp6 = document.createElement('option')
selectCategoryOp6.textContent = "Trabajo"

form.appendChild(labelCategory)
form.appendChild(selectCategory)

selectCategory.appendChild(selectCategoryOp1)
selectCategory.appendChild(selectCategoryOp2)
selectCategory.appendChild(selectCategoryOp3)
selectCategory.appendChild(selectCategoryOp4)
selectCategory.appendChild(selectCategoryOp5)
selectCategory.appendChild(selectCategoryOp6)

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

const btnCancel = document.createElement('button')
btnCancel.classList.add('btn', 'btn-primary', 'me-3', 'btn-light')
btnCancel.textContent = 'Cancelar'

const btnAdd = document.createElement('button')
btnAdd.setAttribute('type', 'submit')
btnAdd.classList.add('btn', 'btn-primary', 'active')
btnAdd.textContent = 'Agregar'

form.appendChild(div)
div.appendChild(btnCancel)
div.appendChild(btnAdd)

//Boton para agregar nueva operacion 

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'))

    ls_Storage.operations.push({
        descripcion : 'hola',
        // monto : e.target.amount.value,
        // tipo : e.target.type.value,
        // categoria : e.target.category.value,
        // fecha : e.target.date.value

    })

    localStorage.setItem('ahorradas-data', JSON.stringify(ls_Storage))

})