const colorBox = document.querySelector(".colorBox");
const rgbCode = document.querySelector(".rgbCode");
const generate = document.querySelector(".generate");
const copy = document.querySelector(".copy");

generate.addEventListener("click", generateButton);

function generateButton() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  let generateColor = `RGB(${red} , ${green} , ${blue})`;

  colorBox.style.background = generateColor;
  show(generateColor);
}

function show(gcolor) {
  rgbCode.value = gcolor;
}
copy.addEventListener("click", copyColor);

function copyColor() {
  navigator.clipboard.writeText(rgbCode.value);
  alert("Copied " + rgbCode.value);
}
