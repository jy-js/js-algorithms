export default function InsertSort(arr = []) {
    let orderArr = [];

    for(let i = 0; i < arr.length ; i++) {
        let value = arr[i];

        if (orderArr.length === 0) {
            orderArr.push(value);
        } else {
            for (let j = 0; j < orderArr.length; j++) {
                if (value >= orderArr[j]) {
                    if (j === orderArr.length - 1) {
                        orderArr.push(value);
                        break;
                    }
                } else {
                    if (j === 0) {
                        orderArr.unshift(value);
                    } else {
                        orderArr.splice(j, 0, value);
                    }
                    break;
                }
            }            
        }
    }

    return orderArr;
}
