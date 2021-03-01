function calcBMI() {
  
    var height = Number(document.getElementById("Height").value);
    var weight = Number(document.getElementById("Weight").value);

    var BMI = Math.round(weight / (height*height));

    //Display result of calculation
    document.getElementById("Res").innerHTML = "Tu indice de IMC es: " +BMI;
    
    if (BMI < 18.5)
        document.getElementById("comment").innerHTML = "Usted se considera bajo de peso.";
    else if (BMI >= 18.5 && BMI <= 25)
        document.getElementById("comment").innerHTML = "Usted tiene un peso saludable.";
    else if (BMI >= 25 && BMI <= 30)
        document.getElementById("comment").innerHTML = "Usted tiene sobrepeso.";
    else if (BMI > 30 && BMI <= 35)
        document.getElementById("comment").innerHTML = "Usted tiene Obesidad de grado 1.";
    else if (BMI > 35 && BMI <= 40)
        document.getElementById("comment").innerHTML = "Usted tiene Obesidad de grado 2.";
    else if (BMI > 40)
        document.getElementById("comment").innerHTML = "Usted tiene Obesidad mórbida.";
}
