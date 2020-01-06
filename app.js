(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.name="Leena";
  $scope.stateOfBeing="sad";
  $scope.sayMessage=function(){
    return " likes the AngularJS, I am Happy!";
  };
  $scope.makeHappy=function(){
    $scope.stateOfBeing="happy";
  };
}

}
)();

//!function(){"use strict";function e(e){e.name="Leena",e.stateOfBeing="sad",e.sayMessage=function(){return" likes the AngularJS, I am Happy!"},e.makeHappy=function(){e.stateOfBeing="happy"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
