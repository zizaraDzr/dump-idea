const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

function binarySearch (arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let numArr = arr[mid]

        if (numArr === target) {
            return mid
        }
        if (numArr > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null

}

console.log(binarySearch(arr, 1))