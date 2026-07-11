function counter(id,end){

let count=0;

let speed=20;

let x=setInterval(()=>{

count++;

document.getElementById(id).innerHTML=count;

if(count==end){

clearInterval(x);

}

},speed);

}

counter("assets",1200);

counter("issues",35);

counter("resolved",980);

counter("tech",48);