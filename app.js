const todoInput = document.querySelector('.todo-input');
const todoButtom = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// event listener
todoButtom.addEventListener('click',addTodo);
todoList.addEventListener("click",deleteCheck);
 

function addTodo(event){
    // console.log('hello');
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // creating li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check" style="color: #d75bb6;"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check mark button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #c054bc;"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to list
    todoList.appendChild(todoDiv);
    // genarate new to do

    // 
    // 
    // new part starts from below 

    // clear todo input value
    todoInput.value = "";
    
    
}
// deleteCheck() funtion
function deleteCheck(e){
    const item  = e.target;
    if(item.classList[0] == "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.remove();
    }

    if(item.classList[0] == "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}