// // 1. Write a function called ‘isString’ that receives 2 arguments,
// // a string and a callback function. The function checks that
// // the string is indeed a string. If the string is a string, pass
// // the string to a callback function that logs that string to the
// // console.

// function isString(string, check) {
//   return check(string);
// }

// function check(str) {
//   if (typeof str === "string") {
//     return "string";
//   }
// }

// console.log(isString("Yummy", check));

// // 2. Create a function called ‘firstWordUpperCase’ that
// // receives 2 arguments, a string and a callback function.
// // The function will capitalize the first word in the sentence
// // and pass the string to a callback function which will create
// // dashes between the words.

// function firstWordUpperCase(string, join) {
//   const split_string = string.split(" ");
//   split_string[0] = split_string[0].toUpperCase();
//   join(split_string);
// }

// function join(split_string) {
//   console.log(split_string.join("-"));
// }

// // comment this before using 3.
// firstWordUpperCase("Look at me now", join);

// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.

// function theBoringFunction() {
//   firstWordUpperCase("My name is Elon", join);
// }

// // 4. Create your own function that will receive from one of its
// // arguments a callback function.
// function theReceiver(nam, func) {
//   func(nam);
// }

// function nameCapitalizer(nam) {
//   console.log(nam.toUpperCase());
// }
// theReceiver("Nikolai", nameCapitalizer);
