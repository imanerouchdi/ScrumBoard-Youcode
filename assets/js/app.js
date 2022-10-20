/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
// afficher html+function affichage

<<<<<<< HEAD
const todotask=document.getElementById("to-do-tasks");
const inprogress=document.getElementById("in-progress-tasks");
const done= document.getElementById("done-tasks");
const typeInput = document.getElementsByName("type");
let cmp=0;
let titre=document.getElementById("titre");
let type=document.getElementsByName("type");
let priority=document.getElementById("Priority")
let status=document.getElementById("Status");
let date =document.getElementById("Date");
let description=document.getElementById("desc");
let form=document.getElementById("form");
reloadTasks();

 function createTask() {
//     // initialiser task form
=======
    const toDoTask=document.getElementById("to-do-tasks");
    const inProgressTask=document.getElementById("in-progress-tasks");
    const doneTask=document.getElementById("done-tasks");
>>>>>>> 6cf797196c079022e47d385a11a0ee8ab17e1c8c

function createTask() {
    toDoTask.innerHTML="";
    inProgressTask="";
    doneTask="";
    tasks.forEach(task => {
        if(task==="To Do"){
            toDoTask.innerHTML+=`<button class="d-flex button border w-100 p-1 p-1"> 
            <div class="col-md-1">
                <i class="bi bi-question-circle text-success"></i>
            </div>
            <div class="text-start col-md-11 ">
                <div class="fw-bold">${task.title}</div>
                <div class="text ">
                    <div class="text text-muted">${task.date}</div>
                    <div class="text-Des" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">${task.description}There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task.
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


    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form

    // console.log("open the form ");
    
<<<<<<< HEAD

    /*
   
    // create letiable for input 
    // checht type
    let checkType; let afficherTask;
    for(let item in type ){
        if(type[item].checked==1)
        checkType=type[item];
    }
        // bhal had for constan type=document.getSelector("input[name='type']:checked");

     // test of empty
    if(priority=="" || status!="" || titre!=""|| !datte  || description!=""){
        alert("veuillez remplir les champ");
    }else{
        // ajouter task in one of 3
            // place of tasks 
        if(status=='to-do') afficherTask=document.getElementById("to-do-tasks");
        else if(status=='in-progress') afficherTask=document.getElementById("in-progress-tasks");
        else if (status=='done') afficherTask=document.getElementById("done-tasks");}
        let btn_addTask=document.getElementById("save");
        // change the content of button
        btn_addTask.innerHTML=`
                        <div class="col-md-1">
							<i class="bi bi-question-circle text-success"></i> 
						</div>
						<div class="text-start col-md-11">
							<div class="fw-bold">${titre}</div>
								<div class="text">
									<div class="text-muted">#5 ${date}</div>
                                    <div class="text-desc" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">${desc}</div>
								</div>
								<div class="my-10px">
										<span class="btn btn-primary">${priority}</span>
										<span class="btn btn-gray-500 text-black" >${$type}</span>
								</div>
						</div>
                        `;
                        btn_addTask.classList.add("d-flex", "button", "border", "w-100", "p-1" ,"p-1");
                        afficherTask.appendChild(btn_addTask);*/
        
        
        
        

}   
function reloadTasks() {
    // Remove tasks elements

    // Set Task count
     todotask.innerHTML="";
     inprogress.innerHTML="";
     done.innerHTML="";
     
    for(let i=0 ;i<tasks.length;i++) {
        if(tasks[i].status ==="To Do"){
            cmp++;
            todotask.innerHTML +=`<button class="bg-white w-100 border-0 border-top d-flex py-2 ">
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
     };
     
}
function saveTask() {
    let formtask = document.getElementById("form");
    let task = {
        'title'         : formtask.title.value, // document.getElementById("titre"),
        'type'          : formtask.type.value,  //document.getElementsByName("type"),
        'priority'      :  form.priority.value,// document.getElementById("Priority"),
        'status'        :  form.status.value,// document.getElementById("Status"),
        'date'          :  form.data.value, //document.getElementById("Date"),
        'description'   :  form.description.value //document.getElementById("desc")
    };
    tasks.push(task);
    console.log(tasks);
    reloadTasks();
=======
    // var titre=document.getElementById("titre").value;
    // var type=document.getElementsByName("type");
    // var priority=document.getElementById("Priority").value
    // var status=document.getElementById("Status").value;
    // var datte =document.getElementById("Date").value;
    // var description=document.getElementById("desc").value;
    // create variable for input 
    // checht type
    // var checkType; var afficherTask;
    // for(var item in type ){
    //     if(type[item].checked==1)
    //     checkType=type[item].value;
    // }

     // test of empty
    // if(priority=="" || status!="" || titre!=""|| !datte  || description!=""){
    //     alert("veuillez remplir les champ");
    // }else{
    //     // ajouter task in one of 3
    //         // place of tasks 
    //     if(status=='to-do') afficherTask=document.getElementById("to-do-tasks");
    //     else if(status=='in-progress') afficherTask=document.getElementById("in-progress-tasks");
    //     else if (status=='done') afficherTask=document.getElementById("done-tasks");}
    //     let btn_addTask=document.getElementById("save");
    //     // change the content of button
    //     btn_addTask.innerHTML=`
    //                     <div class="col-md-1">
	// 						<i class="bi bi-question-circle text-success"></i> 
	// 					</div>
	// 					<div class="text-start col-md-11">
	// 						<div class="fw-bold">${titre}</div>
	// 							<div class="text">
	// 								<div class="text-muted">#5 ${date}</div>
    //                                 <div class="text-desc" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">${desc}</div>
	// 							</div>
	// 							<div class="my-10px">
	// 									<span class="btn btn-primary">${priority}</span>
	// 									<span class="btn btn-gray-500 text-black" >${$type}</span>
	// 							</div>
	// 					</div>
    //                     `;
    //                     btn_addTask.classList.add("d-flex", "button", "border", "w-100", "p-1" ,"p-1");
    //                     afficherTask.appendChild(btn_addTask);
    // }   
}
function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    //id form=Model
   // console.log("imane");
//    let tasks;
//    const saveTask=(ev)=>{// a rrow function
    // ev.preventDefault();
      let task={
        'title'         :   document.getElementById("titre").value,
        'type'          :   document.getElementsByName("type").value,
        'priority'      :   document.getElementById("Priority").value,
        'status'        :   document.getElementById("Status").value,
        'date'          :   document.getElementById("Date").value,
        'description'   :   document.getElementById("desc").value
    }
    tasks[tasks.lenght]=task;
    console.log(tasks);
>>>>>>> 6cf797196c079022e47d385a11a0ee8ab17e1c8c
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


