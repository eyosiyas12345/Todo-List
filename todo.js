const todoList=[];
let htmlAccumulator='';


function addTodo(){
  const todoInputElement = document.querySelector('.js-todo-input');
  const dueDateInputElement =document.querySelector('.js-dueDate-input');

  const name = todoInputElement.value;
  const dueDate = dueDateInputElement.value;
  todoList.push({
    name,
    dueDate
  })
todoInputElement.value='';
dueDateInputElement.value='';
generateHtml();
}

function generateHtml(){
  let htmlAccumulator='';

for(let i=0;i<todoList.length;i++){
const {name,dueDate}=todoList[i];
const htmlElement = `<div>${name}</div> <div class=dueDate-para>${dueDate}</div> <button class="delete-btn" onclick="todoList.splice(${i},1); generateHtml()" >Delete</button>`
htmlAccumulator+=htmlElement;
}
let htmlTodoHolder = document.querySelector('.js-list-container');
htmlTodoHolder.innerHTML = htmlAccumulator;
}
function listenEnter(event){
 if(event.key==='Enter'){
  addTodo();
 }
}