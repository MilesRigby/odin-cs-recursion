// These functions output the first n fibonacci numbers in an array [F_1, F_2, ..., F_n]

// Uses iteration
function fibs(n) {
    if (n === 1 ) { return [0]; }
    if (n === 2 ) {return [0, 1]; }

    let arr = [0, 1];
    for (i=2; i<n; i++) { arr[i] = arr[i-1] + arr[i-2]; }
}


// Uses recursion, avoiding the exponential growth in function calls with depth present in
// some recursive implementations (e.g. by using something like return fibs(n-2) + fibs(n-3))
function fibsRec(n) {
    if (n === 1) { return [0]; }
    if (n === 2) { return [0, 1]; }
    
    let prev = fibs(n-1);
    return prev.concat(prev[n-2] + prev[n-3]);
}