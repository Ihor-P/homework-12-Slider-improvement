// Використовуючи слайдер з лекції, або реалізацію свого слайдера з попередньої домашки додати знизу навігацію(точки) для переключення до конкретного слайду, як показано на скріні
// Також щоб слайдер підлаштовувався під розміри екрану, коли допустима область вказана у %. Умова, при зміні розмірів екрану слайдер має далі коректно функціонувати і відображатися

let image = document.querySelector(".img");

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let imagesSrc = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
];

const ul = document.createElement("ul");
ul.style.listStyleType = "none";
ul.style.textAlign = "center";
document.body.appendChild(ul);

for (let i = 0; i < imagesSrc.length; i++) {
    function createDot() {
        const dot = document.createElement("li");
        ul.appendChild(dot);
        dot.style.width = "5px";
        dot.style.height = "5px";
        dot.style.border = "5px solid gray";
        dot.style.background = "#ddd";
        dot.style.borderRadius = "50%";
        dot.style.color = "gray";
        dot.style.float = "left";
        dot.style.cursor = "pointer";
        dot.style.margin = "15px";
        dot.classList = `li${i}`;
    }

    createDot();
    // document.querySelectorAll("li")[i].classList = `li${i}`;
}

const dots = Array.from(document.querySelectorAll("li"));
let count = 4;
image.src = imagesSrc[count];

setActiveDotStyle(dots[count]);

function disablePrevButton() {
    if (count <= 0) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }
}

function disableNextButton() {
    if (count >= imagesSrc.length - 1) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }
}

function nextImage() {
    count++;
    image.src = imagesSrc[count];
    disableNextButton();
    disablePrevButton();
    setActiveDotStyle(dots[count]);
    setDefaultDotStyle(dots[count - 1]);
}

function prevImage() {
    count--;
    image.src = imagesSrc[count];
    disablePrevButton();
    disableNextButton();
    setActiveDotStyle(dots[count]);
    setDefaultDotStyle(dots[count + 1]);
}

next.addEventListener("click", nextImage);
prev.addEventListener("click", prevImage);

function setActiveDotStyle(dot) {
    dot.style.border = "5px solid black";
    dot.style.cursor = "default";
}

function setDefaultDotStyle(dot) {
    dot.style.border = "5px solid gray";
    dot.style.cursor = "pointer";
}

dots.forEach(function (dot) {
    dot.addEventListener("click", function (event) {
        if (event.target === dot) {
            count = +event.target.classList.value.replace("li", "");
            image.src = imagesSrc[count];
            dots.forEach(function (item) {
                setDefaultDotStyle(item);
            });
            setActiveDotStyle(dot);
        }
    });
});
