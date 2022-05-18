function alert1() {
    alert('let me see ...');
}

function alert2() {
    alert('Not ok');
}
let ok = document.getElementById('ok');
let cancel = document.getElementById('cancel');
let showDate = document.getElementById('showDate');

ok.addEventListener('click', alert1);
cancel.addEventListener('click', alert2);
showDate.addEventListener('click', function (e) {
    document.getElementById('emptySpace').innerHTML = Date();
});

showDate.addEventListener('dblclick', function (e) {
    document.getElementById('emptySpace').innerHTML = '';
});