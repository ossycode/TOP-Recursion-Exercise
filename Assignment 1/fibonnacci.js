
//Using iteration to write a function which takes a number and 
//returns an array containing that many numbers from the fibonacci sequence


// Solving iteratively
function fibs(n) {
    let arr = [0,1]
    for (let i = 2; i < n; i++){
        arr.push(arr[i -1] + arr[i - 2])
    }
    return arr
}

// Solving Recursively
function fibRecur(n) {
    if (n <= 2 ) return [0,1];
    else return [...fibRecur(n-1), fibRecur(n-1)[n-2] + fibRecur(n-1)[n-3]];
    
}

console.log(fibs(8))
console.log(fibRecur(8))