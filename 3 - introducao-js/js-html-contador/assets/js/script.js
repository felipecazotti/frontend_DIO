document.getElementsByName("adicionar")[0].addEventListener("click", increment);

document.getElementsByName("subtrair")[0].addEventListener("click", decrement);

var currentNumberWrapper=document.getElementById('currentNumber');

var currentNumber=0;

function increment(){
    if(currentNumber<10){
        currentNumber=currentNumber+1;
    }
    updateColor();
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    if(currentNumber>-10){
        currentNumber=currentNumber-1;
    }
    updateColor();
    currentNumberWrapper.innerHTML = currentNumber;
}

function updateColor(){
    if(currentNumber<0){
        currentNumberWrapper.style.color="red";
    }
    else if(currentNumber==0){
        currentNumberWrapper.style.color="black";
    }
    else{
        currentNumberWrapper.style.color="blue";
    }
}