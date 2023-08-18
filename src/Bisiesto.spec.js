import bisiesto from "./Bisiesto.js";

describe("Es bisiesto", () => {
  it("Es bisiesto si es divisible entre 400", () => {
    expect(bisiesto(2000)).toEqual(true);
  });
  it("No es bisiesto si no es divisible entre 400", () => {
    expect(bisiesto(2000)).toEqual(true);
  });
});