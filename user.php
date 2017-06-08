<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class User {
    public $firstName = '';
    public $lastName = '';
    public $email = '';
    public $username = '';
    public $password = '';
    
    public function validate () {
        if ($this->firstName === null || $this->firstName === ''){
            return false;
        }
        if ($this->lastName === null || $this->lastName === ''){
            return false;
        }
        if ($this->email === null || $this->email === ''){
            return false;
        }
        if ($this->username === null || $this->username === ''){
            return false;
        }
        if ($this->password === null || $this->password === ''){
            return false;
        }
        return true;
    }
}

?>
