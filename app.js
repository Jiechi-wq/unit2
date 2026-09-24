/* const isLoggedIn = true;
const role = "admin";
if (isLoggedIn === true){
    if (role === "admin") { 
        console.log("Mod")
    }else(
        console.log("no")
    ) 
} */


/* let age = 35;
let citizen = true;

if (age >= 35 && citizen === true){
    console.log("run for president")
}
 */
//problem 1
/* function classifyNumber(num){
    if (num === 0)
        console.log(num, "zero");
    else if (num % 2 === 0 && num>0){
        console.log(num, "positive even");
    }
    else if (num % 2 === 1 && num>0){
        console.log(num, "positive odd");
    }
    else if (num % 2 === 0 && num<0){
        console.log(num, "negative even");
    }
    else {
        console.log(num, "negative odd");
    }
}
classifyNumber(0)
classifyNumber(4)
classifyNumber(7)
classifyNumber(-4)
classifyNumber(-7)
 */

//problem 2 
/* function getLetterGrade(score){
    if (score > 100 || score<0)
        console.log("Invalid score")
    else if (score >= 90){
        console.log("A");}
    else if (score >= 80){
        console.log("B");
        }
    else if (score >= 70){
        console.log("C");
        }
    else if (score >= 60){
        console.log("D");
        }
    else {
        console.log("F");
        }
}
getLetterGrade(95)
getLetterGrade(82)
getLetterGrade(59)
getLetterGrade(-5)
getLetterGrade(150)
 */

//problem 3

function fizzBuzz(num){
    if (num % 3 === 0 && num % 5 === 0){
    console.log("FizzBuzz")
    }
    else if (num % 3 === 0){
    console.log("Fizz")
    }    
    else if (num % 5 === 0){
    console.log("Buzz")
    }
    else 
        console.log("not valid number")
}
fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(15)
fizzBuzz(7)






