const arrayCarousel = [
  "'MakG is very knowledgeable'",
  "'He Made my wedding unforgettable'",
  "'He is extremely empathetic and compassionate'",
  "'Michael's experience shines through his music'",
];
counter = 0;

function setText() {
  document.getElementById("ss-review").innerHTML = arrayCarousel[counter];

  counter = (counter + 1) % arrayCarousel.length;
}
setInterval(setText, 3000);
clearInterval(setText);
