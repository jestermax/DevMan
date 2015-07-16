
var app = angular.module('DevMan', []);

app.controller('MainCtrl', ['$scope', 'EnumProvider', function ($scope, EnumProvider) {
    $scope.State = EnumProvider.GameStates.Main;

    $scope.SetState = function (newState) {
        $scope.State = newState;
    };

}]);
