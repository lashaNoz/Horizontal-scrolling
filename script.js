const pages = document.querySelectorAll(".scrollable");

let i = 0,
  j = 4;

const scrollFn = (event) => {
  if (event.deltaY === 100 || event.key === "ArrowLeft") {
    if (i !== 4) {
      pages[i++].style.left = `calc(${i} * 4rem)`;
      j--;
    }
  } else if (event.deltaY === -100 || event.key === "ArrowRight") {
    if (i !== 0) {
      i--;
      j++;
      pages[i].style.left = `calc(100% - ${j} * 4rem)`;
    }
  }
};

window.addEventListener("wheel", (e) => {
  scrollFn(e);
});

window.addEventListener("keydown", (e) => {
  scrollFn(e);
});
