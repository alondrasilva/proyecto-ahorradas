type Operation = {
    description: string,
    type: string
    category: string,
    date?: string, 
    amount: number
}

const operations: Operation[] = [{

    description: "Hola",
    type: "gasto",
    category: "Comida",
    date: "02-05-2022" ,
    amount: 44

}]

const mostrarOperaciones = () => {

}

const btnNewOperation = document.getElementById('btn-new-operation')

const tableOperations1 = document.getElementById('table-body')
const inputDescription2 = document.getElementById('description')
const inputType2 = document.getElementById('types')
const inputCategory2 = document.getElementById('category')
const inputDate2 = document.getElementById('date')
const inputAmount2 = document.getElementById('amount')

btnNewOperation.addEventListener('click', () => {

    const crearNuevaOperacion = () => {

        const tr = document.createElement('tr')
        const tdDescription = document.createElement('td')
        tdDescription.textContent = `${inputDescription2.value}`
        const tdType = document.createElement('td')
        tdType.textContent = `${inputType2.value}`
        const tdCategory = document.createElement('td')
        tdCategory.textContent = `${inputCategory2.value}`
        const tdDate = document.createElement('td')
        tdDate.textContent = `${inputDate2.value}`
        const tdAmount = document.createElement('td')
        tdAmount.textContent = `${inputAmount2.value}`

        tableOperations1.appendChild(tr)
        tr.appendChild(tdDescription)
        tr.appendChild(tdType)
        tr.appendChild(tdCategory)
        tr.appendChild(tdDate)
        tr.appendChild(tdAmount)
    }

    crearNuevaOperacion()

})

console.log();

