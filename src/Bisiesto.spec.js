import bisiesto from "./Bisiesto.js";

describe("Es bisiesto", () => {
  it("Es bisiesto", () => {
    expect(bisiesto(2008)).toEqual(true);
  });
  it("No es bisiesto si no es divisible entre 4", () => {
    expect(bisiesto(2019 )).toEqual(false);
    
  });
});