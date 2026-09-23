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

function classifyNumber(num){
    if (num === 0)
        console.log("zero")
    else if (num % 2 === 0 && num>0){
        console.log(num, "positive even")
    }
    else if (num % 2 === 1 && num>0){
        console.log(num, "positive odd")
    }
    else if (num % 2 === 0 && num<0){
        console.log(num, "negative even")
    }
    else if (num % 2 === 1 && num<0){
        console.log(num, "negative odd")
    }
}
classifyNumber(0)
classifyNumber(4)
classifyNumber(7)
classifyNumber(-4)
classifyNumber(-7)














