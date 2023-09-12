/* function sumar(){
    let num1 = Number(prompt("ingrese un numero"));
    let num2 = Number(prompt("ingrese un numero"));
    console.log(num1 + num2);
}
function restar(){
    let num1 = Number(prompt("ingrese un numero"));
    let num2 = Number(prompt("ingrese un numero"));
    console.log(num1 - num2);
}

let inicio = prompt("calculadora o juego");

if(inicio === "calculadora"){
    let signo = prompt("sumar o restar" );
    if(signo === "sumar"){
        sumar();
    }else if(signo === "restar"){
        restar();
    }else{
        console.log("error 404, solo se sumar o restar");
    }
}else if(inicio === "juego"){
    let jugador1 = prompt("ingrese un nombre")
    let jugador2 = prompt("ingrese un nombre")
    const valorJugador1 = 1
    const valorJugador2 = 2
    for (let x=1; x<=5; x=x+1){
        let moneda = Math.ceil(Math.random()*2);
        if(moneda === valorJugador1){
            console.log("Gano jugador " + jugador1)
        }else if(moneda === valorJugador2){
            console.log("Gano jugador " + jugador2)
        }else{
            console.log("empate")
        }
        console.log("--------------------")
    }

}else{
    console.log("error 404, solo se calcular o jugar");
} */