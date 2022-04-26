const Ajolonauta = require('./../app/Ajolonauta')

describe("Unit Tests for Ajolonauta Class", () => {
    test('1) Create a ajolonauta objet', () => {
        const newAjolonauta = new Ajolonauta("Jorge")
        //Validating the expected result
        expect(newAjolonauta.name).toBe("Jorge");
    });
})