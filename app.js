// Escriba una función que tome un año y devuelva un valor booleano que indique si el año es un año bisiesto.
// Los años que son divisibles por 4 son años bisiestos, pero los años que son divisibles por 100 no son años bisiestos,
// pero los años que son divisibles por 400 son años bisiestos.

function bisiesto(year) {
	if(year%4==0){
		return true
	}
	else{
		return false
	}
}
export default bisiesto;