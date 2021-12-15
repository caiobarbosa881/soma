var v1 = document.querySelector(".valor1").value;
var v2 = document.querySelector(".valor2").value;


function somar() {
    let v1 = document.querySelector(".valor1").value;
    let v2 = document.querySelector(".valor2").value;
    var resultado = parseInt(v1) + parseInt(v2);
    document.querySelector("#telah1").innerHTML = resultado;
}
function multiplicar() {
    let v1 = document.querySelector(".valor1").value;
    let v2 = document.querySelector(".valor2").value;
    var resultado = parseInt(v1) * parseInt(v2);
    document.querySelector("#telah1").innerHTML = resultado;
}
function subtrair() {
    let v1 = document.querySelector(".valor1").value;
    let v2 = document.querySelector(".valor2").value;
    var resultado = parseInt(v1) - parseInt(v2);
    document.querySelector("#telah1").innerHTML = resultado;
}
function dividir() {
    let v1 = document.querySelector(".valor1").value;
    let v2 = document.querySelector(".valor2").value;
    var resultado = parseInt(v1) / parseInt(v2);
    document.querySelector("#telah1").innerHTML = resultado;
}