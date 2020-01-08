(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.name="";
  $scope.defaultmessage="";
  $scope.checkIfToomuch=function(){
const arrayOfStrings = $scope.name.split(',');
console.log('The original string is: ',$scope.name)
  console.log('The separator is: ', ',')
  console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))

  if($scope.name==""){
    $scope.defaultmessage="Please enter data first";
      }
else if(arrayOfStrings.length<3){
    $scope.defaultmessage="Enjoy!";
  }
else  if(arrayOfStrings.length>3){
    $scope.defaultmessage="Too Much!";
  }
  return   $scope.defaultmessage;
  };
}

}
)();

//!function(){"use strict";function e(e){e.name="Leena",e.stateOfBeing="sad",e.sayMessage=function(){return" likes the AngularJS, I am Happy!"},e.makeHappy=function(){e.stateOfBeing="happy"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
