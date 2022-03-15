//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  Namedfns
// function myFn(){
    // console.log('kuykjkh')
// }
// myFn();

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  Anonymous fns
    
// (function(){
//     console.log('self invoking..')
// })()
// var obj = {name:'venkat', addr:'nellore'}


function myFn(){
    console.log(this.name)
    // x.name = 'raj's

}
// myFn.call(obj);
// console.log(obj)

// var add = (function () {
//     var counter = 0;
//     return function () {counter += 1; 
//         return counter}
//   })();
  
//   console.log(add());
//   console.log(add());
//   console.log(add());

// function outer(){
//     var a = 10;
//     console.log('eeeeeee')
//     function inner(){
//         a +=1;
//         return a;
//     }
//     return inner;
// }

// var callInner = outer();
// console.log(callInner())
// console.log(callInner())
// console.log(callInner())

// Outer function 
// function outer() 
// { 
// 	var arr = []; 
// 	var i; 
// 	for (let i = 0; i < 4; i++) 
// 	{ 
// 		// storing anonymus function 
// 		arr[i] = function () { return i; } 
// 	} 

// 	// returning the array. 
// 	return arr; 
// } h

// var get_arr = outer(); 

// console.log(get_arr[0]()); 
// console.log(get_arr[1]()); 
// console.log(get_arr[2]()); 
// console.log(get_arr[3]()); 


  