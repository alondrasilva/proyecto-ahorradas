const body = document.body

const container = document.createElement('div')
container.classList.add('container', 'my-5')

const divCategory = document.createElement('div')
divCategory.classList.add('main', 'p-4', 'shadow-sm')

body.appendChild(container)
container.appendChild(divCategory)

const h4 = document.createElement('h4')
const textH4 = document.createTextNode('Categorías')

divCategory.appendChild(h4)
h4.appendChild(textH4)

const form = document.createElement('form')
form.classList.add('d-flex')

const div = document.createElement('div')

const label = document.createElement('label')
label.textContent = "Nombre"

const input = document.createElement('input')

divCategory.appendChild(form)
form.appendChild(div)
div.appendChild(label)
div.appendChild(input)

const btn = document.createElement('button')
btn.classList.add('btn', 'btn-primary')
btn.textContent = "Agregar"

form.appendChild(btn)

