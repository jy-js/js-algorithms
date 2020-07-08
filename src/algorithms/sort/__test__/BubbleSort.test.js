import sort from '../BubbleSort';

describe('BubbleSort', () => {
    it('should sort array', () => {
        expect(sort([2, 1])).toEqual([1, 2]);
    });

    it('should sort array', () => {
        expect(sort([2, 1, 2, 9, 8, 3, 0])).toEqual([0, 1, 2, 2, 3, 8, 9]);
    });
});
