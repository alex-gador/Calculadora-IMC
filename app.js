window.addEventListener("load", function() {

    var enviar = document.getElementById("imcForm");

    enviar.addEventListener("submit", function(event){
        event.preventDefault();

        var peso = document.getElementById("pesoImc").value;
        var altura = document.getElementById("alturaImc").value;
        var resultadoForm = document.getElementById("resultado");

        var pesoImc = parseFloat(peso);
        var alturaImc = parseFloat(altura) / 100;

        var resultado = pesoImc / (alturaImc * alturaImc);
        
        var resultadoRedondeado = Math.round(resultado * 100) / 100;

        resultadoForm.innerHTML = "<p>IMC: " + resultadoRedondeado + "</p>";

        if(resultado < 18.5){
            resultadoForm.innerHTML += "<p>Bajo peso</p>";
        } else if(resultado >= 18.5 && resultado < 25){
            resultadoForm.innerHTML += "<p>Peso normal</p>";
        } else if (resultado >= 25.0 && resultado < 30.0){
            resultadoForm.innerHTML += "<p>Pre-obesidad o Sobrepeso</p>";
        } else if(resultado >= 30.0 && resultado < 35.0){
            resultadoForm.innerHTML += "<p>Obesidad tipo I</p>";
        } else if(resultado >= 35.0 && resultado < 40.0){
            resultadoForm.innerHTML += "<p>Obesidad tipo II</p>";
        } else if(resultado >= 40.0){
            resultadoForm.innerHTML += "<p>Obesidad tipo III</p>";
        }
    });
});
