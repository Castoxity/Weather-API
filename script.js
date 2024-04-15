let weather = {
    apikey: "de5d7a9743ea71f63482165ab964ef55",
    fetchweather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=de5d7a9743ea71f63482165ab964ef55")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const { icon , description } = data.weather[0];
        const { temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = "Temperature: " + temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".speed").innerHTML = "Wind Speed: " + speed + " km/h";
        document.querySelector(".output").style.display = "block"; // Show output division
    },
    search: function() {
        var city = document.getElementById("city").value;
        this.fetchweather(city);
    }
};

// Add event listener to button click
document.querySelector(".button").addEventListener("click", function() {
    weather.search();
});
