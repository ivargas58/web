function calculo(){
    // varias de los inputs
    var kilos = parseFloat(document.getElementById("kilo").value);
    var altura = parseFloat(document.getElementById("altura").value);
    // variables de la conversion 
    p = kilos*0.453592;
    a = altura*0.3048;
    if (isNaN(kilos) || isNaN(altura) || isNaN(p) || isNaN(a))
    {
        alert('Por favor, ingresa números válidos.');
        return;
    }else{
      
        //resultado 
        resultado1 = p/(a*a);
        // documentacion en el documento de html
        document.getElementById('resultado').innerText = "Tu indice de masa corporal es: "+resultado1;
    }
    if (resultado1 < 18.5) {
        document.getElementById('resultado2').innerText = "Su nivel de masa corporal es: Bajo peso";
    }
    else if (resultado1 >= 18.5 && resultado1 < 25) {
        document.getElementById('resultado2').innerText = "Su nivel de masa corporal es: Normal";
    }
    else if (resultado1 >= 25 && resultado1 < 30) {
        document.getElementById('resultado2').innerText = "Su nivel de masa corporal es: Sobrepeso";
    }
    else if (resultado1 >= 30 && resultado1 < 35) {
        document.getElementById('resultado2').innerText = "Su nivel de masa corporal es: Obesidad I";
    }
    else if (resultado1 >= 35 && resultado1 < 40) {
        document.getElementById('resultado2').innerText = "Su nivel de masa corporal es: Obesidad II";
    }
    else if (resultado1 >= 40) { // Aquí no necesitas otra condición
        document.getElementById('resultado2').innerText = "Su nivel de masa corporal es: Obesidad III";
    }
}



