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
container.classList.add('container', 'my-5', 'p-0', 'radius');
body.appendChild(container);
var divEditCategory = document.createElement('div');
divEditCategory.classList.add('p-4', 'shadow-sm');
var h2Edit = document.createElement('h2');
var textH2Edit = document.createTextNode('Editar categoría');
container.appendChild(divEditCategory);
divEditCategory.appendChild(h2Edit);
h2Edit.appendChild(textH2Edit);
var formEdit = document.createElement('form');
formEdit.classList.add('d-flex', 'flex-column', 'form-edit');
formEdit.setAttribute('id', 'add-category');
var labelEdit = document.createElement('label');
labelEdit.textContent = "Nombre";
var inputEdit = document.createElement('input');
inputEdit.setAttribute('id', 'input-add-category');
// inputEdit.setAttribute('value', 'input')
divEditCategory.appendChild(formEdit);
formEdit.appendChild(labelEdit);
formEdit.appendChild(inputEdit);
var divBtn = document.createElement('div');
divBtn.classList.add('text-end', 'my-4');
var aBtnCancelCategory = document.createElement('a');
aBtnCancelCategory.setAttribute('href', './categories.html');
var btnCancelCategory = document.createElement('button');
btnCancelCategory.classList.add('btn', 'btn-secondary', 'me-1');
btnCancelCategory.textContent = "Cancelar";
var aBtnEditCategory = document.createElement('a');
aBtnEditCategory.setAttribute('href', './categories.html');
var btnEditCategory = document.createElement('button');
btnEditCategory.classList.add('btn', 'btn-primary');
btnEditCategory.textContent = "Editar";
btnEditCategory.type = "submit";
formEdit.appendChild(divBtn);
divBtn.appendChild(aBtnCancelCategory);
aBtnCancelCategory.appendChild(btnCancelCategory);
divBtn.appendChild(aBtnEditCategory);
aBtnEditCategory.appendChild(btnEditCategory);
// Traerme el nombre de la categoría mediante parámetro
var params = new URLSearchParams(window.location.search);
var id = params.get('id');
var storage = JSON.parse(localStorage.getItem('ahorradas-data'));
var item = storage.categories.find(function (item) { return item.id == id; });
console.log(item);
console.log(id);
inputEdit.value = item.name;
formEdit.addEventListener('submit', function (e) {
    e.preventDefault();
    var storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    var payload = {
        "id": item.id,
        "name": inputEdit.value
    };
    console.log(payload);
    var newItemsCategories = storage.categories.map(function (item) {
        if (item.id == id) {
            return payload;
        }
        return item;
    });
    var newItemsOperations = storage.operations.map(function (item) {
        if (item.id == id) {
            // return item.name = name
        }
    });
    localStorage.setItem('ahorradas-data', JSON.stringify(__assign(__assign({}, storage), { 
        // operations: 
        categories: newItemsCategories })));
    window.location.href = "categories.html";
});
