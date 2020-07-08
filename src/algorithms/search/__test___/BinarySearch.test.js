import BinarySearch from '../BinarySearch';

describe('search', () => {
    it('should return 3 ', () => {
        expect(BinarySearch([0, 1, 2, 3, 4 , 5], 3)).toEqual(3);
    });

    it('should return -1 ', () => {
        expect(BinarySearch([0, 1, 2, 3, 4 , 5], 9)).toEqual(-1);
    });

    it('should return 5 ', () => {
        expect(BinarySearch([0, 1, 2, 3, 4 , 5], 5)).toEqual(5);
    });

    it('should return 0 ', () => {
        expect(BinarySearch([0, 1, 2, 3, 4 , 5], 0)).toEqual(0);
    });

    it('should return 0 ', () => {
        expect(BinarySearch([0, 1, 2, 3, 4], 0)).toEqual(0);
    });
});
