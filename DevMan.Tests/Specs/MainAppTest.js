


describe("Main App", function () {
    var scope;
    var $controller;

    beforeEach(module('DevMan'));
    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();

        /*mainCtrl = $controller('MainCtrl', {
            '$scope': scope
        });*/
    }));

    // Inject the service responsible for instantiating controllers
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    /**
		This test checks a case that could fail other tests without explanation
	*/
    it("has a value named 'State'", function () {
        var $scope = {};
        var controller = $controller('MainCtrl', { $scope: $scope });

        expect($scope.State).toBeDefined();
    });



});
