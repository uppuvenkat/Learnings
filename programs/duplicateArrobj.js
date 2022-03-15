var arr = [{ name: 'venkat', id: 1 },
{ name: 'ram', id: 2 },
{ name: 'rakesh', id: 3 },
{ name: 'venkat', id: 1 },
{ name: 'tomas', id: 4 },
{ name: 'pramo', id: 5 }
]

var obj = {}

for (let i = 0; i < arr.length; i++) {
    obj[arr[i].id] = arr[i]
}
var newArr = []
for (x in obj) {
    console.log(x)
    newArr.push(obj[x])
}
console.log(newArr)
