function somar(){
    let v1 = document.getElementById("valor1");
    let v2 = document.getElementById("valor2");
    let resultado = document.getElementById("resultado");

    soma = v1 + v2;
    resultado.innerHTML = soma;
    console.log(v1)
    console.log(v2)
    console.log(resultado)

}