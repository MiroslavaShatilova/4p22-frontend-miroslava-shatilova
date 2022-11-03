'use strict'

function makeFubonacciFunction () {
    let previous = 0;
    let next = 1;
    return function() {
        next = previous + next;
        let current = previous = next - previous;
        console.log(current);
    }
}

const fibonacci = makeFubonacciFunction();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();