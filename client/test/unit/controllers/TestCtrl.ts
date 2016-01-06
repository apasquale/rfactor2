describe("TestCtrl", () => {
    it("should calculate 1 + 1 correctly", () => {
        expect(1 + 1).toBe(2);
    });
    describe("Nested Test", () => {
        it('should calculate 2 + 2 correctly', () => {
            expect(2 + 2).toBe(4);
        });
    });
});