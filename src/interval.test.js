const Interval = require('./interval');

describe('interval', function () {
    var interval4_7 = new Interval(4,7);
    test.each([
        [new Interval(5,8), true],
        [new Interval(9,12), false],
        [new Interval(3,6), true]
        
    ])(
        'overlaps',
        (n, expected) => {
            expect(interval4_7.overlaps(n)).toBe(expected);
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
            expect(interval4_7.includes(n)).toBe(expected);
        }
    );

    test.each([
        [new Interval(5,6), [new Interval(4,7)]],
        [new Interval(10,14), [new Interval(4,7), new Interval(10,14)]],
        [new Interval(0,2), [new Interval(4,7), new Interval(0,2)]],
        [new Interval(1,3), [new Interval(4,7), new Interval(1,3)]],
        
    ])(
        'union %s %s',
        (n, expected) => {
            expect(interval4_7.union(n)).toStrictEqual(expected);
        }
    );

    test.each([
        /*[new Interval(5,6), new Interval(5,6)],*/
        [new Interval(10,14), null],
        
    ])(
        'intersection %s %s',
        (n, expected) => {
            expect(interval4_7.intersection(n)).toStrictEqual(expected);
        }
    );
});