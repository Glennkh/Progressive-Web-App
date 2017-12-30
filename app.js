const apiKey = 'ae213835653c493c8225e3fa95d4131c';
const main = document.querySelector('main');

window.addEventListener('load',e=>{
    updateNews();
});

async function updateNews(){
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`);
    const json = await res.json();
    main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article){
    return `
        <div class="article">
            <a href="${article.url}">
                <h2>${article.title}</h2>
                <img src="${article.urlToImage}">
                <p>${article.description}</p>
            </a>
        </div>
        `;
}