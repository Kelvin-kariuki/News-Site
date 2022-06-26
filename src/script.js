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
      <h4 id="cDescription">${item.description}</h4>
      <center><img id="cImage"src="${item.urlToImage}" alt="url"/></center>
      <p id="c-name">${item.content}<a href "${item.url}">Read more </a></p>
      <p id="c-auth">Author: ${item.author}<br>Date Published: ${item.publishedAt}</p>
    </div>`

    })
    document.getElementById('articles').innerHTML = html
  });

  // Later on to add an event listener for the submit button
  // Adding a search bar



