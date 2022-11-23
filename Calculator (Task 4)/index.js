let output=document.getElementById('output-el');
function display(num){
    output.value+=num;
}
function calc(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Sorry,you can't enter two operators!")
    }
}
function reset(){
    output.value=" ";
}
function del(){
    output.value=output.value.slice(0,-1);
    
             
}