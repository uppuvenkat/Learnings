function hideContent(x){
    console.log('lllll', x)
    document.getElementsByTagName('p')[0].style = Math.random()>0.5? 'display:none':'display:block';
    document.getElementsByTagName('button')[0].innerHTML = document.getElementsByTagName('button')[0].innerHTML == 'HideContent' ? 'ShowContent':'HideContent';
}

function myFn(){
    console.log('ddddddddddddd')
}

function onFormSubmit(){
    console.log('khkjhkjhjkkh')
    var name = document.forms["RegForm"]["name"].value;
    // var name = document.getElementsByTagName('form')[0][0].value
    // var addr = document.getElementsByTagName('form')[0][1].value
    // console.log('Name', name)
    // console.log('Addr', addr)
    return false;
}

function addClassToP(){
    console.log('for p..')
    var p = document.getElementsByTagName('P')[1].setAttribute('class','para');
    console.log(p)

}
function addClassToP1(){
    // console.log('for p..')   
    // var p = document.getElementsByTagName('P')[1].className = 'para1';
    // console.log(p)
    var x = document.getElementsByClassName('findingInsideElements')[0]
    var y = x.getElementsByTagName('p')[0].innerHTML
    console.log(y)
}


window.onload=function(){
    document.getElementById("eventLis").addEventListener("click", displayDate);

    function displayDate() {
        console.log('called..')
    }
}
