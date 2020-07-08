export default function BinarySearch(arr, findNum) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === findNum) {
            return mid;
        } else if (arr[mid] > findNum) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}
