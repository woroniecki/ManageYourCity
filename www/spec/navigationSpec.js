describe("Move degrees between in <0, 360)", function() {

	it("should return degrees betwenn 0 to 360", function() {
		expect(MoveDegrees(800)).toEqual(80);
    	expect(MoveDegrees(120)).toEqual(120);
    	expect(MoveDegrees(360)).toEqual(0);
    	expect(MoveDegrees(-50)).toEqual(310);
    	expect(MoveDegrees(-420)).toEqual(300);
  	});
});
