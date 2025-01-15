prompt("what is your name?");
prompt("what is their name?");

var n= Math.random()*100;

n= Math.floor(n)+1;

if(n>=1 && n<=30){
    alert("oops! your score is "+n+"% only");
}
else if(n>=31 && n<=70){
    alert("wooh! your score is "+n+"%. not bad!");
}
else{
    alert("omg!!!! your score is "+n+"%. amazingggg");
}
