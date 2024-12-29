// 1-Write a function to find the largest element in an array.

// function largerNubmer(array){
// var largenum=array[0];
// for(var i=1;i<array.length;i++){
// if(largenum<array[i]){
//  largenum=array[i]  ;
// }
// }
// return largenum;
// }
// console.log(largerNubmer([1,2,3,4,5,6,7,8,9,10]))
// console.log(largerNubmer([100,200,30,45,500,670,30]))



// 2-Write a function to find the smallest element in an array.

// function smallNubmer(array){
// var smallnum=array[0];
// for(var i=1;i<array.length;i++){
// if(smallnum>array[i]){
//  smallnum=array[i]  ;
// }
// }
// return smallnum;
// }
// console.log(smallNubmer([1,2,3,4,5,6,7,8,9,10]))
// console.log(smallNubmer([100,200,30,45,500,670,20]))


// 3-Write a function to find the sum of all elements in an array.


// function summation(array){
// var sum=0;
// for(let i=0;i<array.length;i++){
// sum+=array[i];
// }
// return sum;
// }

// console.log(summation([1,2,3,4,5,6,7,8,9,10]))


// 4-Write a function to find the average of all elements in an array.

// function average(array){
// var sum=0;
// for(let i=0;i<array.length;i++){
// sum+=array[i];
// }
// var avg=sum/array.length;
// return avg;
// }
// console.log(average([1,2,3,4,5,6,7,8,9,10]))

// 5-Write a function to find the median of all elements in an array.

// function median(array){
// var sorted=Array.from(array).sort((a,b)=>a-b);
// var mid=Math.floor(sorted.length/2);
// if(sorted.length%2===0){
// return (sorted[mid-1]+sorted[mid])/2;
// }
// else{
//     return sorted[mid];
// }
// }
// console.log(median([1,2,3,4,5,6,7,8,9,10]));


// 6-Write a function to remove all duplicates from an array.

// function removing(array){
// var uniq=[...new Set (array)];
// return uniq;
// }
// console.log(removing([1,2,3,4,4,5,6,7,8,9,7,9]));



// 7-Write a function to sort an array in ascending order.

// function sorting(array){
// var x=array.sort((a,b)=>a-b);
// return x;
// }
// console.log(sorting([100,200,30,45,500,670,20]));



// 8-Write a function to sort an array in descending order.

// function sorting(array){
// var x=array.sort((a,b)=>b-a);
// return x;
// }
// console.log(sorting([100,200,30,45,500,670,20]));

// 9-Write a function to shuffle the elements of an array randomly.
  
//Fisher-Yates 
// function shuffle(array){
// for(let i=array.length-1;i>0;i--){
// var index=Math.floor(Math.random()* (i+1));
// [array[i],array[index]]=[array[index],array[i]];
// }
// return array;
// }
// console.log(shuffle([1, 2, 3, 4, 5, 6]));