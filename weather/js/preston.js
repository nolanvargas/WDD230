import defaultExport from "windchill.js";

const reqUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=42.0963&lon=-111.8766&appid=6b9da70692451588de922257bbe9e1ce";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function kToF(valNum) {
  valNum = parseFloat(valNum);
  return ((valNum - 273.15) * 1.8 + 32).toFixed() + "°";
}

fetch(reqUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const weather = jsonObject;
    console.log(weather);
    console.log();
    const currently = document.querySelector("#currently");
    const high = document.querySelector("#currentTemp"); /* broken */
    const windChill = document.querySelector("#windChill");

    console.log(
      calcWindChill(
        parseInt(document.querySelector("#currentTemp").innerHTML),
        (windSpeed = parseInt(document.querySelector("#windSpeed").innerHTML))
      )
    );

    high.textContent = kToF(weather["main"]["temp_max"]);
    currently.textContent = capitalizeFirstLetter(
      weather["weather"][0]["description"]
    );
  });
