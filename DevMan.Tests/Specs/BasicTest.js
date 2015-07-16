

/**
	Example UI unit test
*/
describe("Basic Test", function () {
   
    //beforeEach(module('Interface'));

   
    /**
		This test checks a case that could fail other tests without explanation
	*/
    it("should display the correct status", function () {
        expect(Add(1, 2)).toEqual(3);
    });

});