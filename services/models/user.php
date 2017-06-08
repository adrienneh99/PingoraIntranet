<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class User implements JsonSerializable{
    private $iduser="";
    private $firstName="";
    private $lastName="";
    private $email="";
    private $username="";
    private $password="";
    
    public function __construct($_iduser,$_firstName,$_lastName,$_email,$_username,$_password){
        $this->iduser=$_iduser;
        $this->firstName=$_firstName;
        $this->lastName=$_lastName;
        $this->email=$_email;
        $this->username=$_username;
        $this->password=$_password;
    }
    
    public function jsonSerialize() {
        return [
            'iduser' =>  $this->iduser,
            'firstName'=>  $this->firstName,
            'lastName'=>  $this->lastName,
            'email'=>  $this->email,
            'username'=>  $this->username,
            'password'=>  $this->password
        ];
    }
}
