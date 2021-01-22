//1-Obtenga los datos ingresados en el formulario y almacenarlos en variables:
//declarar=asignar valor a la variable
function validar(){
    let nombre, apellido, correo, usuario, clave, telefono;
    nombre= document.getElementById ("nombre").value;
    apellido= document.getElementById ("apellido").value;
    correo= document.getElementById ("correo").value;
    usuario=document.getElementById ("usuario").value;
    clave= document.getElementById ("clave").value;
    telefono= document.getElementById ("telefono").value;   
}
//Validar que los campos no esten vacios y sean correctos en relación al tipo de dato:
/*
1-El campo nombre no supere los 30 caracteres.
2-El campo apellidos no supere los 80 caracteres.
3-El campo correo sea efectivamente un email
4-El campo correo no supere los 100 caracteres.
5-El campo usuario no supere los 20 caracteres.
6-El campo teléfono no supere los 15 caracteres.
7-El campo teléfono acepte solo datos numéricos.
8-Mostrar un mensaje con un saludo de bienvenida a quien acaba de registrarse. Mostrando su nombre completo, usuario y contraseña usando las variables mencioandas en el primer punto.
*/

//Expresión regular para evaluar la cadena de caracteres que se ingresan a email 
expresion = /\w+@\w+\.+[a-z]/;
let boton = document.getElementById("boton");
boton.addEventListener("click", function() {
    validar();
    if(nombre.value != "" && apellido.value != "" && correo.value != "" && usuario.value != "" && clave.value != "" && telefono.value != ""){
        if(nombre.value.trim().length <= 30){
            if(apellido.value.trim().length <= 80){
                if(correo.value.trim().length <= 100){
                    if (expresion.test(correo.value)){
                        if (usuario.value.trim().length <= 20){
                            if(telefono.value.trim().length <= 15){
                                if(!isNaN(telefono.value)){
                                alert("BIENVENIDO: "+nombre.value +" "+apellido.value+ " Tu usuario es: "+usuario.value+ "  Tu contraseña es: "+clave.value);

                                }else{
                                    alert("El telefono ingresado no es un número")  
                                }
                            }else{
                                alert("El telefono supera los 15 caracteres")
                            }
                        }else{
                            alert("El usuario supera los 20 caracteres")
                        }
                    }else{
                        alert("El correo no es valido")
                    }
                }else{
                    alert("El Apellido supera los 100 caracteres")
                }
            }else{
                alert("El apellido supera los 80 caracteres")
            }
        }else{
            alert("El nombre supera los 30 caracteres.")
        }
    }else {
        alert("Todos los campos son Obligatorios");
    }
})

