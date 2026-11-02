function appendToDisplay(value){
    const display = document.getElementById('display');
    if (display.value === '0' ){
        display.value = value;
    } else {
    display.value+= value;
    }
}

function calculate(){
    const display = document.getElementById('display');
    fetch('/calculate',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({operate:display.value})
    }).then(response=> response.json())
    .then(num =>{
        display.value = num.ans;
    });
}

function clearAll(){
    document.getElementById('display').value ='0';
}

function oneBack(){
    display.value = display.value.slice(0, -1) || (display.value = '0');
}
