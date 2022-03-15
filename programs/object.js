//  var a = 1
//  var b = 'kkk'
//  var c = [1,2,3,4]
//  var d = {name:'j', age:11}
//  console.log(typeof(d))

// var arr = [1,2,3,4]

// console.log(Math.max(arr))

//#####################3333333333333333333#######setters and getters
var obj = {
    name: 'ram',
    addr: 'nellore',

    // get addr1(){
    //     return this.addr
    // },
    // set addr2(ad){
    //     this.addr  = ad;
    // }
}

// Object.defineProperty(obj, 'Reset', {get:function(){
//     return this.name
// }})

// Object.defineProperty(obj, 'Add', {set:function(age){
//      this.age = age
// }})

// obj.Add = '2';
// console.log(obj)

//##################################################constructors
// function Person(name, addr, age, id) {
//     this.name = name;
//     this.addr = addr;
//     this.age = age;
//     this.id = id;
// }

// var ram = new Person('ram', 'nellore', 26, 2)
// var venkat = new Person('venkat', 'kakutur', 26, 3)
// ram.nationality = 'indian'
// venkat.getDet = function () {
//     return this.name + ' ' + this.addr;
// }

// console.log(ram)
// console.log(venkat.getDet())

//##################################################    prototypes

// function Person(fname, lname, addr, id){
//     this.fname = fname;
//     this.lname = lname;
//     this.addr = addr;
//     this.id = id;
// }

// Person.prototype.nationality = 'indian';
// Person.prototype.personDetails = function(){
//     return this.fname+' '+ this.lname
// }


// var venkat = new Person('Venkat', 'uppu', 'nellore', 1)
// var thana = new Person('thana', 'kumar', 'chennai', 2)
// Object.defineProperty(thana, 'getAddr', {
//     get:function(){
//         return this.addr
//     }
// })
// // console.log(venkat.personDetails())
// console.log(thana.getAddr)


