const items = document.querySelectorAll(".countdown-item > h4");
const countdownEl = document.querySelector(".countdown");
// set start data

let countdownDate = new Date(2022, 2, 5, 23, 0, 0, 0).getTime();

function getCountdownTime() {
  // get current time
  const now = new Date().getTime();

  // find the difference

  const distance = countdownDate - now;

  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  // create const in ms

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //   Find for days hours and seconds

  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  //  Create massive with const

  const values = [days, hours, minutes, seconds];

  // add values of const to the page

  items.forEach(function (item, index) {
    item.textContent = values[index];
  });
  if (distance < 0) {
    clearInterval(countdown);
    countdownEl.innerHTML = "<h4 class='expired'>Time is Rinning down</h4>";
  }
}

// refreshing counter in one second

let countdown = setInterval(getCountdownTime, 1000);

// initializing current time

getCountdownTime();
