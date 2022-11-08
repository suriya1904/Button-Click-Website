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
    console.log(count);
}




