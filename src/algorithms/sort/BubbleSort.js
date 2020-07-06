export default function BubbleSort(arr = []) {
    if (!arr || !Array.isArray(arr) || arr.length === 0) {
        return [];
    }

    let len = arr.length - 1;
    for (let i = 0; i < arr.length ; i ++) {
        for(let i = 0;  i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
        len--;
    }

    return arr;
}
