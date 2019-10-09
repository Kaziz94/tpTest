const Interval = require('./interval');

var interval = new Interval(2,5);

describe('Overlaps', function () {

	test('Overlaps : interval (2,5) and interval(1,5) => true', () => {
		var intervalTrue = new Interval(1, 5);
    	expect(interval.overlaps(intervalTrue)).toBe(true);
	});

	test('Overlaps : interval (2,5) and interval(6,10) => false', () => {
		var intervalFalse = new Interval(6, 10);
    	expect(interval.overlaps(intervalFalse)).toBe(false);
	});

	test('Overlaps : interval (1,1) and interval(1,1) => false', () => {
		var intervalEgal = new Interval(1, 1);
    	expect(intervalEgal.overlaps(intervalEgal)).toBe(false);
	});

});


describe('Includes', function () {

	test('includes : interval (2,5) and interval(2,3) => true', () => {
		var intervalTrue = new Interval(2, 3);
    	expect(interval.includes(intervalTrue)).toBe(true);
	});

	test('includes : interval (2,5) and interval(3,6) => false', () => {
		var intervalFalse = new Interval(3, 6);
    	expect(interval.includes(intervalFalse)).toBe(false);
	});

	test('includes : interval (2,5) and interval(2,5) => false', () => {
    	expect(interval.includes(interval)).toBe(true);
	});

});


describe('Union', function () {

	test('Union interval (2,5) interval (6,8) => Taille 2', () => {
		var interval2 = new Interval(6, 8);
		var tab = interval.union(interval2);
    	expect(tab.length).toBe(2);
	});

	test('Union interval (2,5) interval (4,8) => Taille 1', () => {
		var interval2 = new Interval(4, 8);
		var tab = interval.union(interval2);
    	expect(tab.length).toBe(1);
	});

	test('Union interval (2,5) interval (4,10) => start 2 end 10', () => {
		var interval2 = new Interval(4, 10);
		var tab = interval.union(interval2);
    	expect(tab[0]).toEqual(new Interval(2,10));
	});

	test('Union interval (4,10) interval (2,5) => start 2 end 10', () => {
		var interval2 = new Interval(4, 10);
		var tab = interval2.union(interval);
    	expect(tab[0]).toEqual(new Interval(2,10));
	});

	test('Union interval (2,5) interval (7, 10) => [2,5] and [7,10]', () => {
		var interval2 = new Interval(7, 10);
		var tab = interval.union(interval2);
    	expect(tab[0]).toEqual(interval);
    	expect(tab[1]).toEqual(interval2);
	});

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


describe('Exclusion', function () {
	test('Exclusion interval (2,5) interval (6,8) => Taille 2', () => {
		var interval2 = new Interval(6, 8);
		var tab = interval.exclusion(interval2);
    	expect(tab.length).toBe(2);
	});

	test('Exclusion interval (2,5) interval (4,8) => Taille 2', () => {
		var interval2 = new Interval(4, 8);
		var tab = interval.exclusion(interval2);
    	expect(tab.length).toBe(2);
	});

	test('Exclusion interval (2,5) interval (4,10) => [2,4], [5,10]', () => {
		var interval2 = new Interval(4, 10);
		var tab = interval.exclusion(interval2);
    	expect(tab[0]).toEqual(new Interval(2,4));
    	expect(tab[1]).toEqual(new Interval(5,10));
	});

	test('Exclusion interval (4,10) interval (2,5) => [2,4], [5,10]', () => {
		var interval2 = new Interval(4, 10);
		var tab = interval2.exclusion(interval);
    	expect(tab[0]).toEqual(new Interval(2,4));
    	expect(tab[1]).toEqual(new Interval(5,10));
	});

	test('Exclusion interval (2,5) interval (7, 10) => [2,5], [7,10]', () => {
		var interval2 = new Interval(7, 10);
		var tab = interval.exclusion(interval2);
    	expect(tab[0]).toEqual(interval);
    	expect(tab[1]).toEqual(interval2);
	});

	test('Exclusion interval (2,5) interval (2, 7) => [5,7]', () => {
		var interval2 = new Interval(2, 7);
		var tab = interval.exclusion(interval2);
    	expect(tab[0]).toEqual(new Interval(5,7));
	});

	test('Exclusion interval (2,7) interval (2, 5) => [5,7]', () => {
		var interval2 = new Interval(2, 7);
		var tab = interval2.exclusion(interval);
    	expect(tab[0]).toEqual(new Interval(5,7));
	});

	test('Exclusion interval (2,5) interval (4, 5) => [2,4]', () => {
		var interval2 = new Interval(4, 5);
		var tab = interval.exclusion(interval2);
    	expect(tab[0]).toEqual(new Interval(2,4));
	});

	test('Exclusion interval (4,5) interval (2, 5) => [2,4]', () => {
		var interval2 = new Interval(4, 5);
		var tab = interval.exclusion(interval2);
    	expect(tab[0]).toEqual(new Interval(2,4));
	});

});