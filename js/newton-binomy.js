const txtA = document.getElementById('txt-a');
const txtB = document.getElementById('txt-b');
const txtN = document.getElementById('txt-n');
const btnDev = document.getElementById('newton-binomy');
const divResult = document.getElementById('div-result');

btnDev.addEventListener('click', (e) => {
    let binomy = `
        termino 1: + ${txtA.value};
        <br>
        termino 2: + ${txtB.value}`;
    divResult.innerHTML = binomy;
    let expA = txtN.value
    let expB = 0
    let coef = 1
    binomy += txtA.value + "^" + expA
    for (let i = 1; i <= txtN.value; i++) {
        coef = expA * coef / (expB + 1)
        expA--
        expB++
        binomy += "+" + coef + txtA.value + "^" + expA + txtB.value + "^" + expB
    }
    divResult.innerHTML = binomy
})
