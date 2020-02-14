function binary() {
    'use strict';
    var remainder;
    var bin = [];
    var num = Math.trunc(Number(document.getElementById("inputNum").value));
    var i = num;
    
    while(i!=0){
        remainder = i%2;
        bin.push(remainder);
        i = Math.trunc(i/2);
    }
    
    document.getElementById("result").innerHTML = "Binary Number: " + "<br/>";
    while(bin.length != 0) document.getElementById("result").innerHTML += bin.pop();
}