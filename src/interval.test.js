const Interval = require('./interval');

describe('pairs', function () {
    var interval = new Interval(4,7);
    test.each([
        [new Interval(5,8), true],
        [new Interval(9,12), false],
        
    ])(
        'overlaps',
        (n, expected) => {
            expect(interval.overlaps(n)).toBe(expected);
        }
    );

    test.each([
        [new Interval(5,6), true],
        [new Interval(3,12), false],
        [new Interval(4,7), true],
        [new Interval(8,10), false],
        
    ])(
        'includes %s %p',
        (n, expected) => {
            expect(interval.includes(n)).toBe(expected);
        }
    );
});