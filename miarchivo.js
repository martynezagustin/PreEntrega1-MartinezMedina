let operacion;
let numero1;
let numero2;
let result;
let edad;
const sumar = '+'
const dividir = '/'
const multiplicar = "*"
const restar = '-'
const salir = "0"

function calculadoraFunction(){
    edad = Number(prompt("Debes ser mayor de 18 para usar dicha calculadora, ¿qué edad tenes?"))
    
    //si la edadd es menor, no puede, aquí la condición
    if(edad < 18){
        alert("No puedes usar dicha calculadora.")
    } else{
        alert("Bien! Has ingresado que tienes " + edad + " años.")
        
        //bucle de la calculadora
        while(operacion != salir){
            operacion = prompt("Qué operación matemática deseas realizar? \n" +
            "+: sumar \n" +
            "-: restar \n" +
            "/: dividir \n" +
            "*: multiplicar \n" +
            "0: salir")

            //recorro un switch case
            switch (operacion) {
                case sumar:
                    numero1 = Number(prompt("Ingresa un número"))
                    numero2 = Number(prompt("Ingresa otro número"))
                    result = numero1 + numero2
                    alert("El resultado es " + result)
                    break;
                case restar:
                    numero1 = Number(prompt("Ingresa un número"))
                    numero2 = Number(prompt("Ingresa otro número"))
                    result = numero1 - numero2
                    alert("El resultado es " + result)
                    break;
                case multiplicar:
                    numero1 = Number(prompt("Ingresa un número"))
                    numero2 = Number(prompt("Ingresa otro número"))
                    result = numero1 * numero2
                    alert("El resultado es " + result)
                    break;
                case dividir:
                    numero1 = Number(prompt("Ingresa un número"))
                    numero2 = Number(prompt("Ingresa otro número"))
                    result = numero1 / numero2
                    alert("El resultado es " + result)
                    break;
                case salir:
                    alert("Gracias por haber utilizado la calculadora :)")
                    break;
                default:
                    alert("Por favor, ingrese una opción válida.")
                    break;
                    }
                }
                
            }
        }

calculadoraFunction()