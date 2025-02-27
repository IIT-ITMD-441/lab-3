//Excersise 1
function minMaxAverage (arr) {
   arrayLength = arr.length;
   min = Math.min(...arr);
   max = Math.max(...arr);
   avg = arr.reduce((sum, num) => sum + num, 0)  / arr.length;

   return "Total Numbers: ", arrayLength, "Min Value: ", min, "Max Value: ", max, "Average: ", avg;
} 

console.log(minMaxAverage ([2,5,23,6,9,4,30,1]));
console.log(minMaxAverage ([1111,5,27,6,229,4,30,1]));
console.log(minMaxAverage ([3,2,1]));

//Exercise 2
function countVowels (str) {
   count = 0;
   for (i = 0; i < str.length; i++)
   {
      if (str.charAt(i) == str.match("a") || str.charAt(i) == str.match("e") || str.charAt(i) == str.match("i") || str.charAt(i) == str.match("o") || str.charAt(i) == str.match("u")){
         count += 1;
      }
   }
   return str + ": " + count + " vowels"
}

console.log(countVowels("Winter"));
console.log(countVowels("aeiou"));
console.log(countVowels("Supercalifragilisticexpialidocious"));

//Exercise 3
function sortNumbers (arr) {
   let arr2 = arr.slice().sort((a,b) => a - b);
   //slice() creates a copy first
   //the sort() function sorts values as strings. This can be fixed by using a compare function.

   return "Original Array: " + arr + " output Sorted Array: " + arr2
}

console.log (sortNumbers ([9, 4, 6, 2]));
console.log (sortNumbers ([55, 23, 5, 3]));
console.log (sortNumbers ([5, 4, 3, 2, 1]));

//Exercise 4
function celsiusToFahrenheit (C) {
   let F = (C * 9/5) + 32;
   return C.toFixed(1) + " Celsius = " + F.toFixed(1) + " Fahrenheit" ;
}

console.log (celsiusToFahrenheit(30))
console.log (celsiusToFahrenheit(0))
console.log (celsiusToFahrenheit(100))