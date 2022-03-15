
// function filterData(f) {
//     let ob = {}, arr=[]
//     data.map((e,id)=>{
//         // let fil = f
//         ob[e[f]] = e;
//     })
//     for(x in ob){
//         arr.push(ob[x])
//     }
//     console.log(arr,f)
// }
// filterData('ap')
//array rem dup
// var arr = [2,3,4,5,6,1,2,3,4]
// var newAr = []
// arr.map((e,id)=>{
//     if(newAr.indexOf(e) == -1){
//         newAr.push(e)
//     }
// })
// // console.log(newAr)
// newAr.sort()
// console.log(newAr[newAr.length-1])

//finding sec largest
// var arr = [3,2,4,5,6,8,9,5,8, 10,2,7,10]
// var newArr = [];
// arr.map((el,id)=>{
//     if(newArr.indexOf(el) == -1){
//         newArr.push(el)
//     }
// })

// console.log(newArr)
// let max = 0, secMax
// for(let i=0;i<newArr.length;i++){
//     if(max<newArr[i]){
//         secMax = max;
//         max = newArr[i];
//     }else if(newArr[i] > secMax && max != newArr[i]){
//             secMax = newArr[i]
//     }
// }
// console.log(max, secMax)

//factorial
//mtd:1
// function Fact(n) {
//     return n==1 ? 1 : n * Fact(n-1);    
// }
// console.log(Fact(5))

//mthd:2

// function Fact(n) {
//     let arr = [], fact=1;
//     for(let i=1;i<=n;i++){
//         arr.push(i)
//     }
//     console.log(arr)
//     for(let i=0;i<arr[i];i++){
//         fact = fact*arr[i]
//     }
//     console.log(fact)
// }
// Fact(5)
// console.log(Math.round(5/2))
// function  Pyramid(n) {
//     for(let i=0;i<n;i++){
//         let st = '';
//         for(let j=0;j<2*n/2-i-1;j++){
//             st = st + ' '
//         }
//         for(let k=0;k<2*(i+1)-1;k++){
//             st = st+'#'
//         }
//         console.log(st)
//     }
// }
// Pyramid(5)

//finding input is array or not

// function isArray(arr) {
//     console.log(arr.constructor.toString().split(' ')[1] == 'Array()')
//     // if(arr.)
//     if(arr.constructor().length == 0){
//         console.log('array..')
//     }
// }
// isArray(12)

// function Clone(arr, n) {
//     if(n>0) return arr.slice(-n, 1)
//     return []
// }

// console.log(Clone([1,2,[3,4]],3))


// console.log(1 && 2 && 1  || 8)

// function  myFn(params) {
//     console.log(params)
// }
// // myFn('venkat')

// const myFn1 = function(params) {
//     console.log(params)
// }
// myFn1('venkat1');

// (function(params) {
//     console.log(params)
// })('venkat2')

// function mul(a) {
//     return function(b) {
//         return function() {
//             return a*b;
//         }
//     }
// }

// console.log(mul(2)(3)())

var arr = [3, 5, 8, 7, 9, 10, 3, 5, 4]
// method:1
function dupRemove(arr) {
    // var ob = {};
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i])
        }
    }
    console.log('newArr', newArr)
    //finding 2nd largest
    
    //sorting
    for(let i=0;i<newArr.length;i++){
        for(let j=i+1;j<newArr.length;j++){
            if(newArr[i] > newArr[j]){
                temp = newArr[j];
                newArr[j] = newArr[i]
                newArr[i] = temp
            }
        }
    }
    // console.log(newArr)
}



// method:2

// function dupRemove(arr) {
//     var ob = {};
//     var newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         ob[arr[i]] = 1;
//     }

//     // console.log(Object.keys(ob))
//     for (let i = 0; i < Object.keys(ob).length; i++) {
//         newArr.push(Number(Object.keys(ob)[i]))
//         // console.log(Object.keys(ob)[i])
//     }

//     console.log(newArr)

// }


dupRemove(arr)