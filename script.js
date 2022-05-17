let netIncome = 999999;
let tax;

if (netIncome <= 150000) {
    tax = 0;
} else if (netIncome <= 300000) {
    tax = ((netIncome - 150000) * 5 / 100);
} else if (netIncome <= 500000) {
    tax = ((netIncome - 300000) * 10 / 100) + 7500;
} else if (netIncome <= 750000) {
    tax = ((netIncome - 500000) * 15 / 100) + 27500;
} else if (netIncome <= 1000000) {
    tax = ((netIncome - 750000) * 20 / 100) + 65000;
} else if (netIncome <= 2000000) {
    tax = ((netIncome - 1000000) * 25 / 100) + 115000;
} else if (netIncome <= 5000000) {
    tax = ((netIncome - 2000000) * 30 / 100) + 365000;
} else {
    tax = ((netIncome - 5000000) * 35 / 100) + 1265000;
}

console.log('You have to pay ' + tax);
