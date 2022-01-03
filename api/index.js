const {JokeService} = require("m3o/joke");
const {WeatherService} = require("m3o/weather");

const jokeService = new JokeService(process.env.M3O_API_TOKEN);
const weatherService = new WeatherService(process.env.M3O_API_TOKEN);
async function getJokes(amount=3){
    try {
        const rsp = await jokeService.random({
            count: amount,
        });
        return await rsp;
    }catch (e) {
        return await e;
    }

}

async function getWeather( location) {
    try {
        const rsp = await weatherService.now({
            location: location,
        });
        return await rsp;
    } catch (e) {

        return  await e

    }
}

module.exports = {getJokes,getWeather}