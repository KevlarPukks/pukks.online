const express = require("express");

const {MovieService} =require("m3o/movie");

const router = express.Router();


const movieService = new MovieService(process.env.M3O_API_TOKEN);


router.get('/',async function(req, res, next) {
    try {
        const rsp = await movieService.search({
            query:new Date().getUTCFullYear().toString()
        });
       // console.log(rsp);

        res.json( rsp);
    }catch (e) {
        res.json(e)
    }

});



router.get('/search/:query',async function(req, res, next) {
    try {
        const rsp = await movieService.search({
            query:req.params.query,
        });
      //  console.log(rsp);

        res.json( rsp);
    }catch (e) {
        res.json(e)
    }

});

router.get('/search/:query/:page',async function(req, res, next) {
    try {
        const rsp = await movieService.search({
            query:req.params.query,
            page:req.params.page
        });
       // console.log(rsp);

        res.json( rsp);
    }catch (e) {
        res.json(e)
    }

});


module.exports = router