document.addEventListener("DOMContentLoaded",function(){
    // console.log("The DOM has loaded")
   
})
let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9e96a68fba5c46d0a65ef2d1823fd1d1"
fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9e96a68fba5c46d0a65ef2d1823fd1d1')
  .then(response => response.json())
  .then(data => {
    let html = " ";
    data.articles.map(item => {
      html+=`
      <div id="c-main">
      <h2 id="c-title">${item.title}</h2>
      <h3 id="cDescription">${item.source.name}</h3>
      <p id="c-author">${item.author}</p>
      <img src="${item.urlToImage}" alt="url"/>
    
      <p id="c-name">${item.content}</p>
    </div>`

    })
    document.getElementById('articles').innerHTML = html
  });



