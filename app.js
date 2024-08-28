$(document).ready(function () {
  $("#submit-form").on("submit", function (e) {
    e.preventDefault();
    const inputVal = $("#input").val();
    if (inputVal != "") {
      $("#loader").removeClass("hidden");
      $("#weather-info").addClass("hidden");
      $("#custom-alert").addClass("hidden");

      const apiKey = "d8bc4764813f0e208bbdfa2420653f79";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=${apiKey}`;

      $.get(apiUrl, function (data) {
        console.log(data);
        $("#loader").addClass("hidden");
        $("#weather-info").removeClass("hidden");
        $("#city-name").text(`City/State Name: ${data.name}`);
        $("#weather-description").text(
          `Description: ${data.weather[0].description}`
        );
        $("#temprature").text(`Temprature: ${data.main.temp}C`);
        $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      });
    } else {
      $("#custom-alert").removeClass("hidden");
    }
  });
});
