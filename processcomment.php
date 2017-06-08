<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$comment = $_POST["comment"];
date_default_timezone_set('UTC');
$datetime = date("m-d-Y H:i:s");

storeComment($comment, $datetime);

echo('{ "datetime" : "' . $datetime . '", ' . '"comment" : "' . $comment . '"}');

exit();

//placeholder function for storing the user submitted comment in the database
function storeComment($userComment,$commentTime){
    
}

?>