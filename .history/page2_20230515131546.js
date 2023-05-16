const apiKey = `37a45964-fcec-438d-856c-4391f0f28135`;

const sidebarPillarContainer = document.getElementById(
  "news-article-sidebar-pillar"
);

const getSidebarPillar = function () {
  let url = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${location}&aqi=no`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      sidebarPillarContainer.innerHTML = `
      
      `;
    });
};
