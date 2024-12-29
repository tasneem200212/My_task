/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// var numchild;
// var pn;
// var location;
// var jobt;
// function tellFortune(numchild,pn,location,jobt){
// console.log(`You will be a ${jobt} in ${location},and married to ${pn} with ${numchild} kids `)
// }
// tellFortune(5,"Yousef","Amman","Cheef");
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

// var age;
// function calculateDogAge(age){
// console.log(`Your doggie is ${age*7} years old in dog years!`);
// }
// calculateDogAge(2);
/*

3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

//  var age;
//  var max=100;
// function calculateSupply(age,amount){
//   if(max<=100){
// var calc=(amount*365)*(max-age)
// console.log(`You will need ${calc} cups of coffee  to last you until the ripe old age of ${max}`)
// }}
// calculateSupply(100,3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

//  function greet(name){
// console.log(`Hello ${name}`)
//  }
// greet("Tasneem");
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
//not match parameter
//not allow argument
//missmatch argument

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
// function double1(x) {
//   return 2 * x ;
// }
// function double2 (x){
// return 2 * x;
// }
// function double3 (x) {
//   return 2 * x;}
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
// function cube(number){
// console.log(Math.pow(number,3))
// }
// cube(5);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
// function multiply(num1,num2){
// console.log(num1*num2)
// }
// multiply(5,4);
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

// function canIGetADrivingLicense(age){
// if(age>=20){
//   console.log("yes you can")
// }
// else{
//   console.log (`please come back after ${20-age} years to get one `);
// }
// }
// canIGetADrivingLicense(21);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
// var kk;
// var mm;
// function sameLength(kk,mm){
// if(kk.length==mm.length){
//   return true;
// }
// else{
//   return false

// }
// }
// console.log(sameLength("tree","car"))
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
// function largerNubmer(x,y){
// if(x>y){
// return x;
// }
// else {
//   return y;
// }
// }
// console.log(largerNubmer(5,6))

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
// function smallerNubmer(x,y,z){
// if((x<y)&&(x<z) ){
//   console.log(x)
// }
// else if((y<x)&&(y<z)){
//   console.log(y)
// }
// else{
//   console.log(z)
// }
// }
// smallerNubmer(8,6,7);
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> tr

Ex: shorterString("air","tr","car","github","by")
=> tr

*/

// function shorterString(array){
//   let small=array[0];
//   for(let i=1;i<array.length;i++){
//  if(array[i].length<small.length){
//   small=array[i];
// }
// }
// return small;

// }
// console.log(shorterString(["air","school","car","by","github"]));
// console.log(shorterString(["air","tr","car","by","github"]));
// console.log(shorterString(["by","tr","car","air","github"]));
// console.log(shorterString(["air","by","car","school","github"]));
// console.log(shorterString(["air","tr","by","car","github"]));
// console.log(shorterString(["air","tr","car","github","by"]));


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")A

=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

// function longerString(array){
// var long=array[0];
// for(let i=1;i<array.length;i++){
//   if(long.length<array[i].length){
// long=array[i];
//   }
// }
// return long;
// }
// console.log(longerString(["air","school","car","github"]))
// console.log(longerString(["air","schoo","car","github"]))

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
// function isEven(num){
// if(num%2==0){
//   return true;
// }
// else {
// return false;
// }
// }
// console.log(isEven(5))
// console.log(isEven(4))
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

// function isOdd(num){
//   if(num%2==1){
//       return true;
//     }
//     else {
//     return false;
//     }
//     }
//     console.log(isOdd(5))
//     console.log(isOdd(4))

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
// solution 1
// function positive(num){
//   if(num>=0){
//     return num;
//   }
//   else {
//     return -num;
//   }
// }
// console.log(positive(5))

// solution 2
// function positive(num){
//   console.log(Math.abs(num));
// }
// positive(-5)


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

// function fullName(firstName,lastName){
// return(firstName + ' '+ lastName);
// }
// console.log(fullName("Adam","McCallen"))
// console.log(fullName("Alex", "Mercer"))

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
// sol 1
// function average(num1,num2,num3,num4,num5){
// var con=num1+num2+num3+num4+num5;
// var divi=con/5;
// return divi;
// }
// console.log(average(1,2,3,4,5))
// console.log(average(5,7,9,3,5))

// sol 2
// function average(numbers){
//   var sum=0;
//   for(let i=0;i<numbers.length;i++){
//   sum+=numbers[i];
//   }
//   var divi=sum/numbers.length;
//   return divi;
// }
// console.log(average([1,2,3,4,5]))
// console.log(average([5,7,9,3,5]))

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

// function randomNumber(){
//   return Math.random();
// }
// console.log(randomNumber())


/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

// function randomBetweenNumbers(num1,num2){
//   let x=Math.random()*num2+num1;
// return x;
// }
// console.log(randomBetweenNumbers(1,8))

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

// function scoreInUniversty(num){
//   let score;
// if(num>=95 && num<=100){
//   score= 'A';
// }
// else if (num>=85 && num<=94){
//   score='B';
// }
// else if (num>=70 && num<=84){
//   score='C';
// }
// else if (num>=50 && num<=69){
//   score='D';
// }
// else if (num>=0 && num<=49){
//   score='F';
// }
// return score;
// }
// console.log(scoreInUniversty(3))
// console.log(scoreInUniversty(71))
// console.log(scoreInUniversty(96))

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

//solution 1
// function counter(){
//   console.count("");
// }
// counter();
// counter();
// counter();

//solution 2
// function counter(){
//   for(let i=0;i<5;i++){
//   console.count("")
//   }
// }
// counter();

//solution 3
// var count=0;
// function counter(){
//  count++;
//  return count;
//   }
// console.log(counter());
// console.log(counter());
// console.log(counter());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
//solution 1
// function resetCounter(){
//   console.count();
// }
// resetCounter();
// resetCounter();
// resetCounter();
// console.countReset();
// resetCounter();
// resetCounter();
// resetCounter();


//solution 2
// function bigcounter(){
// var count=0;
// function counter(){
//  count+=1;
//  return count;
//   }
// function resetCounter(){
//   const previuos=count;
//   count=0;
// return`${previuos} and the counter reset now`;
// }
// return{counter,resetCounter};
// }
// const {counter,resetCounter}=bigcounter()

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(resetCounter());
// console.log(counter());
// console.log(counter());
// console.log(resetCounter());

