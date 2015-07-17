
var app = angular.module('DevMan.Main', ['ui.bootstrap']);

app.controller('MainPageControls', ['$scope', function ($scope) {
    $scope.singleModel = 1;

    $scope.buttonClick = function () {
        $scope.singleModel = $scope.singleModel + 1;
    };
}]);