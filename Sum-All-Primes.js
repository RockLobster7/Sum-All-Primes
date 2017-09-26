/*
Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/


function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function sumPrimes(num) {
    var result = 0;
    do {
        if (isPrime(num)) result += num;
        num--;
    } while (num > 0);

    return result;
}



console.log(sumPrimes(10)); // should return a number.
console.log(sumPrimes(10)); // should return 17.
console.log(sumPrimes(977)); // should return 73156.