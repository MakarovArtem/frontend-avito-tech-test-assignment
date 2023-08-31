import { convertDate } from '../utils/convertDate';

describe('convertDate', () => {
    it('should return an empty string if the input is undefined', () => {
        const result = convertDate(undefined);
        expect(result).toBe('');
    });

    it('should convert the date format from "YYYY-MM-DD" to "DD.MM.YYYY"', () => {
        const result = convertDate('2022-01-15');
        expect(result).toBe('15.01.2022');
    });
});