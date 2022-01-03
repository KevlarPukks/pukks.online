const express =require( "express");

const router = express.Router();

const {getJokes,getWeather}= require('../api/index')

/* GET home page. */
router.get('/',async function(req, res, next) {
const jokes = await getJokes(1);
const weather = await getWeather('manchester')
    console.log(await weather)
res.render('index',{title:'pukks.online',jokes:jokes,weather:weather})
});

module.exports = router;
