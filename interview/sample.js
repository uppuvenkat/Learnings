// function isAncestor(node1, node2) {
//     let result = node1.isChild(node2)
//     return result;
// }

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }

// getDetails(x){
//     console.log(x.name, x.age)
// }
// }

// let myPerson = new Person('Venkat', '30' )
// myPerson.getDetails(myPerson)

// function Outer(){
//     let a = 10;
//     function innerFn(){
//         return a+=1
//     }
//     return innerFn;
// }
// let callInner = Outer();
// console.log(callInner());
// console.log(callInner());
// console.log(callInner());

// function person(name, addr){
//     this.name = name;
//     this.addr = addr;
// }

// var venkat = new person('venkat', 'nellore')
// let ob = {a:1, b:2}
// console.log(venkat.name, ob);

// Object.prototype.a = 5;
// let v = {};
// var c = {}
// console.log(c.b); //5

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


// Factorial

// const fact = (n) =>{
//     if(n==1){
//         return 1
//     }else{
//         return n*fact(n-1)
//     }
// }

// console.log(fact(5));

//0 1 1 2 3 5 8 13 ...

// const fibNocci = (n) =>{
//     let arr = [0,1]
//     for(let i=0; i<n-2; i++){
//         let el = arr[arr.length-2] + arr[arr.length-1]
//         arr.push(el)
//     }
//     return arr
// }

// let sries = fibNocci(6)
// console.log(sries.join());

const fibNocci = (n1, n2, n) =>{
    let str = ''
    if(n==1){
        return '';
    }else{
        let r = n1 + n2
        str = str + r + ' '
        n1 = n2;
        n2 = r
        return str + fibNocci(n1, n2, n-1)
    }
}


console.log(0 + ' ' +1 +" "+ fibNocci(0, 1, 8-1));