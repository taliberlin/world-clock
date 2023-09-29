function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  losAngelesDate = losAngelesElement.querySelector(".date div");
  losAngelesTime = losAngelesElement.querySelector(".time");
  losAngelesDate.innerHTML = moment()
    .tz("America/Los Angeles")
    .format("MMMM DD, YYYY");
  losAngelesTime.innerHTML = moment()
    .tz("America/Los Angeles")
    .format("hh:mm:ss [<small>]A[</small>]");

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  sydneyDate = sydneyElement.querySelector(".date div");
  sydneyTime = sydneyElement.querySelector(".time");
  sydneyDate.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM DD, YYYY");
  sydneyTime.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("hh:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
