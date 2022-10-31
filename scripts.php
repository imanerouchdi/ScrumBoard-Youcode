<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();

    
    function getTasks($conn , $typeStatuses)
    {       
      
      //  include('database.php');
      
        mysqli_stat($conn);
        //CODE HERE 
         //SQL SELECT
        //  $typeStatuses = "To Do";
         $sql="SELECT id_tasks,title, type.name ,priorities.name , statuses.name,task_datetime, description FROM tasks 
         INNER JOIN type on tasks.id_type=type.id_type 
         INNER JOIN priorities on tasks.id_priority=priorities.id_priorities 
         INNER JOIN statuses on tasks.id_status=statuses.id_statuses WHERE statuses.name='$typeStatuses'";
         $result = mysqli_query($conn,$sql);
         
         if(mysqli_num_rows($result)>0){
            return $result;
         }     
    }

    function saveTask()
    {
        //CODE HERE
        //SQL INSERT
        include ("database.php");

        $title =  $_POST["title"];
        
        $type  =  $_POST["type"];
        
        $priority = $_POST["Priority"];
        
        $statues = $_POST["Status"];
        
        $taskDateTime =  $_POST["Date"];
        
        $description = $_POST["description"];
        
        $query="INSERT INTO `tasks`(`title`, `id_type`, `id_priorities`, `id_statuses`, `task_datetime`, `description`)
        
        VALUES ('$title','$type ','$priority','$statues','$taskDateTime','$description')";
        
        $result=mysqli_query($conn,$query);
        
        if($result){
        
        $_SESSION['message'] = "Task has been added successfully !";
        
        header('location: index.php');
        
        }




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