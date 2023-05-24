function printNumbers(firstNumber, lastNumber){
    let timerId = setInterval(function(){
        console.log(firstNumber);
        if (firstNumber === lastNumber) {
            clearInterval(timerId);
        }
        firstNumber += 1;
    }, 1000);
}

printNumbers(5, 15);