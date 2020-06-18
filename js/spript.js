setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
const b = document.querySelector(".contain");

function setClock() {
  const current = new Date();
  const secondRatio = current.getSeconds() / 60;
  const minuteRatio = (secondRatio + current.getMinutes()) / 60;
  const hourRatio = (minuteRatio + current.getHours()) / 12;
  const color = current.getHours();

  switch (color) {
    case 16:
    case 17:
    case 18:
      b.style.setProperty("--color", "var(--color2)");
      break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      b.style.setProperty("--color", "var(--color3)");
      break;
  }

  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
