const apiKey = `37a45964-fcec-438d-856c-4391f0f28135`;

const newsArticle1Container = document.getElementById(
  "news1-article1-container"
);
const newsArticle2Container = document.getElementById(
  "news1-article2-container"
);
const newsHeader = document.getElementById("news-headers");

const news2ArticleContainer = document.getElementById(
  "news2-article-container"
);

const news3Article1Container = document.getElementById(
  "news3-article1-container"
);
const news3Article2Container = document.getElementById(
  "news3-article2-container"
);
const news4Article1Container = document.getElementById(
  "news4-article1-container-header"
);
const news4Article2Container = document.getElementById(
  "news4-article2-container"
);
const news4Article3Contianer = document.getElementById(
  "news4-article3-container"
);

/

const getNews4Article1 = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news4Article1Container.innerHTML = `
      <p class="news4-article1-header webpage-header">${data.response.results[7].pillarName}</p>
      `;
    });
};
getNews4Article1();

const getNews4Article2 = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news4Article2Container.innerHTML = `
      <div id="news4-article2-article1">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[0].fields.thumbnail}"/>
              <p class="news4-article2-header webpage-header"></p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article2-article2">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article2-header webpage-header"></p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article2-article3">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article2-header webpage-header"></p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article2-article4">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article2-header webpage-header"></p>
              <p class="news4-article2-description"></p>
            </div>
      `;
    });
};

getNews4Article2();

const getNews4Article3 = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news4Article3Contianer.innerHTML = `
<div id="news4-article3-article1">
              <img class="news4-article3-thumbnail" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article3-header webpage-header"></p>
              <p class="news4-article3-description"></p>
            </div>
            <div id="news4-article3-article2">
              <img class="news4-article3-thumbnail" src="${data.response.results[0].fields.thumbnail}"  />
              <p class="news4-article3-header webpage-header"></p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article3-article3">
              <img class="news4-article3-thumbnail" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article3-header webpage-header"></p>
              <p class="news4-article3-description"></p>
            </div>
            <div id="news4-article3-article4">
              <img class="news4-article3-thumbnail" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article3-header webpage-header"></p>
              <p class="news4-article3-description"></p>
            </div>

`;
    });
};

getNews4Article3();
