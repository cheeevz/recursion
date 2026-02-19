export function mergeSort(arr) {
    console.log('mergeSortRec');
    if (arr.length <= 1) {
        return arr;
    }
    else {
        const left = mergeSort(arr.slice(0, arr.length / 2));
        const right = mergeSort(arr.slice(arr.length / 2));

        return merge(left, right);
    }
}

function merge(left, right) {
    console.log('merge');
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}