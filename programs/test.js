//number of steps to make a digit to zero

// var MaxSteps = function (num) {
//     // console.log('maxsteps of ', num)
//         let steps = 0;
//         if(num>0){
//         while(num!=0){
//             if(num%2==0){
//                 num = num/2
//                 steps++;
//             }else{
//                 num = num-1
//                 steps++;
//             }
//         }steps++
//         }else{
//             console.log('enter non negative integer')
//         }
//         console.log(steps-1)
// }
// MaxSteps(4)

// function FindAddedEl(s, t) {
//     // console.log(s[0])
//     // console.log(s.split('').sort().join(''))
//     // console.log(t.split('').sort().join(''))
//     for(let i=0;i<t.length;i++){
//         let c=0;
//         for(let j=0;j<s.length;j++){
//             if(t[i] == s[j]){
//                 c++
//             }
//         }
//         if(c==0){
//             console.log(t[i])
//         }
//     }

// }
// var s = 'adc';
// var t = 'acbd'
// FindAddedEl(s,t);


// function test(a,b){
//     return (a*b)+(a+b)
// }
// var a =1;
// var b=2;
// var c = test(a,b)
// console.log(c) 

// var ch1 = 'b'
// var ch2;
// switch(ch1){
//     case 'a': ch2 = '1'
//     case 'b': ch2 = '2'
//     case 'c': 
//     ch2 = '3' 
//     break;
//     default: ch2 = '4'
// }
// console.log(ch2)

// var Message = function(){
//     var a = ['hello welcome', this.name, 'to', this.location].join('')
//     console.log(a)
// }

// var person ={name:'Venakt',location:'guntur'};
// Message.call(person)

// console.log(null === undefined)