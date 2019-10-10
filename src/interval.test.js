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

});

describe('Intersection', function () {

	test('Intersection interval (2,5) interval (6,8) => Taille 0', () => {
		var interval2 = new Interval(6, 8);
		var tab = interval.intersection(interval2);
    	expect(tab.length).toBe(0);
	});

	test('Intersection interval (2,5) interval (4,8) => Taille 1', () => {
		var interval2 = new Interval(4, 8);
		var tab = interval.intersection(interval2);
    	expect(tab.length).toBe(1);
	});

	test('Intersection interval (2,5) interval (4,10) => start 4 end 5', () => {
		var interval2 = new Interval(4, 10);
		var tab = interval.intersection(interval2);
    	expect(tab[0]).toEqual(new Interval(4,5));
	});

	test('Intersection interval (4,10) interval (2,5) => start 4 end 5', () => {
		var interval2 = new Interval(4, 10);
		var tab = interval2.intersection(interval);
    	expect(tab[0]).toEqual(new Interval(4,5));
	});

	test('Intersection interval (2,5) interval (7, 10) => []', () => {
		var interval2 = new Interval(7, 10);
		var tab = interval.intersection(interval2);
    	expect(tab).toEqual([]);
	});

});