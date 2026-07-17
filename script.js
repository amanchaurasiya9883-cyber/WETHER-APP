const apiKey = "0cba649d46761d5d83ba1a25d362f893";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);


        if (data.cod == "404") {
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = data.main.temp + "°C";
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = data.main.humidity + "%";
        document.getElementById("wind").innerText = data.wind.speed + " km/h";

    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }
});
//Clear Sky → Aasman bilkul saaf hai. ☀️
// Few Clouds → Thode badal hain. 🌤️
// Scattered Clouds → Idhar-udhar badal hain. ⛅
// Broken Clouds → Kaafi badal hain lekin poora aasman nahi dhaka hai. ☁️
// Overcast Clouds → Poora aasman badalon se dhaka hua hai. 🌥️☁️