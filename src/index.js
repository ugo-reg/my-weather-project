function currentDate() {
  let now = new Date();
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let dateElement = document.querySelector(".date");
  dateElement.innerHTML = `${day} ${hours}: ${minutes}`;
}
currentDate();

function change(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#city");
city.addEventListener("submit", change);
