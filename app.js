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

//musical quote

const d = new Date();
console.log(d);

const dayNumber = d.getDay();
//storing my output location
console.log(dayNumber);

function quote() {
  if (dayNumber == 0) {
    return `"The Saxophone was Created by Egyptians";`;
  } else if (dayNumber === 1) {
    return `"The Saxophone is the instrument of love"`;
  } else if (dayNumber === 2) {
    return `"The Saxophone is one of the least learned instruments."`;
  } else if (dayNumber === 3) {
    return `"Be Patient with yourself when learning the Sax"`;
  } else if (dayNumber == 4) {
    return `"Muscians don't like when you call Saxophone, 'Sax'"`;
  } else if (dayNumber === 5) {
    return `"The Saxaphone was created on accident"`;
  } else if (dayNumber == 6) {
    return `"The Saxophone is consider a woodwind instrument"`;
  } else {
    return " ";
  }
}

console.log(`You got a` + quote());
const element = document.getElementById("quote");
element.innerHTML = `Saxophone Knowledge 🎷` + `</br>` + `</br>` + quote();
