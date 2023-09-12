function sumar(){
    let num1 = Number(prompt("ingrese un numero"));
    let num2 = Number(prompt("ingrese un numero"));
    console.log(num1 + num2);
}
function restar(){
    let num1 = Number(prompt("ingrese un numero"));
    let num2 = Number(prompt("ingrese un numero"));
    console.log(num1 - num2);
}

let inicio = prompt("calculadora");

if(inicio === "calculadora"){
    let signo = prompt("sumar o restar" );
    if(signo === "sumar"){
        sumar()
    }else if(signo === "restar"){
        restar()
    }
}