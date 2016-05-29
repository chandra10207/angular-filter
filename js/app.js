/**
 * Created by Chandra on 5/21/2016.
 */
var myApp = angular.module('cloudpro',['ngRoute']);
myApp.config( ['$routeProvider',function($routeProvider){
    $routeProvider.
        when('/login',{
        templateUrl: 'views/login.php',
        controller: 'loginRegisterController'
    }).
        when('/loginregister',{
        templateUrl: 'views/loginregister.html',
        controller: 'loginRegisterController'
    })
        .when('/success',{
            templateUrl: 'views/success.html',
            controller: 'successController'
        }).
        when('/offer',{
            templateUrl: 'views/offering.html',
            controller: 'offerController'
        }).
        when('/marketplace',{
            templateUrl: 'views/marketplace.html',
            controller: 'marketplaceController'
        }).
    when('/allview',{
        templateUrl: 'views/allview.html',
        controller: 'vmsController'
    }).
        when('/vms',{
            templateUrl: 'views/vms.html',
            controller: 'vmsController'
        })

        .otherwise({
        redirectTo: '/loginregister'
    })
}])