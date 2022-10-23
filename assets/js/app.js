/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */


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

indexTasks=-1;

reloadTasks();

//afficher data
function reloadTasks() {
    let cmpToDo=0,cmpInProgress=0,cmpDone=0;
    // let cmp=0;
    let show;
    let icons="";
        tasks.forEach ((task,cmp) => {
        if(task.status=="To Do"){
            show=document.getElementById("to-do-tasks");
            icons="fa-regular fa-circle-question fa-lg pt-2 text-success";
            cmpToDo++;
        }
        else if(task.status== "In Progress"){
            show=document.getElementById("in-progress-tasks");
            icons="fa fa-circle-notch fa-lg pt-2 text-success";
            cmpInProgress++;
        }
        else if(task.status== "Done" ){
            show=document.getElementById("done-tasks");
            icons="fa-regular fa-circle-check fa-lg pt-2 text-success";
            cmpDone++;
        }
        document.getElementById("to-do-tasks-count").innerHTML=cmpToDo;
        document.getElementById("in-progress-tasks-count").innerHTML=cmpInProgress;
        document.getElementById("done-tasks-count").innerHTML=cmpDone;
        
            show.innerHTML += `
            <button class="border d-flex py-2 task" data-bs-toggle="modal" data-bs-target="#Model" onclick="editTask()">
                <div class="col-sm-1 pe-2">
                    <i class="${icons}"></i> 
                </div>
                <div class="col-sm-11 text-start">
                    <div class="fw-bolder">${task.title}</div>
                    <div class="">
                        <div class="">#${cmp+1} created in ${task.date}</div>
                        <div class="text-Des" title="${task.description}">${task.description}</div>
                    </div>
                    <div class="">
                        <span class="btn btn-primary btn-sm">${task.priority}</span>
                        <span class="btn bg-light-600 btn-sm">${task.type}</span>
                    </div>
                </div>
        </button>`;
         });;
        
        

     
}

// .addEventListener("click",createTask);
createTask();
function createTask() {
    document.getElementById("buttonAddTask").onclick=()=>{
        initTaskForm();
      };    
}   
saveTask();
function saveTask() {
    // let formtask = document.getElementById("form");
    let btnSave=document.getElementById("save");
    let btnCancel=document.getElementById("cancel");
    btnSave.onclick=()=>{
        for(let i in type){
            if(typeTask[i].checked == 1)   type=typeTask[i].value;
        }
        if(titre.value!="" && date.value!=""&& description.value!=""){
            messageError.innerHTML="";
            let task = {
        'title'         :  document.getElementById("titre").value,
        'type'          :  document.getElementsByName("type").value,
        'priority'      :  document.getElementById("Priority").value,
        'status'        :  document.getElementById("Status").value,
        'date'          :  document.getElementById("Date").value,
        'description'   :  document.getElementById("desc").value,
            }
        tasks.push(task);
        // actualise tasks
        reloadTasks();
        btnCancel.click();
        }else{
            messageError.innerHTML="<h4>Veuillez remplir les champs SVP !!</h4>"
        }
    }
        
        console.log(tasks);
        // reloadTasks();
}
function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
    //afficher data
   


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
    document.getElementById("form").reset();
    // Hide all action buttons
}
// function reloadTasks(){
//     // remove tasks element 
//     todotask.innerHTML="";
//     inprogress.innerHTML="";
//     done.innerHTML="";
//     reloadTasks();
// }
