function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    losAngelesDate = losAngelesElement.querySelector(".date div");
    losAngelesTime = losAngelesElement.querySelector(".time");
    losAngelesDate.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM DD, YYYY");
    losAngelesTime.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    sydneyDate = sydneyElement.querySelector(".date div");
    sydneyTime = sydneyElement.querySelector(".time");
    sydneyDate.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM DD, YYYY");
    sydneyTime.innerHTML = moment()
      .tz("Australia/Sydney")
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
        `;
  }
}

let citySelector = document.querySelector("#select-bar");
citySelector.addEventListener("change", function (event) {
  selectedCityTimeZone = event.target.value;
  updateCity();
});
setInterval(updateCity, 1000);
