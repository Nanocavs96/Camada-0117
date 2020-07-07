var numeroIngresadoUsuario = prompt ("Por favor , ingrese un numero para verificar pares")

for ( var i = 0; i <= numeroIngresadoUsuario; i++){
    if( i % 2 == 0)
        console.log( "Numero par :" + i)
    else {
        console.log("numero impar:" + i)
    }
}
