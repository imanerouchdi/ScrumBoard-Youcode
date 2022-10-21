/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
// afficher html+function affichage

let todotask=document.getElementById("to-do-tasks");
let inprogress=document.getElementById("in-progress-tasks");
let done= document.getElementById("done-tasks");
const typeInput = document.getElementsByName("type");
let titre=document.getElementById("titre");
let type=document.getElementsByName("type");
let priority=document.getElementById("Priority")
let status=document.getElementById("Status");
let date =document.getElementById("Date");
let description=document.getElementById("desc");
let form=document.getElementById("form");

reloadTasks();

//afficher data
function createTask() {
    todotask.innerHTML="";
    inprogress="";
    done="";
    tasks.forEach(task => {
        if(task.status==="To Do"){
            todotask.innerHTML+=`<button class="d-flex button border w-100 p-1 p-1"> 
            <div class="col-md-1">
                <i class="bi bi-question-circle text-success"></i>
            </div>
            <div class="text-start col-md-11 ">
                <div class="fw-bold">${task.titre}</div>
                <div class="text ">
                    <div class="text text-muted">${task.date}</div>
                    <div class="text-Des" title="${task.description}">${task.description}
                    </div>
                </div>
                <div class="my-10px">
                    <span class="btn btn-primary">${task.priority}</span>
                    <span class="btn btn-gray-500 text-black">${task.type}</span>
                </div>
            </div>
        </button>
        `
        }
        else if (task.status === "In Progress") {
            inProgress.innerHTML += `<button class="bg-white w-100 border-0 border-top d-flex py-2 ">
            <div class="px-2 ">
                <i class="bi bi-question-circle text-success fs-3 "></i> 
            </div>
            <div class="text-start ">
                <div class="h6 ">${task.titre}</div>
                <div class="text-start ">
                    <div class="text-gray ">#1 created in 2022-10-08</div>
                    <div title="${task.description}"> ${task.description}</div>
                </div>
                <div class=" ">
                    <span class="btn btn-primary ">High</span>
                    <span class="btn btn-light text-black ">Feature</span>
                </div>
            </div>
        </button>`
        } else if (task.status === "Done") {
            doneTask.innerHTML += `<button class="bg-white w-100 border-0 border-top d-flex py-2 ">
            <div class="px-2 ">
                <i class="bi bi-question-circle text-success fs-3 "></i> 
            </div>
            <div class="text-start ">
                <div class="h6 ">${task.title}</div>
                <div class="text-start ">
                    <div class="text-gray ">#1 created in 2022-10-08</div>
                    <div title="${task.description}"> ${task.description}</div>
                </div>
                <div class=" ">
                    <span class="btn btn-primary ">High</span>
                    <span class="btn btn-light text-black ">Feature</span>
                </div>
            </div>
        </button>`
        }
    });
        
        
        
        

}   
function reloadTasks() {
    let cmp=0;

    // Remove tasks elements

    // Set Task count
     todotask.innerHTML="";
     inprogress.innerHTML="";
     done.innerHTML="";
     
        for(let i=0 ;i<tasks.length;i++) {
        if(tasks[i].status ==="To Do"){
            todotask.innerHTML +=`<button class="bg-white w-100 border-0 border-top d-flex py-2 ">
            <div class="px-2 ">
                <i class="bi bi-question-circle text-success fs-3 "></i> 
            </div>
            <div class="text-start ">
                <div class="h6 ">${tasks[i].title}</div>
                <div class="text-start ">
                    <div class="text-gray "># ${cmp+1} ${tasks[i].date}</div>
                    <div title="${tasks[i].description}"> ${tasks[i].description}</div>
                </div>
                <div class=" ">
                    <span class="btn btn-primary ">${tasks[i].priority}</span>
                    <span class="btn btn-light text-black ">${tasks[i].type}</span>
                </div>
            </div>
        </button>
            `;
        }
        else if(tasks[i].status === "In Progress"){
            inprogress.innerHTML+=`<button class="bg-white w-100 border-0 border-top d-flex py-2 ">
            <div class="px-2 ">
                <i class="bi bi-question-circle text-success fs-3 "></i> 
            </div>
            <div class="text-start ">
                <div class="h6 ">${tasks[i].title}</div>
                <div class="text-start ">
                    <div class="text-gray "># ${cmp} ${tasks[i].date}</div>
                    <div title="${tasks[i].description}"> ${tasks[i].description}</div>
                </div>
                <div class=" ">
                    <span class="btn btn-primary ">${tasks[i].priority}</span>
                    <span class="btn btn-light text-black ">${tasks[i].type}</span>
                </div>
            </div>
        </button>
        `;
        }
        else if(tasks[i].status === "Done" ){
            done.innerHTML += 
            `<button class="bg-white w-100 border-0 border-top d-flex py-2 ">
            <div class="px-2 ">
                <i class="bi bi-question-circle text-success fs-3 "></i> 
            </div>
            <div class="text-start ">
                <div class="h6 ">${tasks[i].title}</div>
                <div class="text-start ">
                    <div class="text-gray "># ${ cmp} ${tasks[i].date}</div>
                    <div title="${tasks.description}"> ${tasks[i].description}</div>
                </div>
                <div class=" ">
                    <span class="btn btn-primary ">${tasks[i].type}</span>
                    <span class="btn btn-light text-black ">${tasks[i].priority}</span>
                </div>
            </div>
        </button>
        `;
        }
        cmp++;
        };
     
}
function saveTask() {
    let formtask = document.getElementById("form");
    let task = {
        'title'         : formtask.titre.value, // document.getElementById("titre"),
        'type'          : formtask.type.value,  //document.getElementsByName("type"),
        'priority'      :  form.priority.value,// document.getElementById("Priority"),
        'status'        :  form.status.value,// document.getElementById("Status"),
        'date'          :  form.data.value, //document.getElementById("Date"),
        'description'   :  form.description.value //document.getElementById("desc")
    };
    tasks.push;
    console.log(tasks);
    reloadTasks();
}
function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
    //afficher data
    let afficheData=document.querySelector(".tasks");


}
function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}
function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}
function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}
