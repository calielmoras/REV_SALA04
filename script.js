function calcularMedia(){
    var nome = document.getElementById("nome").value
    var n1 = parseFloat(document.getElementById('nota1').value)
    var n2 = parseFloat(document.getElementById('nota2').value)
    var n3 = parseFloat(document.getElementById('nota3').value)

    var media = (n1 + n2 + n3) / 3

    var print = "Seu nome é " + nome + " e suas notas foram " + n1 + ", " + n2 + ", " + n3 + ". Sua média é " + media.toFixed(2) + "."
    document.getElementById("resultado").innerHTML = print

}   

