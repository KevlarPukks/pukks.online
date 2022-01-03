const {WeatherService} = require("m3o/weather");

const {getJokes,getWeather} = require("../../api/index");
const {AnswerService} = require("m3o/answer");

const express = require("express");

const moviesRoute = require("./movies");
const newsRoute = require('./news');

const router = express.Router();
const weatherService = new WeatherService(process.env.M3O_API_TOKEN);
const answerService = new AnswerService(process.env.M3O_API_TOKEN);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json( { title: 'Api' });
});

router.get('/jokes',async function (req, res) {
    try{
        const jokes = await getJokes()
        //  console.log(rsp);
      await  res.json(jokes)

    }catch (e) {
     await   res.json(e)
    }

})

router.get('/jokes/:amount([0-9]{1})',async function (req, res) {
    try{
        const jokes = await getJokes(req.params.page)
        //  console.log(rsp);
      await  res.json(jokes)

    }catch (e) {
     await   res.json(e)
    }

})



router.get('/weather/:city',async function (req,res){
    console.log(req.params)
   try {
      const weather =await getWeather(req.params);
    await  res.json(weather)
   }catch (e) {
    await   res.json(e)
   }
})



router.get('/question/:question',async (req,res)=>{
    try {
        const rsp = await answerService.question({
            query: req.params.question,
        });
        res.json(rsp);
    }catch (e) {
        res.json(e)
    }

})

router.use('/movies',moviesRoute)

router.use('/news',newsRoute)

module.exports = router
