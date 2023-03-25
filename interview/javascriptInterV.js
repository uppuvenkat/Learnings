//1. ######################### var let const
// var a = 10;
// var a = 20;
// console.log(a)
//a.functional scope
//b.redeclared and reassigned

// let a = 10;
// a = 20;
// console.log(a);
//a.block scope
//b.cant redeclared and can be reassigned

// const a = 10;
// a = 10;  
// console.log(a)
//  const ob = {name:'venkat', addr:'nellore'}
//  ob.name = 'ram';
//  ob['age'] = 11;
// console.log(ob)
//a.block scope
//b.cant redeclared and reassigned

//3. ######################### Template literals and interpolation
//Template literals
//   var str = "beng is 'cool' climate\n"+"beng is 'cool' climate\n"
//   var str1 = `  beng is "cool" climate beng is "cool" climate
//   beng is "cool" climate
//   `
// console.log(str1)
//a.earlier strings can be multilined using \n and double and single quotes
//b.in es6 backticks just gives like that
//String interpolation
// var cityName = 'bengaluru';
// console.log(cityName + " is cool city")
// console.log(`${cityName} is cool city`)
//in normal cityName is concatenated
//in interpolation cityName wrote in backtiks

//4, 5. ################################################### Class and new ClassIdentifier(), public,static and constructor methods in Classes.

//normal getDetails method  
// class Car{
//     constructor(name){
//         this.name = name
//     }
//    getDetails(x){
//          console.log(`${x.name} is red color`)
//      }
// }
// var myCar = new Car('ford')
// myCar.getDetails(myCar);

//static getDetails method

// class Car{
//     constructor(name){
//         this.name = name
//     }
//    static getDetails(x){
//          console.log(`${x.name} is red color`)
//      }
// }
// var myCar = new Car('ford')
// Car.getDetails(myCar);

//inheritance

// class CarFeatures{
//     constructor(name, color){
//         this.name = name;
//         this.color = color;
//     }
//     Details(){
//         console.log(`${this.name} is ${this.color} color`)
//     }
// }
//  class ExtraFeatures extends CarFeatures{
//      constructor(name, color, model){
//          super(name, color)
//          this.model = model
//      }
//      AllDetails(){
//          console.log(`${this.name} is ${this.color} color ${this.model} model`)
//      }
//  }
//  var myCar = new ExtraFeatures('Ford', 'Blue', 'abs')
//  var myCars = new CarFeatures('ford')
//  myCars.Details();

//getters and setters;

// class Car{
//     constructor(name, color){
//         this.name = name;
//         this.color = color;
//     }
//     get carName(){
//         return this.name;
//     }
//     set carName(name){
//         this.name = name
//     }
// }
// var myCar = new Car('Ford', 'red')
// myCar.carName = 'innova'
// console.log( myCar.carName)

//6. ######################### private method in Javascript using Closure as it's not built in Javascript.

// function outer(){
//     var a = 10;
//      function inner(){
//         return a+=1;
//     }
//     return inner;
// }
// var callInner = outer();
// console.log(callInner())
// console.log(callInner())
//a.function inside another fn
//b.lexixal scope
//c.calling outer fn referenced variable

//7,8. ################# Inheritance in Javascript, Prototypical Inheritance and prototype chaining. 

// function person(name, addr){
//     this.name = name;
//     this.addr = addr;
// }

// var venkat = new person('venkat', 'nellore')
// person.prototype.Details = function () {
//     return this.name;
// }
// var ram = new person('ram', 'bang')
// console.log(ram.Details())

// Object.prototype.a = 5;
// let v = {};
// var c = {}
// console.log(c.a); //5

// function Fn() {}
// var obj = new Fn();
// console.log(obj.__proto__ === Fn.prototype);// -> true
// console.log(obj.__proto__.__proto__=== Object.prototype);// -> true
// console.log(obj.__proto__.__proto__.__proto__ === null);// -> true

//a.The __proto__ of an object created by calling a function with new is equal to the prototype of that function
//b.The __proto__ of a function’s prototype is equal to Object.prototype
//c.The __proto__ of Object.prototype is null



// function isInteger(x) {
//     console.log(x^0)
//      return (x ^ 0) === x; } 

// isInteger('jh');

// function Palind(str) {
//     let arr = []
//     let strrev = '';
//     for(let i=0; i<str.length; i++){
//         arr.push(str.charAt(str.length-i-1))
//     }
//    strrev =  arr.join('')
// if(str == strrev){
//     console.log('true')
// }else{   
//     console.log('false')
// }
// console.log(str.toLowerCase())
// }
// Palind('maDam')
// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');

// arr2.push(arr3);
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


// console.log(1 +  "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);

// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);

//10.Callbacks and Asynchronous programming.  JS is single thread and synchronous. Using Callbacks to communicate with User events like on click,onSubmit etc. 
//12. What are Promises, resolve and reject promises and error handling. We need to catch error. Callback hell problem.
//Callbacks

// https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
//case:1
// function doWork(params, callback) {
//     console.log(`${params} is initial normal function`)
//     callback()
// }

// doWork('first', function() {
//     console.log('callback functoin..')
// })
//case:2
// function doWork(params, callback) {
//     console.log(`${params} is initial normal function`)
//     callback()
// }

// function secFn() {
//     console.log('callback functoin..')
// }
// doWork('first', secFn)

//case:3
// var clientData = {
//     id: 094545,
//     fullName: "Not Set",
//     setUserName: function (firstName, lastName)  {
//       this.fullName = firstName + " " + lastName;
//     }
// }
// function getUserInput(firstName, lastName, callback)  {
//     callback (firstName, lastName);
// }
// getUserInput ("Barack", "Obama", clientData.setUserName);
// console.log (clientData.fullName);// Not Set

//real world example
// T.get('search/tweets', params, function(err, data, response) {
//     if(!err){
//       // This is where the magic will happen
//     } else {
//       console.log(err);
//     }
//   })

//callbackHell

// request('http://www.somepage.com', function (firstError, firstResponse, firstBody) {
//     if(firstError){
//         // Handle error.
//     }
//     else {
//         request(`http://www.somepage.com/${firstBody.someValue}`, function (secondError, secondResponse, secondBody) {
//             if(secondError){
//                 // Handle error.
//             }
//             else {
//                 // Use secondBody for something
//             }
//         });
//     }
// });

//promises
// const axios = require(‘axios’);
// axios.get(‘http://www.somepage.com')
// .then(function (response) { // Reponse being the result of the first request
//     // Returns another promise to the next .then(..) in the chain
//     return axios.get(`http://www.somepage.com/${response.someValue}`);
// })
// .then(function response { // Reponse being the result of the second request
//     // Handle response
// })
// .catch(function (error) {
//     // Handle error.
// });

// var prom = new Promise(function(resolve, reject) {
//     if(true){
//         resolve('venkat')
//     }else{
//         reject('error happened')
//     }
// })

// prom.then(function(result) {
//     console.log(result)
// })
// .catch(function(error) {
//     console.log(error)
// })

//async and await
// async function getSomeAsyncData(value){
//     const result = await fetchTheData(someUrl, value);
//     return result;
// }

// let cleanRoom = function() {
//     return new Promise(function(resolve, reject) {
//       resolve('Cleaned The Room');
//     });
//   };

//   let removeGarbage = function(message) {
//     return new Promise(function(resolve, reject) {
//       resolve(message + ' remove Garbage');
//     });
//   };

//   let winIcecream = function(message) {
//     return new Promise(function(resolve, reject) {
//       resolve( message + ' won Icecream');
//     });
//   };

//   cleanRoom().then(function(result){
//       return removeGarbage(result);
//   }).then(function(result){
//       return winIcecream(result);
//   }).then(function(result){
//       console.log('finished ' + result);
//   })

//  function asyncFn() {
//     return new Promise(function(resolve, reject) {
//         resolve('resolved...')
//     })
// }

// var prom = new Promise(function(resolve, reject) {
//     resolve('resolved venkat')
// })
// console.log('display1')

// async function callAsyncFn(){
//     console.log('qqqqqqqqqqqqqq')

//     var data1 = await asyncFn().then(function (params) {
//         // console.log(params)
//         return params;
//     })
//     console.log(data1)
// }
// callAsyncFn();

// var data = prom.then(function(params) {
//     // console.log(params)
//     return params;
// })
// // console.log('data', data)


// console.log('display2')

// var prom = new Promise(function(resolve,resject) {
//     resolve('hi it is resolved');
// })

// function A() {
//     console.log('A1');
//     console.log('A2');
//     B();
//     console.log('A3');
//     console.log('A4');
// }
// function B() {
//     console.log('B1');
//     console.log('B2')
//     C();
//     console.log('B3');
//     console.log('B4');
// }
// function C() {
//     console.log('C1');
//     console.log('C2');
//     D();
//     console.log('C3');
//     console.log('C4');
// }
//  async function D() {
//     console.log('D1');
//     console.log('D2');
//    var data = await prom.then(function(params) {
//                 C()
//     })
// }

// A();

// var arr = [2,3,4,5,6,3,4,2,1]
// let newArr = [];
// for(let i=0;i<arr.length;i++){
//     if(newArr.indexOf(arr[i]) == -1){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

// function  BullShit() {
//     var data = [{ country: 'India', state: 'AP', dist: 'nellore' },
// { country: 'India', state: 'AP', dist: 'kadapa' },
// { country: 'India', state: 'AP', dist: 'chittoor' },
// { country: 'India', state: 'Karnataka', dist: 'banglore' },
// { country: 'India', state: 'Karnataka', dist: 'mulbagal' },
// { country: 'US', state: 'State1', dist: 'dist1' },
// { country: 'US', state: 'State1', dist: 'dist2' },
// { country: 'US', state: 'State2', dist: 'dist3' },
// { country: 'US', state: 'State2', dist: 'dist4' }]

// var findata = {
//                 india:[
//                     {AP:[ 
//                         {Nellore:['md1', 'md2', 'md3']},
//                         {Chittor:['md1', 'md2', 'md3']} 
//                      ]}, 
//                     {Kar:[ 
//                         {Nellore:['md1', 'md2', 'md3']},
//                          {Chittor:['md1', 'md2', 'md3']}
//                         ]}
//                     ],

//                 US:[{AP:['Nellore', 'chittor']}, {Kar:['dist1', 'dist2']} ]
        
//             }

// var countryObj = {}
// var stateObj = {}
// var obj = {}
// var objfin = {}

// for (let i = 0; i < data.length; i++) {
//     if (countryObj[data[i]['country']] = -1) {
//         countryObj[data[i]['country']] = 1
//     }
// }
// for (let i = 0; i < data.length; i++) {
//     if (stateObj[data[i]['state']] = -1) {
//         stateObj[data[i]['state']] = 1
//     }
// }
// let countries = Object.keys(countryObj);
// let states = Object.keys(stateObj);
// console.log(countries)
// console.log(states)

// countries.map((e, id) => {
//     let ct = data.filter(function (el, id) {
//         return el.country == e
//     })
//     //    let a =  {[el.state]: ct}
//     obj[e] = ct
//     // console.log(obj[e])
//     // console.log('sssssssssssssss')

//     states.map((z, id) => {
//         let fin = obj[e].filter((x, y) => {
//             return x.state == z;
//         })
//         // {[z]:fin}
//         if (indexOf(objfin[e]) == -1) {
//             objfin[e] = [{ [z]: fin }]
//         console.log('eeeeeeeeeeee')

//         }else{
//             // objfin[e].push({ [z]: fin })
//         }
//         // console.log({[z]:fin})
//     })
// })
// console.log(objfin)
// }


//9. ######################### || and && operators

// console.log(1 || 2) // returns 1 -- checks for first value, if valid returns first itself otherwise second
// console.log(1 && 2) // returns 2 -- checks for first value, if valid returns second

//.10 ############ Spread and Rest operators
// Spread - pulling out form existing arr and spreadding in to new array
// let arr = [1,2,3,4]
// let copArr = arr.splice() // copying the existing arr
// let newArr = [...arr] // new array

//rest
// const toArr = (...args)=>{
//     return args
// }
// toArr(1,2,3,4)

//11. object destructuring
// let obj = {name:"venkat", age:30, addr:"nellore"}
// let {name, age} = obj

// let arr = ["venkat", "ramana"]
// let [venkat,x] = arr

//####### callbacks and promises
// callback
// const fetchData = callback =>{
//     setTimeout(()=>{
//         callback('Done')
//     }, 2000)
// }

// setTimeout(()=>{
//     console.log("Timer is DOne")
//     fetchData((text)=>{
//         console.log(text)
//     })

// }, 2000)

// Promises
// const fetchData = callback =>{
//    const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//        resolve('Done !')
//     }, 2000)
//    })
// }

// setTimeout(()=>{
//     console.log("Timer is DOne")
//     fetchData().then(text=> {
//         console.log(text);
//         return fetchData();
//     })
//     .then(text2=> {
//         console.log(text2);
//     })

// }, 2000)

// ########## this key word in normal and arrow function

// ### Normal Function - this keyword here refers to current context/object
// let obj = {
//     name: 'venkat',
//     age:20,
//     addr:'bellore',
//     getDetails: function(){
//         console.log(`Name : ${this.name} \nAge: ${this.age} \nAddr: ${this.addr}`)
//     }
// }

//#### Arrow Function - this keyword in arrow function refers to the global object
// let obj = {
//     name: 'venkat',
//     age:20,
//     addr:'bellore',
//     getDetails: () => {
//         console.log(`Name : ${this.name} \nAge: ${this.age} \nAddr: ${this.addr}`)
//     }
// }

// obj.getDetails()

//########## primitives and non primitives
//primitives - has no methods
//eg.: string, number, boolean..etc
//Non primitives - representation of collection of data
//eg.: Array, object

//########## Hoisting
//########### == and === difference
// let x = 2;
// let y = '2';
// console.log(x==y); // true - will not check type
// console.log(x===y); // false - will check type

// ######## Implicit Type Coercion in javascript.
//Implicit type coercion in javascript is the automatic conversion of value from one data type to another.

//###### runtime vs compile time
// Compile-time and Runtime are the two programming terms used in the software development. 
// Compile-time is the time at which the source code is converted into an executable code while the run time is the time at which the executable code is started running.

//########## Is javascript a statically typed or a dynamically typed language?
// JavaScript is a dynamically typed language. In a dynamically typed language, 
// the type of a variable is checked during run-time in contrast to a statically typed language, 
// where the type of a variable is checked during compile-time.

//######## NaN property
// isNaN("Hello")  // Returns true
// isNaN(345)   // Returns false
// isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
// isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
// isNaN(false) // Returns false
// isNaN(undefined) // Returns true


//########### passed by value and passed by reference.
//Pass by value
// var y = 234;
// var z = y;
// var y = #8454; // y pointing to address of the value 234
// var z = y; 
// var z = #5411; // z pointing to a completely new address of the value 234
// // Changing the value of y
// y = 23;
// console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z

//Pass by reference
// var obj = { name: "Vivek", surname: "Bisht" };
// var obj2 = obj;
// var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
// var obj2 = obj;
// var obj2 = #8711; // obj2 pointing to the same address 
// // changing the value of obj1
// obj1.name = "Akki";
// console.log(obj2)

//######### strict mode
// Characteristics of strict mode in javascript
// Duplicate arguments are not allowed by developers.
// In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.
// The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.
// Engineers will not be allowed to create global variables in 'Strict Mode
// #######. Explain “this” keyword.
// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this.name);
//   }
     
// }
       
// var getName = obj.getName;
       
// var obj2 = {name:"akshay", getName };
// obj2.getName();

// een,
// odd, 
//prime,
// duplicate removal in arr, 
//palindrome
//string reverse
//pyramid shape
//factorial w/o for loop

//########### call(), apply() and, bind() 
//call
// case;1
// function sayHello(){
//     return "Hello " + this.name;
//   }
//   var obj = {name: "Sandy"};
//   sayHello.call(obj); // Returns "Hello Sandy"
//   //case:2
//   var person = {
//     age: 23,
//     getAge: function(){
//       return this.age;
//     }
//   }        
//   var person2 = {age:  54};
//   person.getAge.call(person2);  // Returns 54 
// //   case:3
// function saySomething(message){
//     return this.name + " is " + message;
//   }     
//   var person4 = {name:  "John"};     
//   saySomething.call(person4, "awesome"); // Returns "John is awesome"    
//Apply
// function saySomething(...message){
//     console.log(message)
//     return this.name + " is " + message[1];
//   }        
//   var person4 = {name:  "John"};
//   let d = saySomething.apply(person4, ["awesome", "venkat"]);
// console.log(d);
// bind
// var bikeDetails = {
//     displayDetails: function(registrationNumber,brandName){
//     return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
//   }
// }
// var person1 = {name:  "Vivek"};
// var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
// // Binds the displayDetails function to the person1 object
//       console.log(detailsOfPerson1());

// var foo = function* () {
//     yield 'A'; // this yield pushes 'A' and returns 'a'
//     yield 'B'; // this yield pushes 'B' and returns 'b'
//   };
  
//   var f = foo();
  
//   console.log(f.next()); // { value: 'A', done: false }
//   console.log(f.next('a'));                 // { value: 'B', done: false }
//   console.log(f.next('b'));                 // { value: undefined, done: true }
  
//   // any further call just returns whatever the last returned value was
//   console.log(f.next()); // { value: undefined, done: true }
// let newSet = new Set([1,2,3,4])
// console.log(newSet.keys())

// const map1 = new Map();
// map1.set('Value', 1);
// map1.set('dd',21);

// const map2 = new WeakMap();
// map2.set('Value', 2.3); // Throws an error

// let obj = {name:"Vivek"};
// const map3 = new WeakMap();
// map3.set(obj, {age:23})

// console.log(map1.get('dd'));

//  function a(){
//     console.log('aa:',this);
  
//     const b = {
//       func1: function(){
//         console.log('bbb:',this);
//       }  
//     }
  
//     const c = {
//       func2: ()=>{
//         console.log('ccc:',this);
//       }
//     }
  
//     b.func1();
//     c.func2();
//   }
  
// //   a();
// (function(a){
//      function aa(){
//       console.log(a);
//       var a = 23;
//     }
//      aa()
//   })(45);

// function p (x){
//     // function c (){
//         console.log(x)
//         var x = 10
//     // }
//     // return c()
// }

// p('1')

// function bigFunc(element){
//     let newArray = new Array(2).fill('♥');
//     console.log(newArray);
//     return newArray[element];
//   }
  
//   console.log(bigFunc(599)); // Array is created
//   console.log(bigFunc(670));

// var firstWord = "secure";
// var secondWord = "rescue";

// let dd = isAnagram(firstWord, secondWord); // true
// console.log(dd);
// function isAnagram(one, two) {
//   //Change both words to lowercase for case insensitivity..
//   var a = one.toLowerCase();
//   var b = two.toLowerCase();

//   // Sort the strings, then combine the array to a string. Examine the outcomes.
//   a = a.split("").sort().join("");
//   b = b.split("").sort().join("");

//   return a === b;
// }
// 62. 
//a, e, i, o, u
// let str = "venkataramanaiah"
// let vow = ['a', 'e', 'i', 'o', 'u']
// let strArr = str.split('')
// let cv = []
// console.log(strArr);
// for(let i in strArr){
//     if(vow.indexOf(strArr[i]) !== -1){
//         cv.push(strArr[i])
//     }
// }
// let co = strArr.filter(e =>{
//     if(cv.indexOf(e) == -1){
//         return e
//     }
// })
// console.log(new Set(cv),co);
// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };   
// console.log(Object.values(obj));

//   let arr = [
//       {event: "ramDelivered", count:2},
//       {event: "ramFailed", count:4},
//       {event: "VenkatDelivered", count:7},
//       {event: "VenkatFailed", count:9},
//       {event: "rakeDelivered", count:6},
//       {event: "rakeFailed", count:5},
//   ]

// let arr = ["1", "Test User", "25", "Developer"];
// let arr1 = [
//   ["id", "1"],
//   ["name", "Test User"],
//   ["age", "25"],
//   ["profession", "Developer"],
// ];
//console.log(Object.assign({}, arr));
// console.log(Object.fromEntries(arr1));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
//[["id", "1"],["name", "Test User"],["age", "25"],["profession", "Developer"]]


// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof NULL);
// console.log(typeof typeof 1);   

// const number = undefined + 11;
// if (number === NaN) {
//   document.write("NaN");
// } else if (number === 11) {
//   document.write("11");
// } else {
//   document.write("other");
// }

// eventloop, javascript single threaded synchronous, asynchronous
//https://medium.com/swlh/what-does-it-mean-by-javascript-is-single-threaded-language-f4130645d8a9
//https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/


//react router
