//  1:task
// Write a program that asks the user for two numbers. Perform the following:

// Add, subtract, multiply, and divide the two numbers using arithmetic operators.

// Compare the two numbers using comparison operators (>, <, ==) and log the result.

// Use an assignment operator (+=) to add 5 to the first number and log the updated value.

a= 20;
b=50;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a+=b)
console.log(a-=b)
console.log(a%=b)

//2:task
// Create a program that accepts the user's first name, last name, and age as inputs. The program should:

// Concatenate the first and last name to display the full name.

// Use a ternary operator to check if the user is 18 or older and display a message indicating whether they are eligible to vote.

// Use a string operator to calculate the length of the full name and log whether the name is longer than 10 characters.
const firstname="rahul"
const secondname="bodacuuyr"
const age=+prompt("enter the age:")
console.log(firstname.concat(" "+secondname ))
age>18
? console.log(`${age} eligible to vote`):console.log(`${age} note eligible to vote`)
name=firstname.concat(""+secondname)
name.length >10 ?console.log(`${name} is  longer than 10 characters`):console.log(`${name} is not  longer than 10 characters`)



  
 
// 3:TextTrackListBuild a program that takes a number from the user and:

// Performs both modulus and exponentiation on the number (e.g., number % 2, number ** 2) and displays the results.

// Use a comparison operator to check if the number is greater than 50, and log "Greater than 50" or "Less than or equal to 50."

// Use a ternary operator to check if the number is odd or even.
var num=20;
console.log(num%2)
console.log(num**2)
num>50 ? console.log(`${num} greater than 50`):console.log(`${num}less than 50`)
num&1 ? console.log(`${num} even`):console.log(`${num} odd`)

// 4:task
// Write a program that takes three numbers from the user. The program should:

// Add the first two numbers and display the result.

// Compare the sum of the first two numbers with the third number using comparison operators.

// Use a logical operator (&&) to check if the sum of the first two numbers is greater than 50 and the third number is less than 100, and log the result.

var m=10
var n=20
var o=30
console.log(m+n)
