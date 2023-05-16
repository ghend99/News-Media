const apiKey = `37a45964-fcec-438d-856c-4391f0f28135`;

const newsArticle1Container = document.getElementById(
  "news1-article1-container"
);
const newsArticle2Container = document.getElementById(
  "news1-article2-container"
);
const newsHeader = document.getElementById("news-headers");

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
      <p class="news1-article2-header news-header">${data.response.results[0].fields.headline}</p>
            <p class="news1-article2-date">${data.response.results[0].webPublicationDate}</p>
            <img class="news1-article2-thumbnail" src="${data.response.results[0].fields.thumbnail}" />
            <p class="news1-article2-description">${data.response.results[6].blocks.body[0].bodyTextSummary}</p>

      `;
    });
};

getNewsArtcle2();

// const getNewHeaders = function () {
//   let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       newsHeader.innerHTML = `
//       <p class="news-header">${data.response.results[0].fields.headline}</p>
//       <p class="news-header">${data.response.results[0].fields.headline}</p>
//       <p class="news-header" id="news-header3">${data.response.results[0].fields.headline}</p>
//       <p class="news-header" id="news-header4">${data.response.results[0].fields.headline}</p>
//       `;
//     });
// };

// getNewHeaders();
