/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
var app = angular.module("pingoraIntranet",["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider){
        $routeProvider.when("/about",{
            templateUrl: "views/about.html",
            controller: "locationController"
        }).when("/contact",{
            templateUrl: "views/contact.html"
        }).when("/createacct",{
            templateUrl: "views/createacct.html"
        }).when("/team",{
            templateUrl: "views/team.html"
        }).otherwise({
            templateUrl: "views/home.html",
            controller: "homeController"
        });
}]);

app.controller('homeController', function($scope){

    $scope.welcome=true;
    $scope.login=false;
    $scope.welcomeUser=false;

    $scope.showWelcome=function(){
        $scope.welcome=true;
        $scope.login=false;
        $scope.welcomeUser=false;
    };

    $scope.showLogin=function(){
        $scope.welcome=false;
        $scope.login=true;
        $scope.welcomeUser=false;
    };

    $scope.showWelcomeUser=function(){
        $scope.welcome=false;
        $scope.login=false;
        $scope.welcomeUser=true;
    };

    $scope.username="";
});


app.controller('locationController',['$scope','$http',function($scope,$http){
        
        $http.get("/services/locations.php").then(function(response){
            $scope.locations = response.data;
        }
        , function errorCallback(response){
            $scope.error = response.data;
        });
        
}]);


app.controller('teamController',['$scope','$http',function($scope,$http){
        
        $http.get("/services/users.php").then(function(response){
            $scope.users = response.data;
        }
        , function errorCallback(response){
            $scope.error = response.data;
        });
        
}]);
    
    


