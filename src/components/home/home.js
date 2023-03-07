const btnHome = document.getElementById('btnHome');
const btnArticle = document.getElementById('btnArticle');
const btnBlog = document.getElementById('btnBlog');
const btnInfo = document.getElementById('btnInfo');
const btnReport = document.getElementById('btnReport');
const mainPage = document.getElementById('page');

btnArticle.addEventListener('click', () => {
    mainPage.innerHTML = '';
    generateArticleList();
});

async function generateArticleList() {
    try {
        let result;
        await fetch('http://localhost:8090/article')
        .then((response) => response.json())
        .then(function(data) {
            result = data;
        });

        for (let article of result) {
            const elementArticle = generateArticleElement(article) 
            mainPage.innerHTML += elementArticle;    
        }
    } catch (error) {
        console.log(error);
    }
};

function generateArticleElement(article) {
    return `<div id="article">
                <div class="article-image">
                    <img src="${article.imageUrl}" alt="imagem do artigo">
                </div>
                <div class="article-detail">
                    <div class="article-title">
                        <h2>
                            <strong>${article.title}</strong>
                        </h2>
                    </div>
                    <div class="article-summary">    
                        <p>${article.summary}</p>
                    </div>
                            
                    <div class="article-buttons">
                        <div class="article-btn-info">
                            <a href="">More Info</a>
                        </div>
                        <div class="article-btn-report">
                            <a href="${article.url}" target="_blank" >Report</a>
                        </div>
                    </div>
                </div>
            </div>`
};