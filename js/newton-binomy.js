const txtA = document.getElementById('txt-a');
const txtB = document.getElementById('txt-b');
const txtN = document.getElementById('txt-n');
const btnDev = document.getElementById('newton-binomy');

btnDev.addEventListener('click', (e) => {
    let msg = `
        termino 1: + ${txtA.value};
    <br>
        termino 2: + ${txtB.value}`;
    divResult.innerHTML = msg;
})
function (newtonBinomy[a, b, N]){
let expA = N
let expB = 0
let coef = 1
let binomy = a + "^" + expA
for (let i = 1; i <= n; i++) {
    coef = expA * coef / (expB + 1)
    expA--
    expB++
    binomy += "+" + coef + a + "^" + expA + b + "^" + expB
}
}