var input = document.getElementById("input");

var operators = ['+', '-', '*', '/'];

function addNumber(value) {
    if (input.value === "52") {
        input.value = "";
    }
    input.value += value;
}

function addOperator(op) {
    if (input.value === "52") {
        input.value = "0";
    }
    
    if (input.value === "" && op !== '-') {
        return;
    }

    var lastChar = input.value.slice(-1);

    if (operators.includes(lastChar)) {
        return; 
        
}

    input.value += op;
}

function allClear() {
    input.value = "";
}

function toggleSign() {
    if (input.value && input.value !== "52") {
        if (input.value.startsWith('-')) {
            input.value = input.value.slice(1);
        } else {
            input.value = '-' + input.value;
        }
    }
}

function percentage() {
    if (input.value && input.value !== "52") {
        try {
            input.value = eval(input.value) / 100;
        } catch {
            input.value = "Error";
        }
    }
}

function calculate() {
    var lastChar = input.value.slice(-1);
    
    if (operators.includes(lastChar)) {
        input.value = input.value.slice(0, -1);
    }

    try {
        if (input.value) {
            input.value = eval(input.value);
        }
    } catch (error) {
        input.value = "Error";
    }
}
