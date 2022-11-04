//  valide for empty

let title=document.getElementById("title");
let priority=document.getElementById("Priority")
let statu=document.getElementById("Status");
let date =document.getElementById("Date");
let description=document.getElementById("desc");
function validFormSAve(){
    if(title.value=="" || date.value=="" || description.value=="" || priority.value=="0" || statu.value=="0"){
        alert("mesage remplir");
    }else{
        document.getElementById('save').click(); 


    }
}
    function validFormUpDate(){
        if(title.value=="" || date.value=="" || description.value=="" || priority.value=="0" || statu.value=="0"){
            alert("ne laisse pas un champ vide");
        }else{
            document.getElementById('update').click(); 
    
    
        }
    }


