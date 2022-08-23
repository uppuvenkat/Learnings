// creating a file
const app = require("fs")
app.writeFileSync("Test.doc", "hello node")

let arr = [2,3,4,56,7]
let max=arr[0]
for(let a of arr){
    // console.log(max, a)
    if(max < a){
        max=a
    }
}
console.log(max)