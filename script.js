var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");
var reset = document.querySelector(".reset");

function colorText() {
    css.textContent = body.style.background;
}

function defaultGradient() {
    body.style.background = "linear-gradient(to right, #FFCFAA, #D1686D)";
    color1.value = "#FFCFAA";
    color2.value = "#D1686D";
    colorText();
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + 
    color1.value + ", " + color2.value + ")";
    colorText();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    var random1 = getRandomColor()
    var random2 = getRandomColor()
    body.style.background = "linear-gradient(to right, " + 
    random1 + ", " + random2 + ")";
    color1.value = random1
    color2.value = random2
    colorText();
}

defaultGradient()

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColor);
reset.addEventListener("click", defaultGradient);
