<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if($_SERVER['REQUEST_METHOD']=='GET'){
    include './models/user.php';
    $users=[];
    $users[]=new User('1','Mike','Major','mike@yahoo.com','mikemajor','folsom75');
    $users[]=new User('2','Adrienne','Major','amajor@regis.edu','amajor99','kailie00');
    $users[]=new User('3','Kendra','Helms','sydney@gmail.com','boo','boo17');
    
    if(isset($_GET['id'])){
        $id=intval($_GET['id']);
        
        if(count($users) > $id){
            http_response_code(200);
            header("Content-Type: application/json");
            echo json_encode($users[$id]);
            exit();
        }
        else {
            include './models/error.php';
    
            http_response_code(404);
            header("Content-Type: application/json");
            $error=new Error('User not found', 404);
            echo json_encode($error);
            exit();
        }
    }
    else {
        http_response_code(200);
        header("Content-Type: application/json");
        echo json_encode($users);
        exit();
    }
}
else {
    include './models/error.php';
    
    http_response_code(400);
    header("Content-Type: application/json");
    $error=new Error('Bad request for users', 400);
    echo json_encode($error);
    exit();
}
