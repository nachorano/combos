// Primer paso traernos los elementos de html
const input = document.querySelector('.input-number');
const addForm = document.querySelector('.add-form');
const tasksList = document.querySelector('.result-list');
const resultId = document.querySelector('.title-result');

let combo =[];

const createResult = task =>
  tasksList.innerHTML = `<div class="card-result">
                          <div class="card-info">
                            <div><h4>SKU</h4>
                                 <h3>${task.insumo}</h3></div>
                            <div><h4>CANTIDAD</h4>
                              <h3 class="cantidad">${task.cantidad}</h3>
                            </div>
                          </div>
                          <div class="card-detalle"><h4>DETALLE</h4>
                            <h3>${task.detainsu}</h3>
                          </div>
                        </div>`

const renderTasksList = todoList => {
  tasksList.innerHTML = todoList.map(result => createResult(result)).join('');
};


const addResult = e => {
  e.preventDefault();
  const idSearch = input.value.trim();
  input.value= "";
  if (!idSearch.length) {
    tasksList.innerHTML = `<small> Por favor, ingresa un SKU </small>`
    resultId.innerHTML= `<div class="item-id"></div>`;
    return;
  }
 
  if (idSearch <500000){
    tasksList.innerHTML = `<small> El SKU no puede ser menor al 500000 </small>`
    resultId.innerHTML= `<div class="item-id"></div>`;
    return;
  }

 
  let result = combo.filter(combo => combo.articulo === parseInt(idSearch));
  let idResult = result.find(combo=> combo.articulo);
    if (idResult === undefined){
      idResult = resultId.innerHTML= `<small> El SKU no se encuentra </small>`;
    
    
    }else{
      idResult = resultId.innerHTML= `<div class="item-id"><h2>SKU: ${idResult.articulo}</h2></div>`;
    
    }
  renderTasksList(result); 
  
  return;
};

const init = () => {  
  addForm.addEventListener('submit', addResult);

};

init();