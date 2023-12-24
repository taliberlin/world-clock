function updateTime() {
  //Current
  let currentCityElement = document.querySelector("#current-city");
  if (currentCityElement) {
    let currentCityTimeZone = moment.tz.guess();
    let currentCityDate = currentCityElement.querySelector(".date div");
    let currentCityTime = currentCityElement.querySelector(".time");
    let currentCityName = currentCityElement.querySelector("h2");
    currentCityName.innerHTML = `Current (${
      currentCityTimeZone.replace("_", " ").split("/")[1]
    })`;
    currentCityDate.innerHTML = moment()
      .tz(currentCityTimeZone)
      .format("MMMM DD, YYYY");
    currentCityTime.innerHTML = moment()
      .tz(currentCityTimeZone)
      .format("hh:mm:ss [<small>]A[</small>]");
  }
  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDate = newYorkElement.querySelector(".date div");
    let newYorkTime = newYorkElement.querySelector(".time");
    newYorkDate.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM DD, YYYY");
    newYorkTime.innerHTML = moment()
      .tz("America/New_York")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDate = tokyoElement.querySelector(".date div");
    let tokyoTime = tokyoElement.querySelector(".time");
    tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("MMMM DD, YYYY");
    tokyoTime.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
  //Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDate = berlinElement.querySelector(".date div");
    let berlinTime = berlinElement.querySelector(".time");
    berlinDate.innerHTML = moment().tz("Europe/Berlin").format("MMMM DD, YYYY");
    berlinTime.innerHTML = moment()
      .tz("Europe/Berlin")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
}
updateTime();
setInterval(updateTime, 1000);

let selectedCityTimeZone = "";
function updateCity() {
  if (selectedCityTimeZone) {
    if (selectedCityTimeZone === "current") {
      selectedCityTimeZone = moment.tz.guess();
    }
    let cityName = selectedCityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(selectedCityTimeZone);
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML = `
  <div class="city">
          <div class="date">
            <h2>${cityName}</h2>
            <div>${cityTime.format("MMMM	DD, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a class="back-to-home" href="/">Back to Home Cities</a>
        `;
  }
}

let citySelector = document.querySelector("#select-bar");
citySelector.addEventListener("change", function (event) {
  selectedCityTimeZone = event.target.value;
  updateCity();
});
setInterval(updateCity, 1000);
