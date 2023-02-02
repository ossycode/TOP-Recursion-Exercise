// Merge Sort Algorithms Pseudocode
// on input of n elements 
//     if n < 2 
//         return
//     else
//         sort left half of elemeents
//         sort right half of elements
//         merge sorted halves


// T(n) = T(n/2) + T(n/2) + O(n)

//Merge sort algorithm
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

// Merging the sorted arrays
function merge(leftArr, rightArr) {
    const sortedArr = []
    while(leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
   return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort([3,6,9,1,5,6,6,0,2, 4, 8]))

