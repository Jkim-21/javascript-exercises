const fibonacci = function(a) {
    let fibNum = Number(a);
    if ((typeof fibNum !== "number") ||  fibNum < 0) {
        return "OOPS";
    }
    
    if (fibNum < 2) {
        return fibNum;
    }

    let prev = 0;
    let current = 1;
    for (let i = 2; i <= fibNum; i++) {
        let temp = current;
        current += prev;
        prev = temp;
    }
    return current;
};


function fibonacci2(num) {
    if (num < 0) {
        return "OOPS";
    }
    if (num < 2) {
        return Number(num);
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Do not edit below this line
module.exports = fibonacci;
