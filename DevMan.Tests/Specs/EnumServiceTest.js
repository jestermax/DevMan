


describe("Enum Service", function () {
    var enumService = null;

    beforeEach(module('DevMan.Services'));
    beforeEach(inject(function (_EnumProvider_) {
        enumService = _EnumProvider_;
    }));

    /**
		This test checks a case that could fail other tests without explanation
	*/
    it("has an accesser named 'GameStates'", function () {
        expect(enumService.GameStates).toBeDefined();
        expect(typeof enumService.GameStates).toBe("object");
    });

    it("contains a string entry for 'Main'", function () {
        expect(enumService.GameStates.Main).toEqual("Main");

    });
});
