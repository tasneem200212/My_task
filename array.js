
console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]


*/

// [1,7,9,4,5]
//["Str","alex","moh"]
//['the','fox','over','lazy','dog']

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

// fruits[1]; //index of "Banana"
// fruits[0]; //index of "Tomato"

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

// var FavoriteFood=["Pizza","Ice Cream","Fried Chicken","Chocolate","Hamburgers"];
// var FavoriteSport=["Hockey","Tennis","Volleyball"];
// var FavoriteSport=["The Great Dictator","Modern Times","Harakiri","The Lion King"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// function firstOfArray(array){
//     return array[0];
// }
// console.log(firstOfArray(["t","u","g","x"]))

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

// function lastOfArray(array){
//     return array[array.length-1];
// }
// console.log(lastOfArray(["t","u","g","x"]))

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

// var array=[0,5,7,9];
// array.shift();
// array.shift();
// array.shift();
// array.unshift(1,3,4,6,8);
// array.push(10);

// console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

// var array2 = [5,9,-7,3.5];
// array2.push(12);
// array2.pop();
// array2.unshift(4,9);
// array2.shift();
// console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

// function middleOfArray(array){
//  let mid=Math.floor(array.length/2);
// if(array.length % 2 === 1){
// return array[mid];
// }
// else {
//     return ` ${array[mid-1]} and ${array[mid]} `;
// }
// }
// console.log(middleOfArray([1,4,5]));
// console.log(middleOfArray(["t","u","g","x"]));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

// var animals= ['cat', 'ele', 'bird'];
// animals[0]='zebra';
// animals[1]='elephant';
// animals.pop();
// console.log(animals);  //['zebra', 'elephant']


// var nums=[1,2,3,8,9];
// nums[0]=5;
// nums[1]=-22;
// nums[2]=3.5;
// nums[3]=44;
// nums[4]=98;
// nums[5]=44;
// console.log(nums);  //[5,-22,3.5,44,98,44]

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

//  function indexOfArray(nums,index){
// return nums[index];

//  }
//  console.log(indexOfArray([1,2,3,8,9],3));
//  console.log(indexOfArray([1,2,3,8,9],1));
//  console.log(indexOfArray([1,2,3,8,9],4));

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

// function arrayExceptLast(array){
// array.pop();
// return array;
// }
// console.log(arrayExceptLast([1,2,3,8,9]));
// console.log(arrayExceptLast([1,2,3]));
// console.log(arrayExceptLast([1,2,3,8,9,10,3,5,12]));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

// function addToEnd(array,num){
//  array.pop();
//  array.push(num);
//  return array;
// }
// console.log(addToEnd([1,2,3,8,9],55));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function sumArray(array){
// var sum=0;
// for(let i=0;i<array.length;i++){
// sum+=array[i];
// }
// return sum;
// }
// console.log(sumArray([1,2,3,8,9]));
// console.log(sumArray([1,2,3]));
// console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));


// another way
// function sumArray(array){
// var sum=0;
// let i=0;
// while(i<array.length){
// sum+=array[i];
// i++;
// }
// return sum;
// }
// console.log(sumArray([1,2,3,8,9]));
// console.log(sumArray([1,2,3]));
// console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));



/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function minInArray(array){
//     let short =array[0];
//     for(let i=1;i<array.length;i++){
//       if(short>array[i])
//     short=array[i];
//     }
//     return short;
// }
// console.log(minInArray([1,2,3,8,9,0]));
// console.log(minInArray([2,3,8,9]));
// console.log(minInArray([1,2,3,8,9]));


//another way
    //  function minInArray(array){
    //     let short =array[0];
    //     let i=1;
    //     while(i<array.length){
    //       if(short>array[i]){
    //       short=array[i];
    //       }
    //       i++;
    //     }
    //     return short;
    // }
    // console.log(minInArray([1,2,3,8,9,0]));
    // console.log(minInArray([2,3,8,9]));
    // console.log(minInArray([1,2,3,8,9]));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function removeFromArray(array,num){
// let i=0;
// while(i<array.length){
//     if(array[i]==num){
//     array.splice(i,1);
//     }
//     i++;
// }
// return array;
// }

// console.log(removeFromArray([1,2,3,8,9],8));


// another way
// function removeFromArray(array,num){
// for(let i=0;i<array.length;i++){
//     if(array[i]==num){
//     array.splice(i,1);
//     }
// }
// return array;
// }

// console.log(removeFromArray([1,2,3,8,9],8));




// function removeFromArray(array,numrem){
//     let index=array.indexOf(numrem);
// array.splice(index,1);
// return array;
// }
// console.log(removeFromArray([1,2,3,8,9],8));
// console.log(removeFromArray([1,2,3,8,9],9));
// console.log(removeFromArray([1,2,3,8,9],3));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function oddArray(array){
//     let newarray=[];
// for(let i=0;i<array.length;i++){
// if(array[i] % 2===1){
//     newarray.push(array[i]); 
// }
// }
// return newarray;
// }
// console.log(oddArray([1,2,3,8,9]))


//another way
// function oddArray(array){
// let newarray=[];
// let i=0;
// while(i<array.length){
// if(array[i] % 2===1){
//     newarray.push(array[i]); 
// }
// i++;
// }
// return newarray;
// }
// console.log(oddArray([1,2,3,8,9]))



/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function aveArray(array){
//     let sum=0;
//     for(let i=0;i<array.length;i++){
//         sum+=array[i];
//     }
//     let avg=sum/array.length;
//     return avg;
// }
// console.log(aveArray([1,2,3,8,9]));
// console.log(aveArray([1,2,3,8,9,77]));


//another way
// function aveArray(array){
//     let sum=0;
//     let i=0;
//     while(i<array.length){
//         sum+=array[i];
//         i++
//     }
//     let avg=sum/array.length;
//     return avg;
// }
// console.log(aveArray([1,2,3,8,9]));
// console.log(aveArray([1,2,3,8,9,77]));


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function shorterInArray(strings){
// let short=strings[0];
// for(let i=1;i<strings.length;i++){
// if(short.length>strings[i].length){
//     short=strings[i];
// }
// }
// return short;
// }
// console.log(shorterInArray(["alex","mercer","madrasa","rashed2","emad","hala"]))   //"alex"


//another way
// function shorterInArray(strings){
// let short=strings[0];
// let i=1;
// while(i<strings.length){
//  if(strings[i]<short){
//  short=strings[i];
//  } 
//  i++;
// }
// return short;
// }
// console.log(shorterInArray(["alex","mercer","madrasa","rashed2","emad","hala"]));  //"alex"


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function repeatChar(string,char){
// let count=0;
// for(let i=0;i<string.length;i++){
//     if(char===string[i]){
//         count++;
//     }
// }
// return count;
// }
// console.log(repeatChar("alex mercer madrasa rashed2 emad hala" ,"a")) //8
// console.log(repeatChar("alex mercer madrasa rashed2 emad hala" ,"z")) //0


//another way
// function repeatChar(string,char){
// let count=0;
// let i=0;
// while(i<string.length){
// if(string[i]==char){
//     count++;
// }
// i++;
// }
// return count
// }
// console.log(repeatChar("alex mercer madrasa rashed2 emad hala","a")); //8
// console.log(repeatChar("alex mercer madrasa rashed2 emad hala" ,"z")) //0



/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(strings){
    let result=[];
    for(let i=0;i<strings.length;i++){
            if(strings[i].length % 2 != 0 && i % 2==0){
            result.push(strings[i]); 
            }
        }
return result;
}
console.log(evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]));


// another ways
// function evenIndexOddLength(strings){
//     let result=[];
//     let i=0;
//     while(i<strings.length){
//             if(strings[i].length % 2 != 0 && i % 2==0){
//             result.push(strings[i]); 
//             }
//             i+=1;
//         }
// return result;
// }
// console.log(evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]));

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function powerElementIndex(nums){
//     let array=[];
// for(let i=0;i<nums.length;i++){
// array.push(Math.pow(nums[i],i));
// }
// return array;
// }
// console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));   // [1, 5, 16, 27, 16, 100000]



// another ways
// function powerElementIndex(nums){
// let array=[];
// let i=0;
// while( i < nums.length){
// array.push(Math.pow(nums[i],i));
// i++;
// }
// return array;
// }
// console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));   // [1, 5, 16, 27, 16, 100000]


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function evenNumberEvenIndex(nums){
// let array=[];
// let i=0;
// while( i < nums.length ){
// if(nums[i] % 2 ==0 && i%2==0 ){
// array.push(nums[i]);
// }
// i++;
// }
// return array;
// }
// console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1])); //[2,8,34]


//another way
// function evenNumberEvenIndex(nums){
//     let array=[];
//     for(let i=0;i<nums.length;i++){
//     if(nums[i] % 2 ==0 && i%2==0 ){
//     array.push(nums[i]);
//     }
//     }
//     return array;
//     }
//     console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1])); //[2,8,34]