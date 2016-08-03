//*************************************************************
// Create a function that finds the highest number.
//
// highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1
// Hint: create a variable called max, and assign it a reasonable start value; then use forEach: if an element is higher than max, change max.
//*************************************************************

// SOLUTION 1
var a = [29, 17, 33, 50, 100];
function highestNumber2(x) { //anonyomous function
  (x.sort(function(element1, element2)
  {return element1 - element2;} //sorts the whole number instead of the first digit
));
return (x[x.length - 1]);//returns the number in the last index spot of the array
}
 var a = [-1, -40, 45, 688, -75];

// SOLUTION 2
 var max = 500;
 function highestNumber(x){
 x.forEach(function(element){
  if (element > max) {
    max = element;
    console.log(max);
     }
   })
 }
//*************************************************************
 // Create a function that finds the lowest number.
 //
 // lowestNumber([1,4,2]) should return 1
 // lowestNumber([-1,-2,-4]) should return -4
//*************************************************************

var min = 5;
function lowestNumber(x){
x.forEach(function(element){
 if (element < min) {
   min = element;
   console.log(min);
    }
  })
}
//*************************************************************
//*************************************************************
//*************************************************************
// ATTEMPT AT
//
// Create a function that finds the smallest number (the closest to zero).
//
// smallestNumber([1,4,2]) should return 1
// smallestNumber([0.1,0.01,0.001]) should return 0.001
// smallestNumber([-1,-2,-4]) should return -1
// smallestNumber([0.1,-0.001]) should return -0.001
//*************************************************************
//*************************************************************
//*************************************************************

var b;
var neg;
var pos;
function isNegative(x) { //decides which numbers in array are neg
  return x<0;
}
neg = a.filter(isNegative); //pulls neg numbers into a new array
console.log(neg);

function isPositive(x){ //decides positive numbers
  return x>0;
}
pos = a.filter(isPositive); //"  "" positive
console.log(pos);

function smallestNumber(x){
  x.forEach(function(element) {
      lowestNumber(x)});}


    else {
      highestNumber(x);
    }

    if ((min * -1) < max) {
      console.log (min);
    }
    if ((min * -1) > max) {
      console.log (max);
    }
  }
)}


a.forEach(function(element){
  if(element <0) {
   b = [element];
   console.log(b)
  }
})

var c;
function smallestNumber(x){
  x.forEach(function(element){
    if (element < 0) {
       (element*-1);
    console.log(a);
    }
  })
}

//*************************************************************
// Create a function that calculate the sum.
//
// sum([1,2,3]) should return 6
// sum([]) should return 0
//
// Create a function that calculate the mean value.
//
// mean([1,2,3]) should return 2
//*************************************************************

var array = [40, 50, 10];
var sum = 0;
var mean;
// for loop starts at index=0 and continues until index=length.
function arraySum() {for(var index = 0; index < array.length; index++) {
  // sum = array + array[index]
  sum += array[index];
}
}
arraySum(array);
console.log(sum);

function arrayMean(x){
  mean = sum/(x.length);
}
arrayMean(array);
console.log(mean);


//*************************************************************
// Create a function that finds the index of the highest number.
//
// indexHighestNumber([1,4,2]) should return 1
// indexHighestNumber([-1,-2,-4]) should return 0
//*************************************************************

var highestIndex2;
var sortedArray;
var max = 500;

function highestNumber(x){
x.forEach(function(element){
 if (element > max) {
   max = element;
    }
  })
}
highestNumber(array);



function indexHighestNumber (x) {
  highestIndex2 = x.lastIndexOf(max);
  console.log (highestIndex2);}

indexHighestNumber(array);


//*************************************************************
// Arrays of Strings
//
// Create an array with your siblings names, and an array with your parents names.
//
// Sort your siblings names in alphabetical order.
//
// Sort your parents names in reverse alphabetical order.
//
// Sort all the names in alphabetical order.
//
// Hint: Combine the arrays into a single array.
// Sort all the names in reverse alphabetical order.
//
// Create a function that determines if a given name is amongst the names.
//*************************************************************

var sibs = ["Jacqueline", "Carmen", "Tim", "Paul"];
var parentals = ["Kathleen", "Ron", "John", "Julie"];

sibs.sort();
parentals.sort().reverse();

var family = sibs.concat(parentals);
family.sort();

// **********************************************
// Create a function that determines if a given name is amongst the names.



var n;
function isFamily(x, n) {
  for (var index=0; index < x.length; index++ ){
  if(x[index] === n) {return true;}
}
return false;
}
