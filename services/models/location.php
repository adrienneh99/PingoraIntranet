<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Location implements JsonSerializable{
    private $locationid="";
    private $city="";
    private $state="";

    public function __construct($_locationid,$_city,$_state){
        $this->locationid=$_locationid;
        $this->city=$_city;
        $this->state=$_state;
    }

    public function jsonSerialize() {
        return [
            'locationid' =>  $this->locationid,
            'city'=>  $this->city,
            'state'=>  $this->state
        ];
    }
}
