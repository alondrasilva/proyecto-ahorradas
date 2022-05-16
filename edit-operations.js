var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var body = document.body;
var container = document.createElement('div');
container.classList.add('container', 'my-5');
var divNewOperations = document.createElement('div');
divNewOperations.classList.add('main', 'p-4', 'shadow-sm');
body.appendChild(container);
container.appendChild(divNewOperations);
var h2 = document.createElement('h2');
var textH4 = document.createTextNode('Editar operación');
divNewOperations.appendChild(h2);
h2.appendChild(textH4);
var form = document.createElement('form');
form.classList.add('d-flex', 'flex-column');
divNewOperations.appendChild(form);
var labelDescription = document.createElement('label');
labelDescription.setAttribute('for', "description");
labelDescription.textContent = "Descripción";
var inputDescription = document.createElement('input');
inputDescription.setAttribute('for', 'description');
inputDescription.setAttribute('id', 'description');
inputDescription.setAttribute('required', 'true');
form.appendChild(labelDescription);
form.appendChild(inputDescription);
var labelAmount = document.createElement('label');
labelAmount.setAttribute('for', "amount");
labelAmount.textContent = "Monto";
var inputAmount = document.createElement('input');
inputAmount.setAttribute('for', 'amount');
inputAmount.setAttribute('id', 'amount');
inputAmount.setAttribute('required', 'true');
form.appendChild(labelAmount);
form.appendChild(inputAmount);
var labelType = document.createElement('label');
labelType.setAttribute('for', 'types');
labelType.textContent = "Tipo";
var selectType = document.createElement('select');
selectType.setAttribute('name', 'types');
selectType.setAttribute('id', 'types');
var selectTypeOp1 = document.createElement('option');
selectTypeOp1.textContent = "Gasto";
var selectTypeOp2 = document.createElement('option');
selectTypeOp2.textContent = "Ganancia";
form.appendChild(labelType);
form.appendChild(selectType);
selectType.appendChild(selectTypeOp1);
selectType.appendChild(selectTypeOp2);
var labelCategory = document.createElement('label');
labelCategory.textContent = "Categoria";
labelCategory.setAttribute('for', 'category');
var selectCategory = document.createElement('select');
selectCategory.setAttribute('name', 'category');
selectCategory.setAttribute('id', 'category');
form.appendChild(labelCategory);
form.appendChild(selectCategory);
var date = document.createElement('label');
date.textContent = "Fecha";
date.setAttribute('for', 'date');
var inputDate = document.createElement('input');
inputDate.setAttribute('name', 'date');
inputDate.setAttribute('type', 'date');
inputDate.setAttribute('value', '2022-05-02');
inputDate.setAttribute('id', 'date');
form.appendChild(date);
form.appendChild(inputDate);
var div = document.createElement('div');
div.classList.add('d-flex', 'justify-content-end', 'mt-5');
var aBtnCancel = document.createElement('a');
aBtnCancel.setAttribute('href', './index.html');
var btnCancel = document.createElement('button');
btnCancel.classList.add('btn', 'btn-primary', 'me-3', 'btn-light');
btnCancel.textContent = 'Cancelar';
var aBtnAdd = document.createElement('a');
aBtnAdd.setAttribute('href', './index.html');
var btnAdd = document.createElement('button');
btnAdd.setAttribute('type', 'submit');
btnAdd.classList.add('btn', 'btn-primary', 'active');
btnAdd.textContent = 'Agregar';
form.appendChild(div);
div.appendChild(aBtnCancel);
aBtnCancel.appendChild(btnCancel);
div.appendChild(aBtnAdd);
aBtnAdd.appendChild(btnAdd);
// Traerme los datos de la operación mediante params para modificarlos y reescribirlos
var params = new URLSearchParams(window.location.search);
var id = params.get('id');
var storage = JSON.parse(localStorage.getItem('ahorradas-data'));
var item = storage.operations.find(function (item) { return item.id == id; });
inputDescription.value = item.description;
inputAmount.value = item.amount;
selectType.value = item.type;
selectCategory.value = item.category;
inputDate.value = item.date;
console.log(item);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    var payload = {
        "id": item.id,
        "description": inputDescription.value,
        "type": selectType.value,
        "category": selectCategory.value,
        "date": inputDate.value
    };
    console.log(payload);
    var newItems = storage.operations.map(function (item) {
        if (item.id == id) {
            return payload;
        }
        return item;
    });
    localStorage.setItem('ahorradas-data', JSON.stringify(__assign(__assign({}, storage), { operations: newItems })));
});
