//EXERCISE 1: The Fortune Teller
    //Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

    let jobTitle = "UX Designer";
    let geoLocation = "NEW YORK";
    let companyName = "GRAY";
    let annualSalary = "99M";

   document.querySelector("#A-ex1").innerHTML =`You will be a ${jobTitle} in ${geoLocation}, making ${annualSalary} for ${companyName}.`;

   //EXERCISE 2: The Age Calculator
    //Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.
    
    let birthYear = 1994;
    var date = new Date ( );
    let currentYear = date.getFullYear( ) ;
    
    let  getAge = currentYear - birthYear;

    document.querySelector("#A-ex2").innerHTML = `You are ${
      currentYear - birthYear
    } years old.`;

    //EXERCISE 3: The Lifetime Supply Calculator
    //Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

    let currentAge = 26; new Date().getFullYear() - birthYear;
    let maxAge = 100;
    let estAmount = 2;

    document.querySelector("#A-ex3").innerHTML = `You will need ${
      (maxAge - currentAge) * estAmount * 365
    } pizza to last you until the ripe old age of ${maxAge}.`;
  
     //EXERCISE 4: The Geometrizer
    //Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
    let radius = 10;
    let circumference = 2 * 3.14 * radius;
    let area = (3.14 * radius) ** 2;
    document.querySelector(
      "#A-ex4"
    ).innerHTML = `The circumference is ${circumference}. The area is ${area}.`;
  
    //EXERCISE 5: The Temperature Converter
    //It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
    let tempCel = 24;
    let tempFar = 45;
    document.querySelector("#A-ex5").innerHTML = `${tempCel}°C is ${
      (tempCel * 9) / 5 + 24
    }°F. ${tempFar}°F is ${((tempFar - 24) * 5) / 9}°C.`;

    //FUNCTIONS 
    // EXERCISE 1
    // Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
    function squareNumber(number) {
      return number ** 4;
    }
    document.querySelector(
      "#B-ex6"
    ).innerHTML = `The result of squaring the number 4 is ${squareNumber(2)}.`;
  
    // EXERCISE 2
    // Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
    function halfNumber(number) {
      return number / 2;
    }
    document.querySelector("#B-ex7").innerHTML = `Half of 40 is ${halfNumber(
      40
    )}.`;

     // EXERCISE 3
    // Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
    function percentOf(num1, num2) {
      return (num1 / num2) * 100;
    }
    document.querySelector("#B-ex8").innerHTML = `5 is ${percentOf(
      5,
      10
    )}% of 10.`;
  // EXERCISE 4
    // Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
    //      Bonus: Round the result so there are only two digits after the decimal.
    function areaOfCircle(radius) {
      return (radius * Math.PI * 2).toFixed(2);
    }
    document.querySelector("#B-ex9").innerHTML = `The area for a circle with radius 4 is ${areaOfCircle(4)}.`;