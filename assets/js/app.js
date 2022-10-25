/**
 * In this file app.js you will find all CRUD functions name.
 *
 */


let todoTask=document.getElementById("to-do-tasks");
let inProgress=document.getElementById("in-progress-tasks");
let done= document.getElementById("done-tasks");

let titre=document.getElementById("titre");
let type=document.getElementsByName("type");
let priority=document.getElementById("Priority")
let statu=document.getElementById("Status");
let date =document.getElementById("Date");
let description=document.getElementById("desc");
let typeTask=document.querySelector("input[name='type']:checked");
let index;
let nombre;
let typeFeature = document.getElementById("feature");
let typeBug = document.getElementById("bug");
let newTypeTask;
reloadTasks();

//afficher data
function reloadTasks() {
    let cmpToDo=0,cmpInProgress=0,cmpDone=0;
    // let cmp=0;
    let show;
    let icons="";
    // remove tasks element
    todoTask.innerHTML="";
    inProgress.innerHTML="";
    done.innerHTML="";
        tasks.forEach ((task,cmp) => {
        if(task.status=="To Do"){
            show=document.getElementById("to-do-tasks")
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
        // ajouter les compteur
        document.getElementById("to-do-tasks-count").innerHTML=cmpToDo;
        document.getElementById("in-progress-tasks-count").innerHTML=cmpInProgress;
        document.getElementById("done-tasks-count").innerHTML=cmpDone;

            show.innerHTML += `
            <button class="border d-flex py-2 task" data-bs-toggle="modal" data-bs-target="#Modal" onclick="editTask(${cmp}) ">
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
function createTask() {
        initTaskForm();
        
    document.querySelector("#update").style.display= "none";
    document.querySelector("#delete").style.display= "none";
        
    
}
function saveTask() {
    // verifecation cheched radio

    let featureOrBug;
    if(feature.checked)  featureOrBug = "feature";
    else featureOrBug = "Bug";
    // empty input 
        if(titre.value=="" || date.value==""|| description.value==""){
            messageError.innerHTML="<h4>Veuillez remplir les champs SVP !!</h4>"

        }else{
            let task = {
                'title'         :  document.getElementById("titre").value,
                'type'          :  featureOrBug,
                'priority'      :  document.getElementById("Priority").value,
                'status'        :  document.getElementById("Status").value,
                'date'          :  document.getElementById("Date").value,
                'description'   :  document.getElementById("desc").value,
                    }
            console.log(typetask);
             tasks.push(task);
             console.log(tasks);
             document.querySelector(".btn-close").click();

        }
        reloadTasks();
}

let buttonClickedIndex;
function editTask(index) {
    buttonClickedIndex = index;
    // Initialisez task form
     initTaskForm();
    // Affichez updates
    nombre=index;
    titre.value=tasks[index].title;
    priority.value=tasks[index].priority;
    description.value=tasks[index].description;
    date.value=tasks[index].date;
    statu.value=tasks[index].status;
    if(tasks[index].type=="Feature"){
        typeFeature.checked=true;
        typeBug.checked=false;
    } 
    else{
        typeFeature.checked=false;
        typeBug.checked=true;
    } 
    // Delete Button
       // document.querySelector("#delete").style.display="block";

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
    //afficher data
        // document.querySelector("#save").style.display="none";
        document.getElementById("save").style.display="none";
        
    document.querySelector("#update").style.display= "";
    document.querySelector("#delete").style.display= "";
    
}
function updateTask() {
    // tasks[buttonClickedIndex].title = titre.value;
    if(feature.checked){
        newTypeTask="Feature";
    }else{
        newTypeTask="Bug";
    }
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object
    let newTask={
        'title' : titre.value,
        'type' : newTypeTask,
        'priority':priority.value,
        'status' :statu.value,
        'date':date.value,
        'description' :description.value,
    }
    // Remplacer ancienne task par nouvelle task
    tasks[buttonClickedIndex]=newTask;
    document.getElementById("cancel").click();
    // Refresh tasks
    reloadTasks();

}
function deleteTask() {
    // Get index of task in the array
    tasks.splice(buttonClickedIndex,2);// splice : une methode d'objet qui supprimer les element objet
    // Remove task from array by index splice function

    // close modal form
    document.getElementById("cancel").click();
    // refresh tasks
    reloadTasks();
}
function initTaskForm() {
    // Clear task form from data
    document.getElementById("form").reset();
    // Hide all action buttons
     messageError.innerHTML="";
}

