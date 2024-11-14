function addval(val){
    document.getElementById('display').value +=val;
}
function clearDisplay(){
    document.getElementById('display').value='';
}
function deleteLast(){
    document.getElementById('display').value=display.value.slice(0,-1);
}
function Header(btn){
    if(btn==='='){
        try{
            display.value=eval(display.value);
        }
        catch(error){
            display.value='error';
        }
    }
    else{
        addval(btn);
    }
}