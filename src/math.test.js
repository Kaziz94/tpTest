const Util = require('./math');
test('Test factoriel de 0 => 1', () => {
    expect(Util.factorial(0)).toBe(1);
});

test('Test factoriel de 2 => 2', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3 => 6', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3000', () => {
    expect(()=> {Util.factorial(3000)}).toThrow();
});

test('Test factoriel -10', () => {
    expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
});


describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});

test('Test sumPrime 6 = 10', () => {
    expect(Util.sumPrime(6)).toBe(10);
});

test('Test sumPrime 8 = 17', () => {
    expect(Util.sumPrime(8)).toBe(17);
});

test('Test FizzBuzz n = 15', () => {
    expect(Util.fizzBuzz(15)).toStrictEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
});

test('Test cipher Test Unitaire = Uftu Tojubjsf', () => {
    expect(Util.cipher("Test Unitaire")).toBe("Uftu Vojubjsf");
});


test('Test cipher *$ù!:! = *$ù!:!', () => {
    expect(Util.cipher("*$ù!:!")).toBe("*$ù!:!");
});

test('Test cipher zZ = aA', () => {
    expect(Util.cipher("zZ")).toBe("aA");
});

describe('pairs', function () {
    test.each([
        [[3,3], 1],
        [[3,3,5,], 1],
        [[3,3,5,5,5], 4],
        [[3,3,5,5,5,5], 7],
    ])(
        'pairs %s equals to %i',
        (n, expected) => {
            expect(Util.pairs(n)).toBe(expected);
        }
    );
});