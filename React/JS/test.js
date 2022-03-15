// let arr = [3, 7, 2, 4, 0, 7, 3, 9, 1]
// let max = 0;
// let secMax = 0;
// let obj = {}
// // for (let i = 0; i < arr.length - 1; i++) {
// //     if (max < arr[i]) {
// //         max = arr[i]
// //         secMax = max
// //     }
// //     if(secMax<arr[i] && arr[i] != max){
// //         secMax = arr[i]
// //     }

// // }
// // for (let i = 0; i < arr.length - 1; i++) {
// //     if(secMax<arr[i] && arr[i] != max){
// //         secMax = arr[i]
// //     }
// // }
// // console.log(max, secMax)
// for (let i = 0; i < arr.length - 1; i++) {
//     obj[i] = arr[i]
// }
// console.log(Object.keys(obj))

let colors = ['blue', 'black']
let data = [{ name: 'test1'}, { name: 'test2', addedColors: ['blue', 'green', 'yellow'] }, { name: 'test3', addedColors: ['black', 'blue'] }, { name: 'test4', addedColors: ['blue', 'black'] }]

let filData = data.filter(item => {
    if(item.addedColors){
    return (item.addedColors.length == colors.length) && colors.sort().every(function (element, index) {
        return element === item.addedColors.sort()[index];
    })}}
)

console.log(filData)