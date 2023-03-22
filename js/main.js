let form = document.querySelector(".form");
const inputTarea = document.querySelector(".inputTarea");
const divContainer = document.querySelector(".tareas");





form.addEventListener("submit",(e)=>{

   let tareaArealizar = document.querySelector(inputTarea.value); //Lo que escribo en el input
   e.preventDefault();
   addTarea();
   form.reset();
})



function addTarea () {
   let div = document.createElement("div");
   div.className = "tarea";

   div.innerHTML = `
   <div class="input-tarea">
   <input class="check" type="checkbox">
   <p class="tareaPorHacer">${inputTarea.value}</p>
   </div>
   <img class="closeTarea" src="./images/icon-cross.svg">
    `;

   divContainer.append(div);

   let inputCheckbox = document.querySelectorAll(".check");
   let tareaPorHacer = document.querySelectorAll(".tareaPorHacer");
   /*inputCheckbox.addEventListener("click",()=>{

       if(inputCheckbox.checked) { //Si esta clickeado arroja true
         tareaPorHacer.style.textDecoration = "line-through";
       }
       else{
         tareaPorHacer.style.textDecoration = "none"; //sacamos el tachado
       }
      
   })*/
   inputCheckbox.forEach((check)=>{
      check.addEventListener("click",()=>{

         if(inputCheckbox.checked) {
            tareaPorHacer.forEach((tarea)=>{
            
               tarea.style.textDecoration = "line-through";
            })
            
         }
         else{
            tareaPorHacer.forEach((tarea)=>{
               tarea.style.textDecoration = "none";
            })

         }
      })
   })

  
  
   

}

function agregarDivBottom () {

   let divBottom = document.createElement("div");
   divBottom.className = "itemsLeft-clear";

   divBottom.innerHTML = `
   p><span>0</span> items left</p>
   <p>Clear completed</p>
  `
 divBottom.append(divContainer);
   
   
      
 
   
}

