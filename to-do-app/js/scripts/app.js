// Recuperer les données de l'utilisateur
window.onload = () => {
let todo= document.getElementById("todo-input");
todo.addEventListener("keyup",(event)=>{
    if(event.keyCode=== 13){
        event.preventDefault();
        console.log('enter')
        let newtodo=todo.value;
        console.log(newtodo);
        AfficherTodo(newtodo);
    }else{
      console.log('keyup trigger')
    }
})
};



let AfficherTodo=(input)=>{
let todocard= document.createElement("div");
todocard.classList.add("todo-card");

let todohead= document.createElement("div");
todohead.classList.add("todo-head");

let todobody= document.createElement("div");
todobody.classList.add("todo-body");

let todotext= document.createElement("h1");
todotext.id="todo-title";
todotext.innerText=input;

let tododone= document.createElement("div");
tododone.classList.add("done");

let tododelete= document.createElement("div");
tododelete.classList.add("delete");

let tododoneimg= document.createElement("img");
tododoneimg.src="./images/check-mark.svg";

let tododeleteimg= document.createElement("img");
tododeleteimg.src="./images/trash.svg";

//append 
todohead.appendChild(todotext);
tododone.appendChild(tododoneimg);
tododelete.appendChild(tododeleteimg);
todobody.appendChild(tododone);
todobody.appendChild(tododelete);
todocard.appendChild(todohead);
todocard.appendChild(todobody);

let appendtodos= document.querySelector(".todos");
appendtodos.appendChild(todocard);
} 