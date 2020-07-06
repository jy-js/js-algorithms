import sort from '../BubbleSort';

describe('BubbleSort', () => {
    it('should sort array', () => {
        expect(sort([2, 1])).toEqual([1, 2]);
    });
});
