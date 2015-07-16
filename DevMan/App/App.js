
var app = angular.module('DevMan', ['DevMan.Services']);

var services = angular.module('DevMan.Services', []);

app.controller('MainCtrl', ['$scope', 'EnumProvider', function ($scope, EnumProvider) {
    $scope.State;

    // Change the overall view state of the app
    $scope.SetState = function (newState) {
        $scope.State = newState;

        if (newState == EnumProvider.GameStates.Welcome) {
            template = "Pages/Welcome.html";

        } else if (newState == EnumProvider.GameStates.Main) {

        }
    };

    // Initialization
    $scope.SetState(EnumProvider.GameStates.Main);
}]);
