const Interval = require('./interval');

describe('interval', function () {
    var interval = new Interval(4,7);
    test.each([
        [new Interval(5,8), true],
        [new Interval(9,12), false],
        [new Interval(3,6), true]
        
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
        'includes %s\t%p',
        (n, expected) => {
            expect(interval.includes(n)).toBe(expected);
        }
    );

    test.each([
        [new Interval(5,6), [new Interval(4,7)]],
        [new Interval(10,14), [new Interval(4,7), new Interval(10,14)]],
        [new Interval(0,2), [new Interval(4,7), new Interval(0,2)]],
        
    ])(
        'union %s %s',
        (n, expected) => {
            expect(interval.union(n)).toStrictEqual(expected);
        }
    );
});