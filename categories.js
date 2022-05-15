var body = document.body;
var container = document.createElement('div');
container.classList.add('container', 'my-5', 'p-0', 'radius');
var divCategory = document.createElement('div');
divCategory.classList.add('p-4', 'shadow-sm');
body.appendChild(container);
container.appendChild(divCategory);
var h2 = document.createElement('h2');
var textH2 = document.createTextNode('Categorías');
divCategory.appendChild(h2);
h2.appendChild(textH2);
var form = document.createElement('form');
form.classList.add('d-flex');
form.setAttribute('id', 'add-category');
var div = document.createElement('div');
div.classList.add('input-categories', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-end');
var div2 = document.createElement('div');
div2.classList.add('d-flex', 'flex-column', 'input-categories2');
var label = document.createElement('label');
label.textContent = "Nombre";
var input = document.createElement('input');
input.setAttribute('id', 'input-add-category');
var btn = document.createElement('button');
btn.classList.add('btn', 'btn-primary');
btn.setAttribute('id', 'btn-add-category');
btn.textContent = "Agregar";
btn.type = "submit";
divCategory.appendChild(form);
form.appendChild(div);
div.appendChild(div2);
div.appendChild(btn);
div2.appendChild(label);
div2.appendChild(input);
var select = document.getElementById('categories');
// Crear nueva categorías
// guardar en el local storage
var categoriesList = document.createElement('div');
// De acá hacia abajo hay meterlo en un for para que reconozca las 
// categories que estan en el localStorage y las agregue dinámicamente
var tableCategories = document.createElement('table');
tableCategories.classList.add('table', 'table-borderless');
var tbodyCategories = document.createElement('tbody');
divCategory.appendChild(tableCategories);
// Editar category oculto
// Cargas las categorías dinamicamente
// let valueCapturado
var loadCategories = function () {
    tbodyCategories.innerHTML = "";
    var ls_data = JSON.parse(localStorage.getItem('ahorradas-data'));
    ls_data.categories.forEach(function (category) {
        var tr = document.createElement('tr');
        tr.setAttribute('value', category.id);
        for (var prop in category) {
            if (prop == "name") {
                var td = document.createElement('td');
                td.setAttribute('value', "".concat(category[prop]));
                var tdbtn = document.createElement('td');
                tdbtn.classList.add('text-end');
                var aEdit = document.createElement('a');
                aEdit.classList.add('btn', 'btn-secondary', 'btn-sm', 'me-1');
                aEdit.setAttribute('value', "".concat(category.id));
                aEdit.setAttribute('href', "./edit-categories.html?id=".concat(category.id));
                aEdit.textContent = "Editar";
                var btnDelete = document.createElement('button');
                btnDelete.classList.add('btn', 'btn-secondary', 'btn-sm');
                btnDelete.setAttribute('value', "".concat(category.id));
                btnDelete.textContent = "Eliminar";
                td.appendChild(document.createTextNode(category[prop]));
                tr.appendChild(td);
                tr.appendChild(tdbtn);
                tdbtn.appendChild(aEdit);
                tdbtn.appendChild(btnDelete);
                // Boton que elimina categorias en el local storage y en el documento
                btnDelete.addEventListener('click', function (e) {
                    var deleteCategory = function (e) {
                        var lStorage = JSON.parse(localStorage.getItem('ahorradas-data'));
                        var findIndex = lStorage.categories.findIndex(function (category) { return category.id == e.target.value; });
                        lStorage.categories.splice(findIndex, 1);
                        // console.log(findIndex)
                        localStorage.setItem('ahorradas-data', JSON.stringify(lStorage));
                        loadCategories();
                    };
                    deleteCategory(e);
                });
                // Btn Editar categoría
                // btnEdit.addEventListener('click', (e) => {
                //     divEditCategory.classList.remove('d-none')
                //     divCategory.classList.add('d-none')
                //     const editarCategory = (e) => {
                //         let lStorage = JSON.parse(localStorage.getItem('ahorradas-data'))
                //         // let findIndex = lStorage.categories.findIndex(category => category.id == e.target.value)
                //         // console.log(findIndex)
                //         // Es mejor usar find
                //         lStorage.categories.forEach(element => {
                //             if(e.target.value == element.id) {
                //                 inputEdit.value = element.name
                //                 // let oldName = lStorage.categories.filter()
                //                 console.log(`Entró en el id: ${element.id} y en el e.target.value: ${e.target.value}`)
                //                 console.log(element.name)
                //             //     valueCapturado = element.id
                //             // // input.value = element.name.value
                //             //     console.log(valueCapturado)
                //             }                          
                //         });
                //     }
                //     editarCategory(e)
                // })
            }
        }
        tableCategories.appendChild(tbodyCategories);
        tbodyCategories.appendChild(tr);
    });
};
loadCategories();
// Crear un nuevo ID para cada categoría nueva
var createID = function () {
    var lStor = JSON.parse(localStorage.getItem('ahorradas-data'));
    var arrayId = lStor.categories.map(function (elem) {
        return elem.id;
    });
    console.log(arrayId);
    var lastId = Math.max.apply(Math, arrayId);
    var newId = lastId + 1;
    return newId;
};
//Btn para agregar nueva categoria y meterla en el local storage
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ls_dataStorage = JSON.parse(localStorage.getItem('ahorradas-data'));
    ls_dataStorage.categories.push({
        "id": createID(),
        "name": input.value
    });
    localStorage.setItem('ahorradas-data', JSON.stringify(ls_dataStorage));
    input.value = "";
    loadCategories();
});
// Btn para Cancelar la edición de la categoría y volver a la pantalla anterior
btnCancelCategory.addEventListener('click', function () {
    divEditCategory.classList.add('d-none');
    divCategory.classList.remove('d-none');
});
// Btn para Editar el nombre de la categoría y volver a la pantalla anterior
// btnEditCategory.addEventListener('click', (e) => {
//      const editCategoryName = (e) => {
//         let lStorage = JSON.parse(localStorage.getItem('ahorradas-data'))
// //        const form = e.target
//         const newCategoryName = inputEdit.value
//         console.log(newCategoryName)
//         console.log(e.target.value)
//         console.log(e.target)
// //         // let findIndex = lStorage.categories.findIndex(category => category.id == e.target.value)
//         // console.log(valueCapturado)
//          lStorage.categories.forEach(element => {
//          })
//         localStorage.setItem('ahorradas-data', JSON.stringify(lStorage))
// //         // loadCategories()
//      }
//     editCategoryName(e)
// })
