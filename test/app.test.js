import bisiesto from "../app.js";
describe('Sample app',()=>{
    describe('bisiesto', () => {

		test('should return true by bis', () => {
			expect(bisiesto(2024)).toEqual(true);
		});
		
		test('should return false by no bis', () => {
			expect(bisiesto(2030)).toBe(false);
			
		});
		
	});
})