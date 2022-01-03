const {fetchTopNews,searchNews,fetchNews} = require('./api/news')

test('News object data exist',async ()=>{
  const news=  await fetchTopNews()
    expect(news.data).not.toHaveLength(0)
})