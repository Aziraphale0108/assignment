(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.foods = "";
    $scope.status = "";
    $scope.col = "";
    $scope.checkFoods =function(){
      var arrayOfFoods = $scope.foods.split(/\s*,\s*/);
      console.log(arrayOfFoods.length);
      var number = arrayOfFoods.length;
      var checkNumber = 0;
      for(var i = 0; i<arrayOfFoods.length; i++){
        if(arrayOfFoods[i] != ""){
          checkNumber++;
        }
      }
      console.log(checkNumber);
      if($scope.foods === ""){
        $scope.status = "Please enter data first!";
        $scope.col = "red";
      }
      else if(checkNumber <= 3){
        $scope.status = "Enjoy!";
        $scope.col = "green";
      }
      else if (checkNumber > 3) {
        $scope.status = "Too much!"
        $scope.col = "green";
      }
    }
  }
})();
