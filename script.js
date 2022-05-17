let score = 0;
let grade;
if (score >= 80) {
    grade = 'A';
} else if (score >= 75) {
    grade = 'B+';
} else if (score >= 70) {
    grade = 'B';
}
else if (score >= 65) {
    grade = 'C+';
} else if (score >= 50) {
    grade = 'C';
} else {
    grade = 'F';
}
console.log(grade + ' ' + score)

