
import { formatCurrency } from '../utils/formatCurrencyUtils';
import { formatDate, formatSinpeDate } from '../utils/formatDateUtils';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';
import { groupContactsByLetter } from '../utils/groupContactsByLetter';

describe('Utils Functions', () => {
    test('formatCurrency', () => {
        expect(formatCurrency(1000)).toBe('₡1,000.00');
        expect(formatCurrency(1000.5)).toBe('₡1,000.50');
        expect(formatCurrency(1000.55)).toBe('₡1,000.55');
        expect(formatCurrency(25000)).toBe('₡25,000.00');
    });
    test('formatSinpeDate', () => {
        expect(formatSinpeDate('2022-10-12 12:15:00')).toBe('12 de Octubre 2022, 12:15 pm');
        expect(formatSinpeDate('2022-10-12 00:15:00')).toBe('12 de Octubre 2022, 12:15 am');
        expect(formatSinpeDate('2024-11-9 06:20:00')).toBe('9 de Noviembre 2024, 6:20 am');
    });
    test('formatDate', () => {
        expect(formatDate(new Date('2022-10-12 5:15:00'))).toBe('12/10/22 5:15 a.m');
        expect(formatDate(new Date('2024-11-11 10:12:00'))).toBe('Hoy 10:12 a.m');
    })
    test('formatPhoneNumber', () => {
        expect(formatPhoneNumber('8888-8888')).toBe('+506 8888-8888');
        expect(formatPhoneNumber('+5068888-8888')).toBe('+506 8888-8888');
        expect(formatPhoneNumber('+ 5068888-8888')).toBe('+506 8888-8888');
        expect(formatPhoneNumber('+506 88888888')).toBe('+506 8888-8888');
        expect(formatPhoneNumber('+50688888888')).toBe('+506 8888-8888');
    });
})

