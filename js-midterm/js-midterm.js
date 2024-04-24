function increaseProgress() {
  // console.log("test");
  let progress = document.querySelector(".progress");
  let currentWidth = progress.offsetWidth;
  let maxWidth = document.querySelector(".bar").offsetWidth;
  console.log(currentWidth);

  let newWidth = currentWidth + 10;
  if (newWidth <= maxWidth) {
    progress.style.width = newWidth + "px";
  }
}

function showNumber() {
  let progress = document.querySelector(".progress").offsetWidth;
  document.querySelector(".volume-number").innerHTML=progress;
}