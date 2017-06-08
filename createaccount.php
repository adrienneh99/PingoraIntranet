<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include 'user.php';
include 'database.php';

$user = new User();
//$database = new Database();

$user->firstName = $_POST["firstName"];
$user->lastName = $_POST["lastName"];
$user->email = $_POST["email"];
$user->username = $_POST["username"];
$user->password = $_POST["password"];

$isValid = $user->validate();

if ($isValid){
    insertUser($user->firstName, $user->lastName, $user->email, $user->username, $user->password);
    header('Location: home.html');
}
else {
    header('Location: createacct.html'); 
}

exit();

?>

