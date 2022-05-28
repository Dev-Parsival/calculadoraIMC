function formu(){
  var pes = parseFloat(document.getElementById("peso").value);
  var altu = parseFloat(document.getElementById("altura").value);
  var resultado = pes / (altu * altu);
  var n = resultado.toFixed(2);
  var simples = document.getElementById("resultado");
  var nome = document.getElementById("idade").value;
  var imc = n;
  

  if (resultado < 18.5){     
    
    simples.innerHTML = "Olá " + nome + ", você está abaixo do peso! <br><center><b> IMC: <h1>" + imc;    
    
    }else if((resultado >=18) && (resultado <= 24.9)){
      simples.innerHTML = "Olá " + nome + ", Parabéns você está no peso ideal." + "<br><center><b> IMC: <h1>" + imc;

    }else if((resultado >=25) && (resultado <= 29.9)){
      simples.innerHTML = "Olá " + nome + ", VOCÊ ESTÁ COM SOBREPESO! <br><center><b> IMC: <h1>" + imc;

    }else if((resultado >=30) && (resultado <= 34.9)){
      simples.innerHTML = "Olá " + nome + ", Você está com obesidade Grau I. <br><center><b> IMC: <h1>" + imc;

    }else if((resultado >=35) && (resultado <= 39.9)){
      simples.innerHTML = "Olá " + nome + ", Você está com obesidade Grau II. <br><center><b> IMC: <h1>" + imc;

    }else if(resultado >=40){
      simples.innerHTML = "Olá " + nome + ", Você está com obesidade Grau III. <br> Obesidade morbida! <br><center><b> IMC: <h1>" + imc;
    }


}  
  