// 1. console.log();
// console.log('CodeWithHarry');  
// console.log(1); 
// console.log(true); 
// console.log(null); ;  
// console.log([1, 2, 3]); // array inside log
// console.log({name:"Harry", language:"JavaScript", tutorial:2}); // object inside log




// 2. console.table();
// console.table({name:"Harry", language:"JavaScript", tutorial:2});




// 3. Console.assert()
// console.assert(0>1, "Expression is false")




// 4. console.warn();
// console.warn("This is a warning");




// 5. console.clear();




// 6. Console.time() and Console.timeEnd()
// console.time();
// for (i = 0; i < 100; i++) {
//   // code
// }
// console.timeEnd();




// 7. Console.error();
// console.error("This is a simple error");




// 8. Console.count()
// for (i = 0; i<4; i++) {
//     console.count(i);
//   }




// 9. Console.group() and Console.groupEnd()
// console.group('simple'); 
// console.log('Grouped'); 
// console.groupEnd('simple'); 
// console.log('new section');




// 10. Custom Console logs
// const spacing = '8px'; 
// const mystyle =  
// `padding: ${spacing}; background-color: white; color: blue ; font-style:
// italic; border: 1px solid black dotted; font-size: 2em;`; 
// console.log('%cCode With Harry', mystyle);




// 11.
// console.time('Your code Took');
// console.log('Hello console');
// console.log(4+34);
// console.log(34);
// console.log(true);
// console.log([34,2,1,2]);
// console.log({harry: 'this', marks:34});
// console.table({harry: 'this', marks:34});
// console.warn('This is a warning');
// // console.clear();
// console.timeEnd('Your code Took');
// // console.assert(566<189, 'Age >189 is not possible')
// // console.error('This is an error')

// /*
// this
// is a
// multiline comment
// */




// 12.
// var age = 25; // Number
// var name = "John"; // String
// var developer = true;// Boolean
// var location = null; // Null
// var task; // undefined




// 13.
// let age = 25; // Number
// let name = "John"; // String
// let developer = true;// Boolean
// let location = null; // Null
// let task; // undefined
// let age= 50;
// console.log(age); // SyntaxError: identifier "age" has already been declared.




// 14.
// const age = 20; 
// const job = 'developer';
// const name; // SyntaxError: missing initializer
// const num = 10;
// num = 20; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property




// 15.
// console.log('tut3');
// // Variables in js
// // var, let, const
// var name = 'harry';
// var channel;
// var marks = 3454;
// marks = 0;
// channel = 'CodeWithHarry'
// console.log(name, channel, marks);
// // Rules for creating JavaScript Variables
// /*
// 1. Cannot start with numbers
// 2. Can start with letter, numbers, _ or $
// 3. Are case sensitive
// */
// var city = 'Delhi';
// console.log(city);

// const ownersName = 'Hari Ram';
// // ownersName = 'Harry'; // Cannot do this (error)
// console.log(ownersName);
// const fruit = 'Orange';

// {
//  let city = 'Rampur';   
//  city = 'Kolkata';
//  console.log(city);
// }
// console.log(city);


// const arr1 = [12,23,12,53, 3];
// // arr1.push(45);
// console.log(arr1)

// /* Most common programming case types:

// 1. camelCase  
// 2. kebab-case
// 3. snake_case 
// 4. PascalCase 

// */




// 16. data types
// // Primitive data types

// // String
// let name = "harry";
// console.log("My string is " + name);
// console.log("Data type is " + (typeof name));

// // Numbers
// let marks = 34.4;
// console.log("Data type is " + (typeof marks));

// // Boolean
// let isDriver = true;
// console.log("Data type is " + (typeof isDriver));

// // Null
// let nullVar = null;
// console.log("Data type is " + (typeof nullVar));

// // Undefined
// let undef = undefined;
// console.log("Data type is " + (typeof undef));

// // Reference Data Types

// // Arrays
// let myarr = [1, 2, 3, 4, false, "string"];
// console.log("Data type is " + (typeof myarr));

// // Object Literals
// let stMarks = {
//     harry: 89,
//     Shubham: 36,
//     Rohan: 34
// }
// console.log( typeof stMarks);

// function findName() {
    
// }
// console.log( typeof findName);

// let date = new Date();
// console.log( typeof date);




// 17. Type conversion 

// console.log('Welcome to tut5');
// let myVar;
// myVar = String(34);
// // console.log(myVar, (typeof myVar));
// let booleanVar = String(true);
// // console.log(booleanVar, (typeof booleanVar));

// let date = String(new Date());
// // console.log(date, (typeof date));

// let arr =  String([1,2,3,4,5]);
// // console.log(arr.length, (typeof arr));

// let i = 75;
// // console.log(i.toString())

// let stri = Number("3434");
// stri = Number("343d4");
// stri = Number(false);
// stri = Number([1,2,3,4,5,6,7,8,9]);
// // console.log(stri, (typeof stri));

// let number = parseFloat('34.098');


// console.log(number.toFixed(2), (typeof number));

// // Type coercion

// let mystr = Number("698");
// let mynum = 34;

// console.log(mystr + mynum);




// 18. charAt(c)
// var myString = 'JavaScript!!!';
// console.log(myString.charAt(7));
// //output: i



// 19. concat(p1, p2)
// var str1="JavaScript"
// var str2=str1.concat(" is","awesome")
// console.log(str2);
// //Output: JavaScript is awesome



// 20.indexOf(substr, [start_from])
// //indexOf(char/substring)
// var str1="Hi, my name is Sam!";
// var str2 = str1.indexOf("locate");
// //Output: -1



// 21. lastIndexOf(substr, [start_from])
// var myString = 'javascript Node.js';
// console.log(myString.lastIndexOf('N'));
// //output: 11



// 22. slice(start, [end])
// var text="programming"
// var mystr= text.slice(0,4)
// console.log(mystr)
// //Output:- "prog"



// 23. split(delimiter, limit)
// var txt = "a,b,c,d,e";   // String
// txt.split(",");          // Split on commas
// txt.split(" ");          // Split on spaces



// 24. substring(from, [to])
// var myString = 'javascript Programming';
// myString = myString.substring(0,10);
// console.log(myString)
// //output: javascript



// 25. toLowerCase()
// var myString = 'JAVASCRIPT';
// myString = myString.toLowerCase();
// console.log(myString)
// //output: javascript



// 26. toUpperCase()
// var myString = 'javascript';
// myString = myString.toUpperCase();
// console.log(myString)
// //output: JAVASCRIPT



// 27. search(“str”)
// var str = "Welcome to programming World!!";
// var pos = str.search("programming");



// 28. substr() Method
// var str = "Apple, Banana, Kiwi";
// var res = str.substr(7, 6);
// // Output: Banana




// 29. template literals
// let simple = `This is an example of
//                      Template literal`;




// 30. 
// let firstName = 'Code With',
// lastName = 'Harry';         
// let greeting = `Welcome to ${firstName} ${lastName}`;
// console.log(greeting);
// //Welcome to Code With Harry
                     


// 31. strings

// console.log('We are at tut 6');
// const name = 'Harry';
// const greeting = 'Good Morning';
// // console.log(greeting + ' ' + name);

// let html;
// html  = "<h1> this is heading</h1>"+
//         "<p> this is My para</p>";

// html = html.concat('this', ' str2');
// console.log(html);
// // console.log(html.length);
// // console.log(html.toLowerCase());
// // console.log(html.toUpperCase());
// // console.log(html);


// // console.log(html[1]);
// // console.log(html.indexOf('<'));
// // console.log(html.lastIndexOf('<'));
// // console.log(html.charAt(3));
// // console.log(html.endsWith('dsfsdfd'));
// // console.log(html.includes(' fg'));
// // console.log(html.substring(1,6));
// // console.log(html.slice(0, 4))
// // console.log(html.split('>'));
// // console.log(html.replace('this', 'it'));

// let fruit1 = 'Orange\'';
// let fruit2 = 'Apple';
// let myHtml = `Hello ${name}
//             <h1> This is "my" heading </h1>
//             <p> You like ${fruit1} and ${fruit2}`;

// document.body.innerHTML = myHtml;            


     


// 32. Arrays and objects

// console.log('We are in tut7.js and lets discuss about arrays');
// let marks = [34, 23, 24, 93 ,73, 25];
// const fruits = ['Orange', 'Apple', 'Pineapple'];
// const mixed = ['str', 89, [3, 5]];

// const arr = new Array(23,123,21, 'Orange');
// // console.log(marks);
// // console.log(mixed);
// // console.log(fruits[1]);

// // console.log(arr.length);
// // console.log(Array.isArray('dfdf'));
// arr[0] = 'harry';
// let arrelement = arr[0];
// // console.log('element :', arrelement);
// // console.log(arr);

// let value = marks.indexOf(73);
// // console.log(value)

// // Mutating or Modifying arrays
// // marks.push(3564);
// // marks.unshift(1009);
// // marks.pop()
// // marks.shift()
// // marks.splice(2, 3);
// // marks.reverse()
// let marks2 = [1, 2,3, 7]
// marks = marks.concat(marks2);
// // console.log(marks);

// let myobj = {
//     'first name': 'harry', 
//     channel: 'CodeWithHarry',
//     isActive: true,
//     marks: [1,5,3,6]
// }

// console.log(myobj)
// console.log(myobj['channel'])
// console.log(myobj.channel)



// 33. If else condition and switch cases

// console.log('This is tutorial 8');
// const age = 128;
// const doesDrive = false;
// // const vari = 34;

// // if (age!=19){
// //     console.log('Age is not 19')
// // }

// // if(age !== 65){
// //     console.log('Age is not 65')
// // }

// // else{
// //     console.log('Age is not 19')
// // }

// // if (typeof vari !== 'undefined'){
// //     console.log('Vari is defined');
// // }

// // else{
// //     console.log('Vari is not defined');
// // }

// // if (doesDrive || age>18){
// //     console.log("You can drive");
// // }
// // else{
// //     console.log("You cannot drive");
// // }

// // console.log(age==45? 'Age is 45': 'Age is not 45');

// switch (age) {
//     case 18:
//         console.log("You are 18");
//         break;

//     case 28:
//         console.log("You are 28");
//         break;

//     case 38:
//         console.log("You are 38");
//         break;

//     default:
//         console.log("You are unknown age");
//         break;
// }   




// 34. for,while and do-while loop

// console.log("We are at tutorial 9");
// // console.log(1)
// // console.log(2)
// // console.log(3)

// // General Loops: for, while, do-while
// // let a =34;
// // a +=1;
// // a++;
// // console.log(a);
// // for(let i=0; i<100;i++){
// //     console.log(i);
// // }

// // let j = 110;
// // while (j < 10) {
// //   console.log(j + 1);
// //   j += 1;
// // }

// // let k = 0;
// // do {
// //     if(k===5){
// //         k +=1;
// //         continue;
// //     }
// //   console.log(k + 1);
// //   k +=1;
// // } while (k < 10);

// let arr = [2,5,6,4,2,3];

// // for (let i = 0; i < arr.length; i++) {
// //     const element = arr[i];
// //     console.log(element)
// // }

// arr.forEach(function(element, index, array){
//     console.log(element, index, array);
// });

// // let obj = {
// //     name: "Rohan Das",
// //     age: 78,
// //     type: "Dangerous Programmer",
// //     os: "Ubuntu"
// // }
// // for(let key in obj){
// //     console.log(`The ${key} of object is ${obj[key]}`)
// // }

// console.log('done');         





// 35. functions

// console.log('this is tut 10');

// if(1){
//     let i =234;
//     console.log(i)
// }

// console.log(i);

// function ui(name)
// {
//     let i = 9;
//     console.log(i);
//     return `This is a ${name} ui`;
// }

// console.log(ui("harry"), i)
// // const mygreet = function(name, thank='Thank You'){
// //     let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
// //     return msg;

// // }


// // let name = 'SkillF';
// // let name2 ='Rohan';

// // let val = mygreet(name, 'Thanks a lot');
// // console.log(val);


// // const myobj = {
// //     name: "SkillF",
// //     game: function(){
// //         return "GTA";
// //     }
// // }
// // console.log(myobj.game())

// // arr = ['fruit', 'vegetable', 'furniture'];

// // arr.forEach(function(element, index, array) {
// //     console.log(element, index)
// // });   
