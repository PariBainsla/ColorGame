const colorCodeContainer = document.getElementById("color-code");
const optioncontainer = document.getElementById("options");
const scorecontainer = document.getElementById('score')
let randomColor = null;
let score = 0;

function generateRandomNumberBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function generateRandomColorRGB() {
    const red = generateRandomNumberBetween(0, 255);
    const green = generateRandomNumberBetween(0, 255);
    const blue = generateRandomNumberBetween(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore() {
    score += 1;
    scorecontainer.innerText = score;
}

function validateResult(el) {
    const selectedColor = el.target.style.backgroundColor;
    if (selectedColor === randomColor) {
        incrementScore();
    } else {
        score = 0;
    }
window.localStorage.setItem('score', score);

    StartGame();
}

function StartGame() {
    score = Number(window.localStorage.getItem('score')) ?? 0;
    scorecontainer.innerText = score;
    optioncontainer.innerHTML = null;
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;

    const ansIndex = generateRandomNumberBetween(0, 5);

    for (let i = 0; i < 6; i++) {
        const div = document.createElement("div");
        div.addEventListener('click', validateResult);
        div.style.backgroundColor = generateRandomColor = i === ansIndex ? randomColor : generateRandomColorRGB();
        optioncontainer.append(div);

    }
}

window.addEventListener("load", () => StartGame())