document.addEventListener("DOMContentLoaded",function(){
    // console.log("The DOM has loaded")
   
})
let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9e96a68fba5c46d0a65ef2d1823fd1d1"
fetch(url)
    .then(response=>console.log(response.json()))
    .then(data => {
        let html = " "
       data.map((value)=>{
           html = `
           <img src = ${img.value}
           <h2 id="art">Articles</h2>
           <p id="content"></p>
           `
        })
    })



