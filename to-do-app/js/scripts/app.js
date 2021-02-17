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
      console.log(newtodo);
      // Le passer en tant qu'argument dans la function "AfficherTodo"
      AfficherTodo(newtodo)
    }
  })
};

/**
 * @input {String} Rentrez l'input qui devrait etre affiché sur la page.
 */

let AfficherTodo = (input) => {

  // Créer les differents elements et leurs donner le sattributs appropriés
  let todocard = document.createElement("div");
  todocard.classList.add("todo-card");

  let todohead = document.createElement("div");
  todohead.classList.add("todo-head");

  let todobody = document.createElement("div");
  todobody.classList.add("todo-body");

  let todotext = document.createElement("h1");
  todotext.id = "todo-title";
  todotext.innerText = input;

  let tododone = document.createElement("div");
  tododone.classList.add("done");

  let tododelete = document.createElement("div");
  tododelete.classList.add("delete");

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
  let appendtodos = document.querySelector(".todos");
  appendtodos.appendChild(todocard);
}