
function Fact(n){
    if(n==1){
        return 1;
    }else{
        return n*Fact(n-1);
    }
}
console.log('hi..')
// Fact(4);
console.log(Fact(5))
