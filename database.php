<?php
//  connection();
    
    $serverName="localhost";
    $user="root";
    $password="";
    $dataBase="youcodescrumboard";

    $conn  = mysqli_connect($serverName,$user,$password,$dataBase);
    if(!$conn){
        die("connection failed :" .mysqli_connect_error());
        
    }
    
    
    //CONNECT TO MYSQL DATABASE USING MYSQLI
    
?>
