// Definimos las tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
};

// Función para convertir de euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

// Función para convertir de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
};

// Función para convertir de yenes a libras
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
};

// Exportamos las funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };