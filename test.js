// Importo la funcion desde app.js
const {fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


// Prueba para la función fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(1);
    const expected = 1 * 1.07;
    expect(dollars).toBe(expected);
});

// Prueba para la función fromDollarToYen
test("One dollar should be 146.26 yenes", function() {
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yenes).toBeCloseTo(expected, 2); // Usamos toBeCloseTo para manejar decimales
});

// Prueba para la función fromYenToPound
test("One yen should be 0.0056 pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 4); // Usamos toBeCloseTo para manejar decimales
});