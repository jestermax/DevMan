
var app = angular.module('DevMan', ['DevMan.Services', 'DevMan.Welcome', 'DevMan.Main']);

var services = angular.module('DevMan.Services', []);

app.controller('MainCtrl', ['$scope', 'EnumProvider', 'StorageProvider', function ($scope, EnumProvider, StorageProvider) {
    $scope.CurrentProfileId = null;

    $scope.State = null;


    // Change the overall view state of the app
    $scope.SetState = function (newState) {
        $scope.State = newState;

        if (newState == EnumProvider.GameStates.Welcome) {
            $scope.template = "Pages/Welcome.html";

        } else if (newState == EnumProvider.GameStates.Main) {
            $scope.template = "Pages/Welcome.html";
        }
    };

    // Initialization
    $scope.SetState(EnumProvider.GameStates.Main);

    // Watch for profile ID changes
    $scope.$watch(function () { return StorageProvider.CurrentProfileId; }, function(newv, oldv, scope) {
        scope.CurrentProfileId = newv;
    }, true);
}]);


