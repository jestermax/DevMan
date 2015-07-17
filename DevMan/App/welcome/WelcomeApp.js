
var app = angular.module('DevMan.Welcome', ['ui.bootstrap', 'DevMan.Services']);

app.controller('WelcomeCtrl', ['$scope', 'EnumProvider', 'StorageProvider', function ($scope, EnumProvider, StorageProvider) {
    StorageProvider.CurrentProfileId = 1;

    $scope.test = "test";

    $scope.Sessions = [
        {
            Id: 1,
            ProfileName: "Jake"
        }
    ];

    // Load sessions list from storage


}]);
