var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
var pre = cells[0];
input.value = ''
color.value = '#b0b0b0'

for (let i = 0; i<cells.length; i++){
    let cell = cells[i];
    // cell.setAttribute('id',i)
    cell.addEventListener('click', ()=>{cellClick(i)})
    
}

function cellClick(i){
    // console.log('click')

    let select=cells[i];
    // pre.style.background = '#000000';
    pre.removeAttribute('id','select');
    pre.setAttribute('class','date');
    select.setAttribute('id','select');
    pre=select;

}

button.addEventListener('click',()=>{
    
    let text = input.value;
    if (text!=''){
    // console.log(text);
    input.value='';
    let c = color.value;
    // console.log(c);
    var changeLine = document.createElement("BR");
    var node = document.createElement("SPAN");
    node.innerText = text;
    node.style.color = c;
    pre.appendChild(changeLine);
    pre.appendChild(node);
    }
    
})
// pre=cells[0];
cells[0].setAttribute('id','select');



input.addEventListener('keyup', e => {
    if (e.keyCode=='13' && e.target.value!=""){
        let text = input.value;
        // console.log(text);
        input.value='';
        let c = color.value;
        // console.log(c);
        var changeLine = document.createElement("BR");
        var node = document.createElement("SPAN");
        node.innerText = text;
        node.style.color = c;
        pre.appendChild(changeLine);
        pre.appendChild(node);
    
    }
})




//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}