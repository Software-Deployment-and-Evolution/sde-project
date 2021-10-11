import { FahrenheitToCelsius } from '../DayCard';
test('Unit Test: converting fahrenheit to celsius', () => {
  let fahrenheit = 32;
  let expectedCelsius = 0;
  let actualCelsius = FahrenheitToCelsius(fahrenheit);
  expect(actualCelsius).toEqual(expectedCelsius);
});
