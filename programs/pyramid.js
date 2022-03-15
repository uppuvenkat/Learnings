
function Pyramid(n) {
    let sp = '';
    console.log('hjhj')
    for (let j = 0; j < n; j++) {
        sp = ' '
        // console.log(Math.round(n/2)-j)
        for (let i = 0; i < 2*n/2 -j-1; i++) {
            sp = ' ' + sp;
        }
        for(let k=0;k<2*(j+1)-1;k++){
            sp = sp + '@'
        }
        console.log(sp)
    }
}

Pyramid(3)