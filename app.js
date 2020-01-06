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
