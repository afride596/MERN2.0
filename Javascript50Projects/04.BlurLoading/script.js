let text = document.querySelector(".loading-text");
let im = document.querySelector(".img");

let count = 0;
let value = setInterval(bluring, 30);
function bluring() {
  count++;
  if (count > 99) {
    clearInterval(value);
  }
  text.innerHTML = `${count}%`;
  text.style.opacity = scale(count, 10, 100, 1, 0)
  im.style.filter= `blur(${scale(count, 10, 100, 30, 0)}px)`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}