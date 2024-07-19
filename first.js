const inputBox = document.getElementById('inputBox');
const addBtn= document.getElementById('addBtn');
const todoList = document.getElementById('todoList');


let editTodo = null;
//functio to add to do

const addTodo = ()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0 ){
        alert("you must write something in your to do");
        return false;
    }

    if(addBtn.value ==="Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
    
    
//creating p tag
     const li = document.createElement("li");
     const p = document.createElement("p");
     p.innerHTML= inputText;
     li.appendChild(p);

 //creating Edit Btn
     const editBtn = document.createElement("button");
     editBtn.innerText = "Edit";
     editBtn.classList.add("btn","editBtn");
     li.appendChild (editBtn);

//creating Delete Btn
     const deleteBtn = document.createElement("button");
     deleteBtn.innerText = "Remove";
     deleteBtn.classList.add("btn","deleteBtn");
     li.appendChild (deleteBtn);

    
todoList.appendChild(li);
 inputBox.value = "";
saveLocalTodos(inputText);

 }

//function to update:(Edit /Delete) to do

const updateTodo =(e)=>{
  if(e.target.innerHTML === "remove");{
    todoList.removeChild(e.target.parentElement);
  }

  if(e.target.innerHTML=== "Edit"){
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }

}
const saveLocalTodos= (todo)=> {
  let todos = [];
  todos =JSDN.parse( localStorage.getItem("todos"));
  todos.push(todo);
  localStorage.saveLocalTodos("todos",JSDN.stringify(todos));
  

}

addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);