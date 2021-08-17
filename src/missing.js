
/**
 The missing number problem
 Implement algorithm 1 here
*/
function missing1(A) {
    const N = A.length + 1;
    for (let i = 1; i < N; i++) {
       let found = false;
       for (let j = 0; j < A.length; j++) {
           if (i === A[j]) found = true;
       }
       if (!found) return i;
    }
}

/**
The missing number problem
Implement algorithm 2 here
*/
function missing2(A) {
    const N = A.length + 1;
    let fullSum = 0;
    for (let i = 1; i <= N; i++){
        fullSum += i;
    }
    let sum = 0;
    for (let j = 0; j < A.length; j++){
        sum += A[j];
    }
    return fullSum - sum;
}


module.exports = {missing1, missing2}