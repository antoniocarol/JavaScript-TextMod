const btnUnder = document.querySelector('#underline');
const btnIta = document.querySelector('#italic');
const btnBold = document.querySelector('#bold');
const btnLess = document.querySelector('#less');
const btnPlus = document.querySelector('#plus');
const btnRed = document.querySelector('#red');
const btnBlue = document.querySelector('#blue');
const btnPurple = document.querySelector('#purple');
const btnBlack = document.querySelector('#black');


let text = document.querySelector('span');
let underline = false;
let italic = false;
let bold = false;
let red = false;
let blue = false;
let purple = false;


function onUnderline() {
    text.style.textDecoration = 'underline';
}
function offUnderline() {
    text.style.textDecoration = 'none';
}
function setUnder() {
    if (!underline) {
        onUnderline();
        underline = !underline;
    } else {
        offUnderline();
        underline = !underline;
    }
}


function onItalic() {
    text.style.fontStyle = 'italic';
}
function offItalic() {
    text.style.fontStyle = 'normal';
}
function setItalic() {
    if (!italic) {
        onItalic()
        italic = !italic;
    } else {
        offItalic()
        italic = !italic;

    }
}


function onBold() {
    text.style.fontWeight = 'bold';
}
function offBold() {
    text.style.fontWeight = 'normal';
}
function setBold() {
    if (!bold) {
        onBold();
        bold = !bold;
    } else {
        offBold();
        bold = !bold;
    }
}


let num = 12;
function plusSize() {
    num++;
    text.style.fontSize = `${num}px`;
    document.querySelector('h3').textContent = `${num}`;

}
function lessSize() {
    if (num != 12) {
        num--;
        text.style.fontSize = `${num}px`;
        document.querySelector('h3').textContent = `${num}`;
    } else {
        return
    }

}

function defaultBlack() {
    text.style.color = 'black';
    red = false;
    blue = false;
    purple = false;
}
function onRed() {
    text.style.color = 'red';
    blue = false;
    purple = false;
}
function onBlue() {
    text.style.color = 'blue';
    red = false;
    purple = false;
}
function onPurple() {
    text.style.color = 'purple';
    red = false;
    blue = false;
}

function setRed() {
    if (!red) {
        onRed();
        red = !red;
    } else {
        defaultBlack();
    }
}
function setBlue() {
    if (!blue) {
        onBlue();
        blue = !blue;
    } else {
        defaultBlack();

    }
}
function setPurple() {
    if (!purple) {
        onPurple();
        purple = !purple;
    } else {
        defaultBlack();

    }
}

btnUnder.onclick = setUnder;
btnIta.onclick = setItalic;
btnBold.onclick = setBold;
btnPlus.onclick = plusSize;
btnLess.onclick = lessSize;
btnRed.onclick = setRed;
btnBlue.onclick = setBlue;
btnPurple.onclick = setPurple;
btnBlack.onclick = defaultBlack;

