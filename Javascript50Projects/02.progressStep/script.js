  const progress = document.getElementById("progress-bar-1");
const circle = document.querySelectorAll(".circle");
const Prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
  // console.log(currentActive);
});
Prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
  // console.log(currentActive);
});
function update() {
  circle.forEach((circle, index) => {
    // console.log(index);

    if (index < currentActive) {
      circle.classList.add("actie");
    } else {
      circle.classList.remove("actie");
    }
  });
  let active = document.querySelectorAll(".actie");
  console.log(active.length - 1, circle.length - 1);

  progress.style.width = ((active.length - 1) / (circle.length - 1)) * 99 + "%";

  if (currentActive === 1) {
    Prev.disabled = true;
  } else {
    Prev.disabled = false;
    next.disabled = false;
  }
  if (currentActive === circle.length) {
    next.disabled = true;
  }
}
