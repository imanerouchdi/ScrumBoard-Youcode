<?php
    //INCLUDE DATABASE FILE
    require('database.php');

    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    if(isset($_GET['id']))        deleteTask($_GET["id"]);
    if(!isset($_POST['save'])=="")        saveTask();
    if(isset($_POST['update']))      updateTask();


    function counter($countStatus){
        global $conn;
        $sql = "SELECT * FROM tasks where id_status = $countStatus";
        $result = mysqli_query($conn,$sql);
        $res = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo count($res);
    }
    function getTasks($conn , $typeStatuses)
    {   
        mysqli_stat($conn);
         //SQL SELECT
        $sql="SELECT id,title, type.name type_name ,priorities.name priorities_name, statuses.name statuses_name,task_datetime, description FROM tasks 
        INNER JOIN type on tasks.id_type=type.id_type 
        INNER JOIN priorities on tasks.id_priority=priorities.id_priorities 
        INNER JOIN statuses on tasks.id_status=statuses.id_statuses WHERE statuses.name='$typeStatuses' order by id";
        $result = mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)>0){
          return $result;
        }
    }
    function saveTask()
    {
        require('database.php');

        //CODE HERE
        $title      = trim($_POST["title"]);
        $type       = $_POST["type"];
        $priority   = $_POST["Priority"];
        $status     = $_POST["Status"];
        $date       = $_POST["Date"];
        $description= $_POST["description"];
        //SQL INSERT
        $sql="INSERT INTO `tasks`(`title`, `id_type`, `id_priority`, `id_status`, `task_datetime`, `description`)
                        VALUES ('$title', '$type','$priority','$status','$date','$description')";
                        
        $result = mysqli_query($conn,$sql);
        $_SESSION['message'] = "Task has been added successfully !";
        header('location: index.php');
    }
    function EditTask($id)
    {
        include ('database.php');
        //SQL getData depend Id
        $sql = "SELECT id,id_status,id_priority,tasks.id_type,title, type.name type_name , priorities.name priorities_name, statuses.name statuses_name,task_datetime, description 
              FROM tasks JOIN type on tasks.id_type=type.id_type 
              INNER JOIN priorities on tasks.id_priority=priorities.id_priorities 
              INNER JOIN statuses on tasks.id_status=statuses.id_statuses WHERE tasks.id='$id'";
        $result = mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)>0){
            return $result;
         }
    }
    function updateTask()
    {
        include('database.php');
        //CODE HERE
        $id         = $_POST["idTask"];
        $title      = $_POST["title"];
        $type       = $_POST["type"];
        $priority   = $_POST["Priority"];
        $status     = $_POST["Status"];
        $date       = $_POST["Date"];
        $description= $_POST["description"];
        //SQL UPDATE
        $query="UPDATE tasks SET title ='$title', `id_type` = '$type', `id_priority` = '$priority', `id_status` = '$status', `task_datetime` = '$date',
         `description` = '$description'
         WHERE `tasks`.`id` =$id ";
        $result = mysqli_query($conn,$query);
        $_SESSION['message'] = "Task has been updated successfully !";
            header('location: index.php');
           }

    function deleteTask($id) 
    {
      include('database.php');
        //SQL DELETE
        $sql="DELETE FROM `tasks` WHERE id = $id ";
        $result = mysqli_query($conn,$sql);
        $_SESSION['message'] = "Task has been deleted successfully !";
		    header('location: index.php');
    }

?>

