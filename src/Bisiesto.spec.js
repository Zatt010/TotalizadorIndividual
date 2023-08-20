import bisiesto from "./Bisiesto.js";

describe("Es bisiesto", () => {
  it("Es bisiesto si no es divisible entre 100 y si entre 4", () => {
    expect(bisiesto(2008)).toEqual(true);
  });
  it("No es bisiesto", () => {
    expect(bisiesto(1800 )).toEqual(false);
    
  });
});