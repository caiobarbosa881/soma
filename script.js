function somar() {
    let v1 = document.querySelector(".valor1").value;
    let v2 = document.querySelector(".valor2").value;

    var resultado = parseInt(v1) + parseInt(v2);
    document.querySelector(".resultado").innerHTML = resultado;
}