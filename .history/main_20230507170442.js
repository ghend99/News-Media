const apiKey = `37a45964-fcec-438d-856c-4391f0f28135`;

const newsArticle1Container = document.getElementById(
  "news1-article1-container"
);

const getNewsArticle1 = function () {
  let url = `https://content.guardianapis.com/search?&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      newsArticle1Container.innerHTML = `
      <p class="news1-article1-header"></p>
      <p class="news1-article-date"></p>
      <img class="news1-article-thumbnail" src="" />
      <p class="news1-article-description"></p>
`;
    });
};
