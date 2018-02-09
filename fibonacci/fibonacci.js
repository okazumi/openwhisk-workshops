var sequence = [1];
var invocatioin = 0;

function main(params) {
    invocatioin = 0;
    var int = parseInt(params.num);

    return {
        body: "n: " + int + ", value: " + fibonacci(int) + ", sequence: " + sequence.slice(0, int+1) + ", invocations: " + invocatioin
    };
}

function fibonacci(num) {
    invocatioin++;
    var result = 0;

    if(sequence[num] != undefined) {
        return sequence[num];
    }
    if(num <= 1 || isNaN(num)) {
        result = 1;
    } else {
        result = fibonacci(num -1) + fibonacci(num -2);
    }

    if(num >= 0) {
        sequence[num] = result;
    }

    return result;
}