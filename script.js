var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");
var reset = document.querySelector(".reset");

function backgroundStyle(firstcolor, secondcolor) {
    body.style.background = "linear-gradient(to right, " + firstcolor + ", " + secondcolor + ")";
    css.textContent = body.style.background;
}

function defaultGradient() {
    color1.value = "#FAF86C";
    color2.value = "#7BCDFC";
    backgroundStyle(color1.value, color2.value);
}

function setGradient() {
    backgroundStyle(color1.value, color2.value);
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
    color1.value = random1
    color2.value = random2
    backgroundStyle(color1.value, color2.value);
}

defaultGradient()

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColor);
reset.addEventListener("click", defaultGradient);
