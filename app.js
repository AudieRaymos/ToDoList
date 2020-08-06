//Selectors 
const todoInput = document.querySelector('.todo-input');
const todoInput = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo)

//Functions

function addTodo(event) {
    //prevent form from submitting
    event.preventdefault();
    //Todo DIV 
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innertext = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK Trash BUTTON
    const TrashButton = document.createElement('button');
    TrashButton.innerHTML = '<i class="fas fa fa-trash"></i>';
    TrashButton.classList.add("complete-btn");
    todoDiv.appendChild(TrashButton);
}