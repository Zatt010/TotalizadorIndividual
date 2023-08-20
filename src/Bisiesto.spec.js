import bisiesto from "./Bisiesto.js";

describe("Es bisiesto", () => {
  it("Es bisiesto si es divisible entre 100 y 400", () => {
    expect(bisiesto(2000)).toEqual(true);
  });
  it("No es bisiesto si son divisibles por 100 pero no por 400", () => {
    expect(bisiesto(1800 )).toEqual(false);
    
  });
});