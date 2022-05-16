const body = document.body

const container = document.createElement('div')
container.classList.add('container', 'my-5', 'p-0','radius')

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
form.setAttribute('id', 'add-category')

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
btn.type = "submit"

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

// De acá hacia abajo hay meterlo en un for para que reconozca las 
// categories que estan en el localStorage y las agregue dinámicamente

const tableCategories = document.createElement('table')
tableCategories.classList.add('table', 'table-borderless')
const tbodyCategories = document.createElement('tbody')

divCategory.appendChild(tableCategories)

// Editar category oculto




// Cargas las categorías dinamicamente
// let valueCapturado

const loadCategories = () => {

    tbodyCategories.innerHTML = ""

    const ls_data = JSON.parse(localStorage.getItem('ahorradas-data'))

    ls_data.categories.forEach(category => {

        const tr = document.createElement('tr')
        tr.setAttribute('value', category.id)

        for(const prop in category) {

            if(prop == "name") {

                const td = document.createElement('td')
                td.setAttribute('value', `${category[prop]}`)

                const tdbtn = document.createElement('td')
                tdbtn.classList.add('text-end')

                const aEdit = document.createElement('a')
                aEdit.classList.add('btn', 'btn-secondary', 'btn-sm', 'me-1')
                aEdit.setAttribute('value', `${category.id}`)
                aEdit.setAttribute('href', `./edit-categories.html?id=${category.id}`)
                aEdit.textContent = "Editar"

                const btnDelete = document.createElement('button')
                btnDelete.classList.add('btn', 'btn-secondary','btn-sm')
                btnDelete.setAttribute('value', `${category.id}`)
                btnDelete.textContent = "Eliminar"

                td.appendChild(document.createTextNode(category[prop]))
                tr.appendChild(td)   
                tr.appendChild(tdbtn)
                tdbtn.appendChild(aEdit)
                tdbtn.appendChild(btnDelete)
           3      

                // Boton que elimina categorias en el local storage y en el documento
                btnDelete.addEventListener('click', (e) => {

                    const deleteCategory = (e) => {

                       let lStorage = JSON.parse(localStorage.getItem('ahorradas-data'))

                        let findIndex = lStorage.categories.findIndex(category => category.id == e.target.value)
                        lStorage.categories.splice(findIndex, 1)

                        // console.log(findIndex)
                        localStorage.setItem('ahorradas-data', JSON.stringify(lStorage))
                        loadCategories()

                    }
                    
                    deleteCategory(e)
                })
            }
            
        }
        tableCategories.appendChild(tbodyCategories)
        tbodyCategories.appendChild(tr)
    })
    
}

loadCategories()

// Crear un nuevo ID para cada categoría nueva

const createID = () => {

    let lStor = JSON.parse(localStorage.getItem('ahorradas-data'))

    let arrayId = lStor.categories.map(elem => {
        
        return elem.id
        
    })
    console.log(arrayId)

    let lastId = Math.max(...arrayId)

    let newId = lastId + 1

    return newId
    
}


//Btn para agregar nueva categoria y meterla en el local storage

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const ls_dataStorage = JSON.parse(localStorage.getItem('ahorradas-data'))

    ls_dataStorage.categories.push({
        "id" : createID(),
        "name" : input.value})

    localStorage.setItem('ahorradas-data', JSON.stringify(ls_dataStorage))

    input.value = "" 
    
    loadCategories()
})
