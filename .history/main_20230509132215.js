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
const news5Article1Container = document.getElementById(
  "news5-article1-container"
);
const news5Article2Container = document.getElementById(
  "news5-article2-container"
);

const getNewsArticle1 = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      newsArticle1Container.innerHTML = `
      <p class="news1-article1-header news-header webpage-header">${data.response.results[0].fields.headline}</p>

      <p class="news1-article-date webpage-header">${data.response.results[0].webPublicationDate}</p>
      <img class="news1-article-thumbnail" src="${data.response.results[0].fields.thumbnail}" />
      <p class="news1-article-description">${data.response.results[6].blocks.body[0].bodyTextSummary}</p>
`;
    });
};

getNewsArticle1();

const getNewsArtcle2 = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      newsArticle2Container.innerHTML = `
      <p class="news1-article2-header news-header webpage-header">${data.response.results[0].fields.headline}</p>
            <p class="news1-article2-date">${data.response.results[1].webPublicationDate}</p>
            <img class="news1-article2-thumbnail" src="${data.response.results[1].fields.thumbnail}" />
            <p class="news1-article2-description">${data.response.results[1].blocks.body[0].bodyTextSummary}</p>

      `;
    });
};

getNewsArtcle2();

const getNewHeaders = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      newsHeader.innerHTML = `
      <p class="news-header-title webpage-header">${data.response.results[2].fields.headline}</p>
      <p class="news-header-title webpage-header">${data.response.results[2].fields.headline}</p>
      <p class="news-header-title webpage-header" id="news-header3">${data.response.results[2].fields.headline}</p>
      <p class="news-header-title webpage-header" id="news-header4">${data.response.results[2].fields.headline}</p>
      `;
    });
};

getNewHeaders();

const getNews2Container = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news2ArticleContainer.innerHTML = `
      <div id="news2-article1">
            <p class="news2-article1-header news-header webpage-header">${data.response.results[3].fields.headline}</p>
            <p class="news2-article1-date webpage-header">${data.response.results[3].webPublicationDate}</p>
            <img class="news2-article1-thumbnail" src="${data.response.results[3].fields.thumbnail}" />
            <p class="news2-article1-descprtion">${data.response.results[3].blocks.body[0].bodyTextSummary}</p>
          </div>
          <div id="news2-article2">
            <div id="news2-article2-article1">
              <p class="news2-article2-header news-header webpage-header">${data.response.results[4].fields.headline}</p>
              <p class="news2-article2-date webpage-header">${data.response.results[0].webPublicationDate}</p>
              <img class="news2-article2-thumbnail" src="${data.response.results[4].fields.thumbnail}" />
            </div>
            <div id="news2-article2-article2">
              <p class="news2-article2-header news-header webpage-header">${data.response.results[5].fields.headline}</p>
              <p class="news2-article2-date news-header webpage-header">${data.response.results[5].webPublicationDate}</p>
              <img class="news2-article2-thumbnail" src="${data.response.results[5].fields.thumbnail}" />
            </div>
            <div id="news2-article2-article3">
              <p class="news2-article2-header news-header webpage-header">${data.response.results[6].fields.headline}</p>
              <p class="news2-article2-date webpage-header">${data.response.results[0].webPublicationDate}</p>
              <img class="news2-article2-thumbnail" src="${data.response.results[6].fields.thumbnail}" />
            </div>
            <div id="news2-article2-article4">
              <p class="news2-article2-header news-header webpage-header">${data.response.results[7].fields.headline}</p>
              <p class="news2-article2-date webpage-header">${data.response.results[0].webPublicationDate}</p>
              <img class="news2-article2-thumbnail" src="${data.response.results[7].fields.thumbnail}" />
            </div>
          </div>

      `;
    });
};

getNews2Container();

const getNews3Article1 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news3Article1Container.innerHTML = `
      <div id="news3-article1">
              <p class="news3-article1-topic webpage-header">${data.response.results[0].pillarName}</p>
              <p class="news3-aticle1-header news-header webpage-header">${data.response.results[0].fields.headline}</p>
            </div>
            <div id="news3-article1">
            <p class="news3-article1-topic webpage-header">${data.response.results[1].pillarName}</p>
            <p class="news3-aticle1-header webpage-header">${data.response.results[1].fields.headline}</p>
          </div>
          <div id="news3-article1">
            <p class="news3-article1-topic webpage-header">${data.response.results[2].pillarName}</p>
            <p class="news3-aticle1-header webpage-header">${data.response.results[2].fields.headline}</p>
          </div>
          <div id="news3-article1">
            <p class="news3-article1-topic webpage-header">${data.response.results[3].pillarName}</p>
            <p class="news3-aticle1-header webpage-header">${data.response.results[3].fields.headline}</p>
          </div>
          <div id="news3-article1">
            <p class="news3-article1-topic webpage-header">${data.response.results[4].pillarName}</p>
            <p class="news3-aticle1-header webpage-header">${data.response.results[4].fields.headline}</p>
          </div>
      `;
    });
};
getNews3Article1("Sport");

const getNews3Article2 = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news3Article2Container.innerHTML = `
      <p class="news3-article2-header webpage-header news-header">${data.response.results[0].fields.headline}</p>
            <p class="news3-article2-date webpage-header">${data.response.results[8].webPublicationDate}</p>
            <img class="news3-article2-thumbnail" src="${data.response.results[8].fields.thumbnail}" />
            <p class="news3-article2-description">${data.response.results[8].blocks.body[0].bodyTextSummary}</p>
      `;
    });
};
getNews3Article2();

const getNews4Article1 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      news4Article1Container.innerHTML = `
      <p class="news4-article1-header webpage-header">${data.response.results[0].pillarName}</p>
      `;
    });
};
getNews4Article1("Politics");

const getNews4Article2 = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news4Article2Container.innerHTML = `
      <div id="news4-article2-article1">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[0].fields.thumbnail}"/>
              <p class="news4-article2-header webpage-header">${data.response.results[0].fields.headline}</p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article2-article2">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article2-header webpage-header">${data.response.results[0].fields.headline}</p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article2-article3">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article2-header webpage-header">${data.response.results[0].fields.headline}</p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article2-article4">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article2-header webpage-header">${data.response.results[0].fields.headline}</p>
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
              <p class="news4-article3-header webpage-header">${data.response.results[0].fields.headline}</p>
              <p class="news4-article3-description"></p>
            </div>
            <div id="news4-article3-article2">
              <img class="news4-article3-thumbnail" src="${data.response.results[0].fields.thumbnail}"  />
              <p class="news4-article3-header webpage-header">${data.response.results[0].fields.headline}</p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article3-article3">
              <img class="news4-article3-thumbnail" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article3-header webpage-header">${data.response.results[0].fields.headline}</p>
              <p class="news4-article3-description"></p>
            </div>
            <div id="news4-article3-article4">
              <img class="news4-article3-thumbnail" src="${data.response.results[0].fields.thumbnail}" />
              <p class="news4-article3-header webpage-header">${data.response.results[0].fields.headline}</p>
              <p class="news4-article3-description"></p>
            </div>

`;
    });
};

getNews4Article3();

const getNews5Article1 = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news5Article1Container.innerHTML = `
      <p class="news5-article1-header webpage-header">${data.response.results[0].fields.headline}</p>
      <p class="news5-article1-date webpage-header">${data.response.results[0].webPublicationDate}</p>
      <img class="news5-article-thumbnail" src="${data.response.results[0].fields.thumbnail}" />
      <p class="news5-article1-description">${data.response.results[6].blocks.body[0].bodyTextSummary}</p>
`;
    });
};
getNews5Article1();

const getNews5Article2 = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news5Article2Container.innerHTML = `
      <img class="news5-article2-thumbnail" src="${data.response.results[0].fields.thumbnail}" />
            <p class="news5-article2-header webpage-header">${data.response.results[0].fields.headline}</p>
      `;
    });
};

getNews5Article2();

const btnHide = document.querySelector(".footer-hide");
const section2Container = document.getElementById("news2-container");

const hideSection = function () {
  section2Container.style.display = "none";
  console.log(`CLICK`);
};

btnHide.addEventListener("click", hideSection);
