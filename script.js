const textEl = document.querySelector(".loading-text")
const bgEl = document.querySelector(".bg")

let load = 0;

function blurUpdate() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    textEl.innerText = `${load}%`
    textEl.style.opacity = scale(load, 0, 100, 1, 0);
    bgEl.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
}

let int = setInterval(blurUpdate, 30)

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}