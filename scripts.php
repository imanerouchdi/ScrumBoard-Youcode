<?php
    //INCLUDE DATABASE FILE
    include('database.php');

    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_GET['id']))        deleteTask($_GET["id"]);
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    // if(isset($_POST['delete']))      deleteTask();

    
    // $id = $_GET['id'];
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
            // return mysqli_query($conn,$sql) ;
            return $result;
         }else{ 
              echo '<div class="alert alert-warning text-center " role="alert"> There is not Data !!!! </div>'; }
    }
    function saveTask()
    {
      // if(isset($_POST['save'])){
      //   $title="";
      //   // preg_match katha9a9 lina mn form return 1-0
      //   if(!preg_match()){
      //     //
      //   }
      // }
        include('database.php');
        //CODE HERE
        $title      = $_POST["title"];
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
    function EditTask($id){
        
      include ('database.php');
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
      
        //SQL UPDATE
        include('database.php');
        //CODE HERE
        $id         = $_POST["idTask"];
        $title      = $_POST["title"];
        $type       = $_POST["type"];
        $priority   = $_POST["Priority"];
        $status     = $_POST["Status"];
        $date       = $_POST["Date"];
        $description= $_POST["description"];

        // var_dump($_POST);

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

        //CODE HERE
        //SQL DELETE
        $sql="DELETE FROM `tasks` WHERE id = $id ";
        $result = mysqli_query($conn,$sql);
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }

?>