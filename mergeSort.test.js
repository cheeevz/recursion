import { mergeSort } from "./mergeSort"

describe('mergeSort', () => {
    test.skip('merge array of 0', () => {
        expect(mergeSort([])).toEqual([]);
    });
    test.skip('merge array of 1', () => {
        expect(mergeSort([73])).toEqual([73]);
    });
    test('merge array of 5', () => {
        expect(mergeSort([1,2,3,4,5])).toEqual([1,2,3,4,5])
    });
    test.skip('merge array of 8', () => {
        expect(mergeSort([3,2,1,13,8,5,0,1])).toEqual([0,1,1,2,3,5,8,13])
    });
    test.skip('merge array of 4', () => {
        expect(mergeSort([105,79,100,110])).toEqual([79,100,105,110])
    });
});