var operations = [{
        description: "Hola",
        type: "gasto",
        category: "Comida",
        date: "02-05-2022",
        amount: 44
    }];
var mostrarOperaciones = function () {
};
var btnNewOperation = document.getElementById('btn-new-operation');
var tableOperations1 = document.getElementById('table-body');
var inputDescription2 = document.getElementById('description');
var inputType2 = document.getElementById('types');
var inputCategory2 = document.getElementById('category');
var inputDate2 = document.getElementById('date');
var inputAmount2 = document.getElementById('amount');
btnNewOperation.addEventListener('click', function () {
    var crearNuevaOperacion = function () {
        var tr = document.createElement('tr');
        var tdDescription = document.createElement('td');
        tdDescription.textContent = "".concat(inputDescription2.value);
        var tdType = document.createElement('td');
        tdType.textContent = "".concat(inputType2.value);
        var tdCategory = document.createElement('td');
        tdCategory.textContent = "".concat(inputCategory2.value);
        var tdDate = document.createElement('td');
        tdDate.textContent = "".concat(inputDate2.value);
        var tdAmount = document.createElement('td');
        tdAmount.textContent = "".concat(inputAmount2.value);
        tableOperations1.appendChild(tr);
        tr.appendChild(tdDescription);
        tr.appendChild(tdType);
        tr.appendChild(tdCategory);
        tr.appendChild(tdDate);
        tr.appendChild(tdAmount);
    };
    crearNuevaOperacion();
});
console.log();
