/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe('pamiTest',function(){
    beforeEach(module('pingoraIntranet'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
        $controller=_$controller_;
    }));
    
    //Tests will go here...
    
    describe('Main Controller', function(){
        
        it('should have a mainController', function(){
            expect()
        });
        
//        it('sets initial welcome section',function(){
//            var $scope = {};
//            var controller = $controller("mainController",{$scope:$scope});
//            expect($scope.welcome).toBe(true);
//        });
        
    });
    
    
});

