function soma(){

    let numero_um = parseInt(document.getElementById("primeiro_numero").value);
    let numero_dois = parseInt(document.getElementById("segundo_numero").value);
    let soma_numero = numero_um + numero_dois;
    
    document.getElementById('resultado').textContent = 'Resultado'+soma_numero;
}
function subtrai(){

    let numero_um = parseInt(document.getElementById("primeiro_numero").value);
    let numero_dois = parseInt(document.getElementById("segundo_numero").value);
    let subtrair_numero = numero_um - numero_dois;

    document.getElementById('resultado').textContent = 'Resultado'+subtrair_numero;
}
function multipicão(){

    let primeiro_numero = parseInt(document.getElementById("primeiro_numero").value);
    let segundo_numero = parseInt(document.getElementById("segundo_numero").value);
    let multipicão_numero = primeiro_numero / segundo_numero;

    document.getElementById("resultado").textContent



}

