// Local Storage

type LStorage = {
    categories: string[],
    operations: Object[]
}

type Category = {
    name: string,
}

type Operation = {
    description: string,
    category: Category,
    date: Date,
    amount: number
}

const initialStorage: LStorage = {
    categories: ["Comida", "Transporte", "Educación"],
    operations: []
}

const lStorage = localStorage.setItem('ahorradas-data', JSON.stringify(initialStorage))


const inputCartegoryToAdd = document.getElementById('input-add-category')
const buttonToAdd = document.getElementById('btn-add-category') 


let oldData
let newData: string

// Botón que agrega nuevas categorías

buttonToAdd.addEventListener('click', (e) => {
    e.preventDefault()

    const addCategory = () => {

        if(localStorage.getItem('ahorradas-data')) {
            JSON.parse(localStorage.getItem('ahorradas-data'))
            initialStorage.categories.push(`${inputCartegoryToAdd.value}`)
            localStorage.setItem('ahorradas-data', JSON.stringify(initialStorage))
            inputCartegoryToAdd.value = " "

        }
        
        
    }
    addCategory()
    
})
//     addCategory()
//     console.log(`${inputCartegoryToAdd.value}`);
    

// }
// Preguntar a Adrian por qué no funciona
const cat = document.getElementById('filter-categories')

const createCategoryFilter = () => {

    if(JSON.parse(localStorage.getItem('ahorradas-data'))) {
        JSON.parse(localStorage.getItem('ahorradas-data'))
        initialStorage.categories.forEach((category) => {

            console.log(category)
            const option = document.createElement('option')
            option.setAttribute('value', `${category}`)
            option.setAttribute('id', `${category}`)
            option.textContent = `${category}`
        
            cat.appendChild(option)
        })
    } 
}