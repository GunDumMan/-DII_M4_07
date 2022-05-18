function alert1() {
    alert('let me see ...');
}

function alert2() {
    alert('Not ok');
}
let ok = document.getElementById('ok');
let cancel = document.getElementById('cancel');
ok.addEventListener('click', alert1);
cancel.addEventListener('click', alert2);