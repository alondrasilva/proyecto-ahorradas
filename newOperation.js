var body = document.body;
var container = document.createElement('div');
container.classList.add('container', 'my-5');
var divNewOperations = document.createElement('div');
divNewOperations.classList.add('main', 'p-4', 'shadow-sm');
body.appendChild(container);
container.appendChild(divNewOperations);
var h2 = document.createElement('h2');
var textH4 = document.createTextNode('Nueva operación');
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
inputDescription.setAttribute('placeholder', 'Introduce aquí el nombre de la operación. Por ej. Sueldo');
form.appendChild(labelDescription);
form.appendChild(inputDescription);
var labelAmount = document.createElement('label');
labelAmount.setAttribute('for', "amount");
labelAmount.textContent = "Monto";
var inputAmount = document.createElement('input');
inputAmount.setAttribute('for', 'amount');
inputAmount.setAttribute('id', 'amount');
inputAmount.setAttribute('value', '0');
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
labelCategory.textContent = "Categoría";
labelCategory.setAttribute('for', 'category');
var selectCategory = document.createElement('select');
selectCategory.setAttribute('name', 'category');
selectCategory.setAttribute('id', 'category');
form.appendChild(labelCategory);
form.appendChild(selectCategory);
var createCategoryFilter = function () {
    var ls_storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    ls_storage.categories.forEach(function (category) {
        for (var prop in category) {
            if (prop == "name") {
                var option = document.createElement('option');
                option.setAttribute('value', "".concat(category.id));
                option.setAttribute('id', "".concat(category.id));
                option.textContent = "".concat(category.name);
                selectCategory.appendChild(option);
            }
        }
    });
};
createCategoryFilter();
var date = document.createElement('label');
date.textContent = "Fecha";
date.setAttribute('for', 'date');
var inputDate = document.createElement('input');
inputDate.setAttribute('name', 'date');
inputDate.setAttribute('type', 'date');
inputDate.setAttribute('value', new Date());
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
btnAdd.classList.add('btn', 'btn-primary');
btnAdd.textContent = 'Agregar';
form.appendChild(div);
div.appendChild(aBtnCancel);
aBtnCancel.appendChild(btnCancel);
div.appendChild(aBtnAdd);
aBtnAdd.appendChild(btnAdd);
// Crear un nuevo ID para cada categoría nueva
var createIDOperations = function () {
    var lStor = JSON.parse(localStorage.getItem('ahorradas-data'));
    var arrayId = lStor.operations.map(function (elem) {
        return elem.id;
    });
    console.log(arrayId);
    if (arrayId.length == 0) {
        return 1;
    }
    else {
        var lastId = Math.max.apply(Math, arrayId);
        var newId = lastId + 1;
        return newId;
    }
};
// Función para buscar el nombre de una categoría recibiendo como parámetro el ID
// const getCategoryName = (id) => {
//     let lStorage = JSON.parse(localStorage.getItem('ahorradas-data'))
//     return lStorage.categories.find(category => category.id == id).name
// }
// console.log(getCategoryName(id))
//Boton para agregar nueva operacion en el local storage 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    ls_Storage.operations.push({
        "id": createIDOperations(),
        "description": inputDescription.value,
        "amount": inputAmount.value,
        "type": selectType.value,
        "categoryID": selectCategory.value,
        // "categoryName" : selectCategory.value,
        "date": inputDate.value
    });
    localStorage.setItem('ahorradas-data', JSON.stringify(ls_Storage));
    window.location.href = "index.html";
});
