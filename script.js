let n = 97;
let count = 0;
let prime = '';
let isprime = true;

for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isprime = false;
            break;
        }
    }
    if (isprime) {
        prime = prime + i + ' ';
    }
    isprime = true;
}

console.log(prime);