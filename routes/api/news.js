const express = require("express");
const router = express.Router()
const {fetchTopNews,searchNews,fetchNews}= require('../../api/news.js')
router.get('/',async (req,res)=>{
    try {
        const news =await fetchTopNews()
       await res.json(news)
    }catch (e) {
      await  res.json(e)
    }

})


router.get('/sports',async (req,res)=>{
    try {
        const news =await fetchNews('sports')
        await res.json(news)
    }catch (e) {
        await  res.json(e)
    }

})

router.get('/sports/:page([0-9]{1})',async (req,res)=>{
    try {
        const news =await fetchNews('sports',req.params.page)
        await res.json(news)
    }catch (e) {
        await  res.json(e)
    }
})


router.get('/search/:query',async (req,res)=>{
    try {
        const news =await searchNews(req.params.query,req.params.page)
        await res.json(news)
    }catch (e) {
        await  res.json(e)
    }
})


router.get('/search/:query/:page([0-9]{1})',async (req,res)=>{
    try {
        const news =await searchNews(req.params.query,req.params.page)
        await res.json(news)
    }catch (e) {
        await  res.json(e)
    }
})


router.get('/tech',async (req,res)=>{
    try {
        const news =await fetchNews('tech')
        await res.json(news)
    }catch (e) {
        await  res.json(e)
    }
})

router.get('/tech/:page([0-9]{1})',async (req,res)=>{
    try {
        const news =await fetchNews('tech',req.params.page)
        await res.json(news)
    }catch (e) {
        await  res.json(e)
    }
})

module.exports = router