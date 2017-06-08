<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if($_SERVER['REQUEST_METHOD']=='GET'){
    include './models/location.php';
    $locations=[];
    $locations[]=new Location('1','Denver','Colorado');
    $locations[]=new Location('2','Houston','Texas');
    $locations[]=new Location('3','Bozeman','Montana');
    $locations[]=new Location('4','San Francisco','California');
    $locations[]=new Location('5','Phoenix','Arizona');
    $locations[]=new Location('6','Lansing','Michigan');
    $locations[]=new Location('7','Savannah','Georgia');
    $locations[]=new Location('8','Seattle','Washington');

    if(isset($_GET['id'])){
        $id=intval($_GET['id']);

        if(count($locations) > $id){
            http_response_code(200);
            header("Content-Type: application/json");
            echo json_encode($locations[$id]);
            exit();
        }
        else {
            include './models/error.php';

            http_response_code(404);
            header("Content-Type: application/json");
            $error=new Error('Location not found', 404);
            echo json_encode($error);
            exit();
        }
    }
    else {
        http_response_code(200);
        header("Content-Type: application/json");
        echo json_encode($locations);
        exit();
    }
}
else {
    include './models/error.php';

    http_response_code(400);
    header("Content-Type: application/json");
    $error=new Error('Bad request for locations', 400);
    echo json_encode($error);
    exit();
}
