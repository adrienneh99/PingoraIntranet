<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getConnection() {
    $servername = "127.0.0.1";
    $dbname = "pami";
    $username = "root";
    $password = "admin";
    
    try {
        $connection = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (Exception $ex) {
        return null;
    }
    return $connection;
}


function insertUser ($firstName, $lastName, $email, $username, $password){
    $conn = getConnection();
    
    if(! $conn) {
        die('Connection was NOT successful');
    }
        
    try {
        $sql = "INSERT INTO user (firstName, lastName, email, username, password) "
                . "VALUES ('$firstName','$lastName','$email','$username','$password')";
        $conn->exec($sql);
        $conn = null;
    } catch (Exception $ex) {
        echo "EXCEPTION : Insert failed : " . $ex->getMessage();
    }
}

?>