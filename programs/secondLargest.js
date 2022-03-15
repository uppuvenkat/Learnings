let arr = [3,2,4,5,9,7,9,1]
let max1 = 0;
let max2 = 0;

for(let i=0;i<arr.length;i++){
        if(max1<arr[i]){
            max2 = max1;
            max1 = arr[i];
        }else if(arr[i]>max2 && arr[i] != max1){
            max2 = arr[i];
        }
}
console.log(max1, max2);
