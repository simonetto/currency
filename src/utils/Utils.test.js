import Utils from './Utils'

it('should return euro symbol', () => {
    expect(Utils.getCurrencySymbol('eur')).toBe('€');
});

it('should return pound symbol', () => {
    expect(Utils.getCurrencySymbol('gbp')).toBe('£');
});

it('should return a number with two decimals', () => {
    expect(Utils.getTwoDecimals(123)).toBe('123.00');
    expect(Utils.getTwoDecimals(0)).toBe('0.00');
    expect(Utils.getTwoDecimals(-1)).toBe('-1.00');
    expect(Utils.getTwoDecimals(1/3)).toBe('0.33');
    expect(Utils.getTwoDecimals(5.1231)).toBe('5.12');
    expect(Utils.getTwoDecimals(5.7)).toBe('5.70');
    expect(Utils.getTwoDecimals(5.129)).toBe('5.13');
});

it('should return the decimal part of a number', () => {
    expect(Utils.getDecimalPart(123)).toBe('.00');
    expect(Utils.getDecimalPart(0)).toBe('.00');
    expect(Utils.getDecimalPart(-1)).toBe('.00');
    expect(Utils.getDecimalPart(1/3)).toBe('.33');
    expect(Utils.getDecimalPart(5.1231)).toBe('.12');
    expect(Utils.getDecimalPart(5.7)).toBe('.70');
    expect(Utils.getDecimalPart(5.129)).toBe('.13');
});

it('should separate thousands with commas', () => {
    expect(Utils.addCommas(1)).toBe('1');
    expect(Utils.addCommas(1000)).toBe('1,000');
    expect(Utils.addCommas(1000000)).toBe('1,000,000');
    expect(Utils.addCommas(10000)).toBe('10,000');
});

it('should return an upper case string or ampy if undefined or null', () => {
    expect(Utils.toUpperCase('gbp')).toBe('GBP');
    expect(Utils.toUpperCase()).toBe('');
    expect(Utils.toUpperCase(null)).toBe('');
});
