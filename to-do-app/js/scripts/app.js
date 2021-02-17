//Definir des variables
let todos = [];
let finishedtasks= [];
// Recuperer les données de l'utilisateur
window.onload = () => {
  // Récuperer l'element input avec id 'todo-input'
  const todo = document.getElementById("todo-input");
  // On event keyup
  todo.addEventListener("keyup", (event) => {
    // Verifier si la personne appuie sur enter
    if (event.key === 'Enter') {
      event.preventDefault()
      // Recuperer la valeur de l'input "todo-input"
      const newtodo = todo.value;
      todo.value="";
      todos.push({
        id:todos.length,
        text: newtodo
      });
      // Le passer en tant qu'argument dans la function "AfficherTodo"
      AfficherTodo();
    }
  })
};

/**
 * @input {String} Rentrez l'input qui devrait etre affiché sur la page.
 */
const AfficherTodo = () => {
    let appendtodos = document.querySelector(".todos");
    appendtodos.innerHTML="";
todos.forEach(todo => {
// Créer les differents elements et leurs donner le sattributs appropriés
let todocard = document.createElement("div");
todocard.classList.add("todo-card");

let todohead = document.createElement("div");
todohead.classList.add("todo-head");

let todobody = document.createElement("div");
todobody.classList.add("todo-body");

let todotext = document.createElement("h1");
todotext.id = "todo-title";
todotext.innerText = todo.text;

let tododone = document.createElement("div");
tododone.classList.add("done");
tododone.addEventListener("click",() => {Donetask(todo.id)})

let tododelete = document.createElement("div");
tododelete.classList.add("delete");
tododelete.id=todo.id;
tododelete.addEventListener("click",() => {Deletetask(todo.id)})

let tododoneimg = document.createElement("img");
tododoneimg.src = "./images/check-mark.svg";

let tododeleteimg = document.createElement("img");
tododeleteimg.src = "./images/trash.svg";
    
  //append les different elements
  todohead.appendChild(todotext);
  tododone.appendChild(tododoneimg);
  tododelete.appendChild(tododeleteimg);
  todobody.appendChild(tododone);
  todobody.appendChild(tododelete);
  todocard.appendChild(todohead);
  todocard.appendChild(todobody);

  //les rajouter sous la section ".todos"
  appendtodos.appendChild(todocard);
});
  

}

/**
 * @id {Number} id position pour delete l'element selectionner.
 */

//Tododelete button
const Deletetask =(id)=>{
    //check le type de variable
    console.log(typeof id);
    let foundtodo = todos.find(todo => todo.id == id);
    let index= todos.indexOf(foundtodo);
    console.log(foundtodo);
    todos.splice(index,1);
    console.log(todos);
    AfficherTodo();
}
const Deletetaskdone =(id)=>{
    //check le type de variable
    console.log(typeof id);
    let foundtodo = finishedtasks.find(todo => todo.id == id);
    let index= finishedtasks.indexOf(foundtodo);
    console.log(foundtodo);
    finishedtasks.splice(index,1);
    AfficherTodo();
    AfficherFinished();
}

const Donetask=(id)=>{
    console.log(typeof id);
    let foundtodo = todos.find(todo => todo.id == id);
    let index= todos.indexOf(foundtodo);
    console.log(foundtodo);
    todos.splice(index,1);
    finishedtasks.push(foundtodo);
    AfficherTodo();
    AfficherFinished();
}
const AfficherFinished=()=>{
    let appendtodos = document.querySelector(".todos-done");
    appendtodos.innerHTML="";
finishedtasks.forEach(todo => {
// Créer les differents elements et leurs donner le sattributs appropriés
let todocard = document.createElement("div");
todocard.classList.add("todo-card");
todocard.id="done";

let todohead = document.createElement("div");
todohead.classList.add("todo-head");

let todobody = document.createElement("div");
todobody.classList.add("todo-body");

let todotext = document.createElement("h1");
todotext.id = "todo-title";
todotext.innerText = todo.text;

let tododelete = document.createElement("div");
tododelete.classList.add("delete");
tododelete.id=todo.id;
tododelete.addEventListener("click",() => {Deletetaskdone(todo.id)})


let tododeleteimg = document.createElement("img");
tododeleteimg.src = "./images/trash.svg";
    
  //append les different elements
  todohead.appendChild(todotext);
  tododelete.appendChild(tododeleteimg);
  todobody.appendChild(tododelete);
  todocard.appendChild(todohead);
  todocard.appendChild(todobody);

  //les rajouter sous la section ".todos"
  appendtodos.appendChild(todocard);
});
}