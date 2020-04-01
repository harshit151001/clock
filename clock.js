const hr = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".seconds");

function time() {
  const date = new Date();
  const sec = date.getSeconds();
  const secDegree = (sec / 60) * 360 + 180;
  second.style.transform = "rotate(" + secDegree + "deg)";

  const min = date.getMinutes();
  const minDegree = (min / 60) * 360 + 180;
  minute.style.transform = "rotate(" + minDegree + "deg)";

  const hour = date.getHours();
  const hourDegree = (hour / 12 + min / 720) * 360 + 180;
  hr.style.transform = "rotate(" + hourDegree + "deg)";
}
setInterval(time, 1000);
