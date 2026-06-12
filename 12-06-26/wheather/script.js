async function weather() {
    const city = document.getElementById("city").value.trim();

    const apiKey = "9043880622addbcf58fb2c75bc20a89c";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== "200") {
        alert(data.message);
        return;
    }

    const tbody = document.getElementById("weather-data");
    tbody.innerHTML = "";

    data.list.forEach((item) => {
        const dayName = new Date(item.dt_txt).toLocaleDateString("en-US", {
            weekday: "long"
        });

        const row = `<tr>
            <td>${item.dt_txt.slice(0, 10)}</td>
            <td>${item.dt_txt.slice(11, 16)}</td>
            <td>${item.main.temp} °C</td>
            <td>${item.weather[0].description}</td>
        </tr>`;

        tbody.innerHTML += row;
    });

}