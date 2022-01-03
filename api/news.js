require('dotenv').config()
const {getESModule} = require('../utilities')


async function fetchTopNews(page=1){
const fetch = await getESModule('node-fetch')
   // console.log(fetch)
try {
    let l = await  fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${process.env.THE_NEWS_API_KEY}&locale=gb&page=${page}`)

    return await l.json()
}catch (e) {
return await e
}
}

async function fetchNews(category,page=1) {
    const fetch = await getESModule('node-fetch')
   // console.log(fetch)
    try {
        let l = await  fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${process.env.THE_NEWS_API_KEY}&category=${category}&locale=gb&page=${page}`)

        return await l.json()
    }catch (e) {
        return await e
    }

}

async function searchNews(query,page=1) {
    const fetch = await getESModule('node-fetch')
  //  console.log(fetch)
    try {
        let l = await  fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${process.env.THE_NEWS_API_KEY}&search=${query}&locale=gb&page=${page}`)

        return await l.json()
    }catch (e) {
        return await e
    }

}



// (async function () {
//     console.log(await fetchTopNews())
// })()


module.exports ={fetchTopNews,searchNews,fetchNews}



