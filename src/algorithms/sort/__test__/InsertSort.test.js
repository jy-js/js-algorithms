import sort from '../InsertSort';

describe('InsertSort', () => {
    it('should sort array', () => {
        expect(sort([2, 1])).toEqual([1, 2]);
    });

    it('should sort array', () => {
        expect(sort([2, 1, 2, 9, 8])).toEqual([1, 2, 2, 8, 9]);
    });
});
