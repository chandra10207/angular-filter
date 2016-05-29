/**
 * Created by Chandra on 5/22/2016.
 */
myApp.controller('loginRegisterController',['$scope',function($scope){
    $scope.login = function(){
        $scope.message = "hello " + $scope.user.email;
    }

    $scope.register = function(){
        $scope.message = "hello " + $scope.user.firstname + ", you have registered.";
    }

}])

myApp.controller('offerController',['$scope',function($scope){
    $scope.login = function(){
        $scope.message = "hello " + $scope.user.email;
    }

    $scope.register = function(){
        $scope.message = "hello " + $scope.user.firstname + ", you have registered.";
    }

}])

myApp.controller('marketplaceController',['$scope',function($scope){
    $scope.login = function(){
        $scope.message = "hello " + $scope.user.email;
    }

    $scope.register = function(){
        $scope.message = "hello " + $scope.user.firstname + ", you have registered.";
    }

}])

myApp.controller('vmsController',['$scope',function($scope){
    $scope.login = function(){
        $scope.message = "hello " + $scope.user.email;
    }

    $scope.register = function(){
        $scope.message = "hello " + $scope.user.firstname + ", you have registered.";
    }

}])



