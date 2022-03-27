export default function calcWindChill(currentTemp, windSpeed) {
  currentTemp = parseInt(document.querySelector("#currentTemp").innerHTML);
  windSpeed = parseInt(document.querySelector("#windSpeed").innerHTML);

  if (windSpeed > 4.8 && currentTemp < 50) {
    var windChill =
      35.74 +
      0.6215 * currentTemp -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
    var windChill = Math.round(windChill);
    return windChill;
  } else {
    return null;
  }
}
