function bisiesto (anio){
  if(anio%100 == 0){
    if (anio%400 == 0)
    {
      return true
    }
    else{
      return false
    }
}
  return false
}


export default bisiesto