// function RemoveElement(arr, val) {
//     let newArr = arr.filter((el,id)=>{
//         return val != el;
//     }) 
//     console.log(newArr)
// }
// var arr = [1,2,3,4,5,1,2,3]
// RemoveElement(arr,3)

function RemoveElement(arr, val) {
    let i=0;
    while(i<arr.length) {
        if (arr[i] == val) {
            arr.splice(i, 1)
            continue
        }
        i++
    }

    console.log(arr)
}
var arr = [3, 2, 2, 3]
RemoveElement(arr, 3)
