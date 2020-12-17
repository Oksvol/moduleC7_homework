const isPrime = require('./index.js');

test('7 – Простое число', () => {
    expect(isPrime(7)).toBe('Простое число');
});

test('100 – Составное число', () => {
    expect(isPrime(100)).toBe('Составное число');
});

test('Число должно быть больше 1', () => {
    expect(isPrime(0)).toBe('Число должно быть больше 1');
});

test('23 – Простое число', () => {
    expect(isPrime(23)).toBe('Простое число');
});