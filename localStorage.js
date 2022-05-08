// Local Storage
var initialStorage = {
    categories: ["Comida", "Transporte", "Educación"],
    operations: []
};
var lStorage = localStorage.setItem('ahorradas-data', JSON.stringify(initialStorage));
var inputCartegoryToAdd = document.getElementById('input-add-category');
var buttonToAdd = document.getElementById('btn-add-category');
var oldData;
var newData;
// Botón que agrega nuevas categorías
buttonToAdd.addEventListener('click', function (e) {
    e.preventDefault();
    var addCategory = function () {
        if (localStorage.getItem('ahorradas-data')) {
            JSON.parse(localStorage.getItem('ahorradas-data'));
            initialStorage.categories.push("".concat(inputCartegoryToAdd.value));
            localStorage.setItem('ahorradas-data', JSON.stringify(initialStorage));
            inputCartegoryToAdd.value = " ";
        }
    };
    addCategory();
});
//     addCategory()
//     console.log(`${inputCartegoryToAdd.value}`);
// }
// Preguntar a Adrian por qué no funciona
var cat = document.getElementById('filter-categories');
var createCategoryFilter = function () {
    if (JSON.parse(localStorage.getItem('ahorradas-data'))) {
        JSON.parse(localStorage.getItem('ahorradas-data'));
        initialStorage.categories.forEach(function (category) {
            console.log(category);
            var option = document.createElement('option');
            option.setAttribute('value', "".concat(category));
            option.setAttribute('id', "".concat(category));
            option.textContent = "".concat(category);
            cat.appendChild(option);
        });
    }
};
