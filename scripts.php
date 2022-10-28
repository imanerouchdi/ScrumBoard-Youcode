<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();
    
    function getTasks($conn , $status)
    {       include('database.php');
        mysqli_stat($conn);
        //CODE HERE 
         //SQL SELECT
        //  $typeStatuses = "To Do";
         $sql="SELECT id_tasks,title, type.name ,priorities.name , statuses.name FROM `tasks` 
         INNER JOIN type on tasks.id_type=type.id_type 
         INNER JOIN priorities on tasks.id_priority=priorities.id_priorities 
         INNER JOIN statuses on tasks.id_status=statuses.id_statuses 
         WHERE statuses.name='$status'";
        //  $sql = "SELECT * FROM tasks";
         $result = mysqli_query($conn, $sql);
        //  var_dump($result);
        //  $icon ="";
        //  if($typeStatuses="To Do"){
        //     $sql.="statuses.name=to do";
        //     $icon="fa-regular fa-circle-question fa-lg pt-2 text-success";
        //  }
        //  else if($typeStatuses="To Do"){
        //     $sql.="statuses.name=In Progress";
        //     $icon="fa fa-circle-notch fa-lg pt-2 text-success";

        //  }
        //  else{  
        //     $sql.="statuses.name=done";
        //     $icon="fa-regular fa-circle-check fa-lg pt-2 text-success";

        //  }
         if(mysqli_num_rows($result)>0){
            return $result;
         }     
    }

    function saveTask()
    {
        //CODE HERE
        //SQL INSERT
        $_SESSION['message'] = "Task has been added successfully !";
		header('location: index.php');
    }

    function updateTask()
    {
        //CODE HERE
        //SQL UPDATE
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        //CODE HERE
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }

?>