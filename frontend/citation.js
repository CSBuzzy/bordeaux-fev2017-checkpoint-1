
const API_URL = 'http://localhaost:3000/articles';

window.addEventListener("DOMContentLoaded", function () {
    getArticles();
});

function getArticles() {
    var req = new XMLHttpRequest();
    var articles = [];
    req.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var articles = JSON.parse(req.responseText);
                displayArticle(article);
                xhr.open('GET', API_URL);   //ttes les données
                xhr.send();
            }
        }
    }
}

function displayArticle(article) {
    document.getElementById('author').textContent = artcile.author;
    document.getElementById('content').textContent = artcile.content;
    document.getElementById('episode').textContent = artcile.episode;
    document.getElementById('chapter').textContent = artcile.chapter;
    document.getElementById('date').textContent = artcile.date;
    document.getElementById('image').src = article.image;
}