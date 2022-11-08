let count=0;


function increment(){
     count= count+1;
     document.getElementById("count-el").innerHTML=count;
}
function decrement(){
    count= count-1;
    document.getElementById("count-el").innerHTML=count;
}
function save(){
    document.getElementById("save").innerHTML=count;
}




