
let counter = document.getElementById('counter');
 let num = 0;

 let savenum = document.getElementById('savenum');
 
 let total = 0;
 
 

function incrementBtn() {
    num = num + 2;
    counter.innerText = num; 
}

function decrementBtn() {
    num = num - 2;
    counter.innerText = num;
}

function saveBtn() {
    total = total + num;
    savenum.innerText = 'TOTAL: ' + total;
    
}

function resetBtn() {
    counter.innerText = 0;
    num = 0;
}

function clearTotalBtn() {
    savenum.innerText = 'TOTAL:' +  0;
    total = 0;
}