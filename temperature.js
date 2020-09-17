function fahrToCels(fahrTemp){
    var celsius= (fahrTemp-32)*5/9; //fahrenheit to Celsius formula
    if((celsius - Math.floor(celsius)) !==0){ //this detects if the celsius result is a floating point/not a whole number
        return console.log(fahrTemp + "° Degrees Fahrenheit is just about " + Math.round(celsius) + "° in Celsius.");
        // a slightly different phrase is outputted if the celsius result is not a whole number and rounds the number
    }else{
        return console.log(fahrTemp + "° Degrees Fahrenheit is " + celsius + "° in Celsius.");
    }
}

fahrToCels(33);
