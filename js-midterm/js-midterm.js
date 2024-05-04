function increaseProgress() {
  // console.log("test");
  let progress = document.querySelector(".progress");
  let currentWidth = progress.offsetWidth;
  let maxWidth = document.querySelector(".bar").offsetWidth;
  // console.log(currentWidth);

  let newWidth = currentWidth + 90;
  if (newWidth <= maxWidth) {
    progress.style.width = newWidth + "px";
  }

  let animals = ["./photos/tiger.png", "./photos/dog2.jpeg", "./photos/dog.jpeg"];

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let plusButton = document.querySelector(".volume-level");
  let buttonWidth = plusButton.offsetWidth;
  let buttonHeight = plusButton.offsetHeight;

  // console.log(buttonWidth);
  // console.log(buttonHeight);

  // console.log(windowWidth);
  // console.log(windowHeight);

  // let submitButton = document.querySelector(".controls");
  // let buttonWidth = plusButton.offsetWidth;
  // let buttonHeight = plusButton.offsetHeight;
  // let plusButtonBounding = plusButton.getBoundingClientRect();
  // let plusButtonX = plusButtonBounding.x;
  // let plusButtonY = plusButtonBounding.y;
  // console.log(plusButtonY);
  // console.log(plusButtonX);

  let randomX;
  let coinFlip = Math.round(Math.random());

  if(coinFlip ===1){
    randomX= Math.floor(Math.random()*(windowWidth)-1200);
  }
  else{
    randomX = Math.floor(Math.random()*(windowWidth-850)+850);
  }

  let randomY = Math.floor(Math.random()*windowHeight);
  // console.log(randomX);
  // console.log(randomY);

  let img = document.createElement("img");
  img.src = animals[Math.floor(Math.random()*animals.length)];

  // console.log(img);
  img.classList.add("animals");
  img.style.left = randomX + "px";
  img.style.top = randomY + "px";
  img.style.position = "absolute";

  
  // let imageSelect = document.querySelector(".animals");
  // let imageSelectBounding = imageSelect.getBoundingClientRect();
  // let imageSelectX = imageSelectBounding.x;
  // let imageSelectY = imageSelectBounding.y;

  // while(randomX>plusButtonX - 50&&randomX<plusButtonX+50){
  //   randomX = Math.floor(Math.random()*windowWidth);
  //   randomY = Math.floor(Math.random()*windowHeight);
  //   img.style.left = randomX + "px";
  //   img.style.top = randomY + "px";
  // }

  // console.log(plusButton.getBoundingClientRect());
  // console.log(img.getBoundingClientRect());
  document.body.appendChild(img);
}

function showNumber() {
  let progress = document.querySelector(".progress").offsetWidth/9;
  document.querySelector(".volume-number").innerHTML=progress;
}