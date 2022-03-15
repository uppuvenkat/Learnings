//1. ######################### var let const
// var a = 10;
// var a = 20;
// console.log(a)
//a. functional scope
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
// car.getDetails(myCar);

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
