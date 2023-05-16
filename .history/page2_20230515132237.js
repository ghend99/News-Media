const apiKey = `37a45964-fcec-438d-856c-4391f0f28135`;

const sidebarPillarContainer = document.getElementById(
  "news-article-sidebar-pillar"
);

const getSidebarPillar = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.response.results[0].weburl);
      sidebarPillarContainer.innerHTML = `
      <p class="news-article-sidebar-pillar webpage-header">${data.response.results[13].pillarName}</p>
      `;
    });
};

getSidebarPillar(`Sport`);
