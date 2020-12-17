const https=require('https');
exports.renderHomePage = (req, res) => {
    res.render("index");
}
exports.renderAboutPage = (req, res) => {
    res.render("about");
}

exports.renderweatherPage = (req, res) => {
    const query = req.body.city;
    const endpoint = "https://api.openweathermap.org/data/2.5/weather?";
    const appid = "f3ab2cef2a485a81284355d3fadea6e2";
    const url = endpoint+ query+ "&appid="+appid;

    https.get(url, (resp) => {
        console.log(resp.statusCode);
        resp.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData[0].main.temp;
            const weatherDescription = weatherData[0].weather[0].description;
            const icon = weatherData.weather[0].icon;
            resp.render("result_weather", {
                temp: temp
            });
            resp.render("result_weather", {
                weatherDescription: weatherDescription
            });
        })
    })
}