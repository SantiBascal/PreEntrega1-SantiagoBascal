let inicio = prompt("calculadora o juego")

if (inicio == "calculadora") {
    let num1 = Number(prompt("Ingrese un numero"));
    let num2 = Number(prompt("Ingrese un numero"));
    let signo = prompt("+, -, x, % ");
    if (signo == "+") {
        console.log(num1 + num2);
    } else if (signo == "-") {
        console.log(num1 - num2);
    } else if (signo == "x") {
        console.log(num1 * num2);
    } else if (signo == "%") {
        console.log(num1 / num2);
    }
}else if (inicio === "juego"){

}else{
    console.log("error 404, solo se 2 palabras (ahora mas)")
}
