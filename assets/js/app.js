/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
// afficher html+function affichage
function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form

    // console.log("open the form ");
    
    var titre=document.getElementById("titre").value;
    var type=document.getElementsByName("type");
    var priority=document.getElementById("Priority").value
    var status=document.getElementById("Status").value;
    var datte =document.getElementById("Date").value;
    var description=document.getElementById("desc").value;
    // create variable for input 
    // checht type
    var checkType; var afficherTask;
    for(var item in type ){
        if(type[item].checked==1)
        checkType=type[item].value;
    }

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
                        afficherTask.appendChild(btn_addTask);
        
        
        
        

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











}

    
// }

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

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}