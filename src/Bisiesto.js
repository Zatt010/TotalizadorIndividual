function bisiesto(anio) {
  if (anio % 4 === 0) {
    if (anio % 100 === 0) {
      if (anio % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  return false;
}

export default bisiesto;
