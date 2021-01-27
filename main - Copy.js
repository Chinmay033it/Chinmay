

function areaOfTriangle(height , base) {
    console.log("Area of traingle with height", height, "and base", base);
    let area = eval(0.5*(height*base));
    console.log(area);
    let ele = document.getElementById("traingleResult")
    ele.innerHTML= area;
}

function areaOfRectangle(length , breadth) {
    length = document.getElementById("length").value;
    breadth = document.getElementById("breadth").value;
    console.log("Area of Rectangle with length", length, "and breadth", breadth);
    let area = eval(length*breadth);
    console.log(area);
    let ele = document.getElementById("rectangleResult")
    ele.innerHTML= area;
}

function greatestOfTwo(number1, number2) {
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    console.log("The greatest of ", number1 ,"and", number2);
    let greatest = number1;
    if (number1 > number2) {
        greatest = number1;
        
    } else {
        greatest = number2;
    }
    console.log(greatest)
    let ele = document.getElementById("greatestResult")
    ele.innerHTML= greatest;
}

function greatestOfThree(a, b, c) {
    console.log("The greatest of ", a ,"and", b, "and", c);
    let greatest = a;
    if ((a > b) && (a > c)) {
        greatest = a;
    } else if (b > c) {
        greatest = b;
     } else {
        greatest = c;
     }
     console.log(greatest);
}

function oddOrEven(num) {
    rem =  num % 2;
    console.log("remainder ", rem);
    if (rem === 1) {
        return num +" is Odd";
    } else {
        return num +" is Even";
    }
}

function swap(first, second) {
    console.log("Before swapping First:", first ," Second:", second);
    let temp = first; 
    first = second;
    second = temp;
    console.log("After swapping First:", first ," Second:", second);
}
