(function(){

  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.name="Leena";
  $scope.stateOfBeing="sad";
  $scope.sayMessage=function(){
    return "I like the AngularJS!";
  };
  $scope.makeHappy=function(){
    $scope.stateOfBeing="happy";
  };
}

}
)();
