console.log("estoy en js")

let $resultado = document.getElementById("resul")

function fSumar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML = "LA SUMA ES:"+ (num1+num2)
}
function fRestar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML = "LA RESTA ES:"+ (num1-num2)
}

function fMultiplicar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML = "LA MULTIPLICACION ES:"+ (num1*num2)
}

function fDividir(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    if(num2===0)
    {$resultado.innerHTML = "La division entre cero (0) No es posible"}
    else{$resultado.innerHTML = "LA DIVISION ES: "+ (num1/num2)}
}