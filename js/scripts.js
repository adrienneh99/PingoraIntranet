/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function logoToImage (item) {
    item.src = "/images/pingora_mountain.jpg";
    item.alt = "Pingora Mountain Range"; 
}

function imageToLogo (item) {
    item.src = "/images/logo.png";
    item.alt = "Pingora Asset Management Logo"; 
}

function emailMe () {
    parent.location='mailto:ahelms@regis.edu';
}

function validateInputField () {
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmpw = document.getElementById("confirmPassword").value;
    
    if (fname === null || fname === ""){
        alert("You must enter your first name.");
        return false;
    }
    else if (lname === null || lname === ""){
        alert("You must enter your last name.");
        return false;
    }
    else if (email === null || email === ""){
        alert("You must enter your email.");
        return false;
    }
    else if (username === null || username === ""){
        alert("You must enter a username.");
        return false;
    }
    else if (password === null || password === ""){
        alert("You must enter a password.");
        return false;
    }
    else if (confirmpw === null || confirmpw === ""){
        alert("You must confirm the password you entered.");
        return false;
    }
    else if (password !== confirmpw)
    {
       alert("These passwords don't match. Try again.");
       return false; 
    }
    return true;
}


function submitComment(){
    var comment = document.getElementById("commentFld").value;
    
    if(comment === null || comment === ""){
        alert("A comment must be supplied.");
        return false;
    }
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 404){
            alert("Unable to submit comments at this time. Please try again later.");
        }
        else if(request.readyState === 4 && request.status === 200){
            var text = request.responseText;
            var json = JSON.parse(text);
            var table = document.getElementById("commentsTable");
            var newRow = table.insertRow(1);
            var newCell = newRow.insertCell(0);
            newCell.innerHTML = json.datetime;
            newCell = newRow.insertCell(1);
            newCell.innerHTML = json.comment;
        }
    }
    
    request.open("POST", "processcomment.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("comment=" + comment);
    document.getElementById("commentFld").value = "";
}





