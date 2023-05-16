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

const getNewsArticle1 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      newsArticle1Container.innerHTML = `
      <p class="news1-article1-header news-header webpage-header">${data.response.results[0].fields.headline}</p>

      <p class="news1-article-date webpage-header">${data.response.results[0].webPublicationDate}</p>
      <img class="news1-article-thumbnail" src="${data.response.results[0].fields.thumbnail}" />
      <p class="news1-article-description">${data.response.results[0].blocks.body[0].bodyTextSummary}</p>
`;
    });
};

getNewsArticle1(`Politics`);

const getNewsArtcle2 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      newsArticle2Container.innerHTML = `
      <p class="news1-article2-header news-header webpage-header">${data.response.results[2].fields.headline}</p>
            <p class="news1-article2-date">${data.response.results[2].webPublicationDate}</p>
            <img class="news1-article2-thumbnail" src="${data.response.results[2].fields.thumbnail}" />
            <p class="news1-article2-description">${data.response.results[2].blocks.body[0].bodyTextSummary}</p>

      `;
    });
};

getNewsArtcle2(`Politics`);

const getNewHeaders = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      newsHeader.innerHTML = `
      <p class="news-header-title webpage-header">${data.response.results[3].fields.headline}</p>
      <p class="news-header-title webpage-header">${data.response.results[3].fields.headline}</p>
      <p class="news-header-title webpage-header" id="news-header3">${data.response.results[3].fields.headline}</p>
      <p class="news-header-title webpage-header" id="news-header4">${data.response.results[3].fields.headline}</p>
      `;
    });
};

getNewHeaders(`Sport`);

const getNews2Container = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      news2ArticleContainer.innerHTML = `

      <div id="news2-article1">
            <div id="news2-article1-section1">
              <p class="news2-article1-header webpage-header">${data.response.results[4].fields.headline}</p>
              <p class="news2-article1-author webpage-header">${data.response.results[4].pillarName}</p>
              
              <img class="news2-article1-thumbnail" src="${data.response.results[4].fields.thumbnail}" />
            </div>
            <div id="news2-article1-section2">
              <div id="news2-article1-section2-article1">
                <img class="news2-article1-section2-thumbnail" src="${data.response.results[5].fields.thumbnail}"" />
                <p class="news2-article1-section2-header webpage-header">${data.response.results[5].fields.headline}</p>
                <p class="news2-article1-section2-author"></p>
              </div>
              <div id="news2-article1-section2-article1">
                <img class="news2-article1-section2-thumbnail" src="${data.response.results[6].fields.thumbnail}"" />
                <p class="news2-article1-section2-header webpage-header">${data.response.results[6].fields.headline}</p>
                <p class="news2-article1-section2-author"></p>
              </div>
              <div id="news2-article1-section2-article1">
                <img class="news2-article1-section2-thumbnail" src="${data.response.results[7].fields.thumbnail}"" />
                <p class="news2-article1-section2-header webpage-header">${data.response.results[7].fields.headline}</p>
                <p class="news2-article1-section2-author"></p>
              </div>
              <div id="news2-article1-section2-article1">
                <img class="news2-article1-section2-thumbnail" src="${data.response.results[8].fields.thumbnail}"" />
                <p class="news2-article1-section2-header webpage-header">${data.response.results[8].fields.headline}</p>
                <p class="news2-article1-section2-author"></p>
              </div>
            </div>
          </div>
          <div id="news2-article2">
            <div id="news2-article2-article1" class="news2-article">
              <p class="news2-article2-header webpage-header">${data.response.results[9].fields.headline}</p>
              <p class="news2-article2-date">${data.response.results[9].webPublicationDate}</p>
              <img class="news2-article2-thumbnail" src="${data.response.results[9].fields.thumbnail}" />
            </div>
            <div id="news2-article2-article2" class="news2-article">
              <p class="news2-article2-header webpage-header">${data.response.results[10].fields.headline}</p>
              <p class="news2-article2-date">${data.response.results[10].webPublicationDate}</p>
              <img class="news2-article2-thumbnail" src="${data.response.results[10].fields.thumbnail}" />
            </div>
            <div id="news2-article2-article3" class="news2-article">
              <p class="news2-article2-header webpage-header">${data.response.results[11].fields.headline}</p>
              <p class="news2-article2-date">${data.response.results[11].webPublicationDate}</p>
              <img class="news2-article2-thumbnail" src="${data.response.results[11].fields.thumbnail}" />
            </div>
            <div id="news2-article2-article4" class="news2-article">
              <p class="news2-article2-header webpage-header">${data.response.results[12].fields.headline}</p>
              <p class="news2-article2-date">${data.response.results[12].webPublicationDate}</p>
              <img class="news2-article2-thumbnail" src="${data.response.results[12].fields.thumbnail}" />
            </div>
      `;
    });
};

getNews2Container(`Lifestyle`);

const getNews3Article1 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      news3Article1Container.innerHTML = `
      <div id="news3-article1">
              <p class="news3-article1-topic webpage-header">${data.response.results[13].pillarName}</p>
              <p class="news3-aticle1-header news-header webpage-header">${data.response.results[13].fields.headline}</p>
            </div>
            <div id="news3-article1">
            <p class="news3-article1-topic webpage-header">${data.response.results[14].pillarName}</p>
            <p class="news3-aticle1-header webpage-header">${data.response.results[14].fields.headline}</p>
          </div>
          <div id="news3-article1">
            <p class="news3-article1-topic webpage-header">${data.response.results[15].pillarName}</p>
            <p class="news3-aticle1-header webpage-header">${data.response.results[15].fields.headline}</p>
          </div>
          <div id="news3-article1">
            <p class="news3-article1-topic webpage-header">${data.response.results[16].pillarName}</p>
            <p class="news3-aticle1-header webpage-header">${data.response.results[16].fields.headline}</p>
          </div>
          <div id="news3-article1">
            <p class="news3-article1-topic webpage-header">${data.response.results[17].pillarName}</p>
            <p class="news3-aticle1-header webpage-header">${data.response.results[17].fields.headline}</p>
          </div>
      `;
    });
};
getNews3Article1("Sport");

const getNews3Article2 = function () {
  let url = `https://content.guardianapis.com/search?page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news3Article2Container.innerHTML = `
      <p class="news3-article2-header webpage-header news-header">${data.response.results[18].fields.headline}</p>
            <p class="news3-article2-date webpage-header">${data.response.results[18].webPublicationDate}</p>
            <img class="news3-article2-thumbnail" src="${data.response.results[18].fields.thumbnail}" />
            <p class="news3-article2-description">${data.response.results[18].blocks.body[0].bodyTextSummary}</p>
      `;
    });
};
getNews3Article2();

const getNews4Article1 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      news4Article1Container.innerHTML = `
      <p class="news4-article1-header webpage-header">${data.response.results[19].pillarName}</p>
      `;
    });
};
getNews4Article1("Sport");

const getNews4Article2 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news4Article2Container.innerHTML = `
      <div id="news4-article2-article1">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[20].fields.thumbnail}"/>
              <p class="news4-article2-header webpage-header">${data.response.results[20].fields.headline}</p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article2-article2">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[21].fields.thumbnail}" />
              <p class="news4-article2-header webpage-header">${data.response.results[21].fields.headline}</p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article2-article3">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[22].fields.thumbnail}" />
              <p class="news4-article2-header webpage-header">${data.response.results[22].fields.headline}</p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article2-article4">
              <img class="news4-article2-thumbnail" class="news4-article2" src="${data.response.results[23].fields.thumbnail}" />
              <p class="news4-article2-header webpage-header">${data.response.results[23].fields.headline}</p>
              <p class="news4-article2-description"></p>
            </div>
      `;
    });
};

getNews4Article2(`Sport`);

const getNews4Article3 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      news4Article3Contianer.innerHTML = `
<div id="news4-article3-article1">
              <img class="news4-article3-thumbnail" src="${data.response.results[24].fields.thumbnail}" />
              <p class="news4-article3-header webpage-header">${data.response.results[24].fields.headline}</p>
              <p class="news4-article3-description"></p>
            </div>
            <div id="news4-article3-article2">
              <img class="news4-article3-thumbnail" src="${data.response.results[25].fields.thumbnail}"  />
              <p class="news4-article3-header webpage-header">${data.response.results[25].fields.headline}</p>
              <p class="news4-article2-description"></p>
            </div>
            <div id="news4-article3-article3">
              <img class="news4-article3-thumbnail" src="${data.response.results[26].fields.thumbnail}" />
              <p class="news4-article3-header webpage-header">${data.response.results[27].fields.headline}</p>
              <p class="news4-article3-description"></p>
            </div>
            <div id="news4-article3-article4">
              <img class="news4-article3-thumbnail" src="${data.response.results[27].fields.thumbnail}" />
              <p class="news4-article3-header webpage-header">${data.response.results[27].fields.headline}</p>
              <p class="news4-article3-description"></p>
            </div>

`;
    });
};

getNews4Article3(`Lifestyle`);

const getNews5Article1 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news5Article1Container.innerHTML = `
      <p class="news5-article1-header webpage-header">${data.response.results[28].fields.headline}</p>
      <p class="news5-article1-date webpage-header">${data.response.results[28].webPublicationDate}</p>
      <img class="news5-article-thumbnail" src="${data.response.results[28].fields.thumbnail}" />
      <p class="news5-article1-description">${data.response.results[28].blocks.body[0].bodyTextSummary}</p>
`;
    });
};
getNews5Article1(`News`);

const getNews5Article2 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      news5Article2Container.innerHTML = `
      <img class="news5-article2-thumbnail" src="${data.response.results[29].fields.thumbnail}" />
      <p class="news5-article2-header webpage-header">${data.response.results[29].fields.headline}</p>
      <p class="news5-article2-date webpage-header">${data.response.results[29].webPublicationDate}</p>
      `;
    });
};

getNews5Article2(`Opinion`);

const section1Container = document.getElementById("news1-container");
const btnSection1Hide = document.getElementById("news1-container-hide-header");

const newsHeaderContainer = document.getElementById("news-headers");
const btnNewsHeaderHide = document.getElementById(
  "news-header-container-hide-header"
);

const section2Container = document.getElementById("news2-container");
const btnSection2Hide = document.getElementById("news2-container-hide-header");

const section3Container = document.getElementById("news3-container");
const btnSection3Hide = document.getElementById("news3-container-hide-header");

const section4Container = document.getElementById("news4-container");
const btnSection4Hide = document.getElementById("news4-container-hide-header");

const section5Container = document.getElementById("news5-container");
const btnSection5Hide = document.getElementById("news5-container-hide-header");

const hideSection1 = function () {
  if (section1Container.style.display === "none") {
    section1Container.style.display = "block";
    console.log(`SECTION 1 HIDE`);
    btnSection1Hide.textContent = "Hide";
  } else {
    section1Container.style.display = "none";
    console.log(`SECTION 1 SHOW`);
    btnSection1Hide.textContent = "Show";
  }
};

btnSection1Hide.addEventListener("click", hideSection1);

const hideNewsHeader = function () {
  if (newsHeaderContainer.style.display === "none") {
    newsHeaderContainer.style.display = "grid";
    console.log(`SECTION 1 HIDE`);
    btnNewsHeaderHide.textContent = "Hide";
  } else {
    newsHeaderContainer.style.display = "none";
    console.log(`SECTION 1 SHOW`);
    btnNewsHeaderHide.textContent = "Show";
  }
};

btnNewsHeaderHide.addEventListener("click", hideNewsHeader);

const hideSection2 = function () {
  if (section2Container.style.display === "none") {
    section2Container.style.display = "block";
    console.log(`SECTION 1 HIDE`);
    btnSection2Hide.textContent = "Hide";
  } else {
    section2Container.style.display = "none";
    console.log(`SECTION 1 SHOW`);
    btnSection2Hide.textContent = "Show";
  }
};

btnSection2Hide.addEventListener("click", hideSection2);

const hideSection3 = function () {
  if (section3Container.style.display === "none") {
    section3Container.style.display = "block";
    console.log(`SECTION 3 HIDE`);
    btnSection3Hide.textContent = "Hide";
  } else {
    section3Container.style.display = "none";
    console.log(`SECTION 3 SHOW`);
    btnSection3Hide.textContent = "Show";
  }
};

btnSection3Hide.addEventListener("click", hideSection3);

const hideSection4 = function () {
  if (section4Container.style.display === "none") {
    section4Container.style.display = "block";
    console.log(`SECTION 4 HIDE`);
    btnSection4Hide.textContent = "Hide";
  } else {
    section4Container.style.display = "none";
    console.log(`SECTION 4 SHOW`);
    btnSection4Hide.textContent = "Show";
  }
};

btnSection4Hide.addEventListener("click", hideSection4);

const hideSection5 = function () {
  if (section5Container.style.display === "none") {
    section5Container.style.display = "block";
    console.log(`SECTION 4 HIDE`);
    btnSection5Hide.textContent = "Hide";
  } else {
    section5Container.style.display = "none";
    console.log(`SECTION 4 SHOW`);
    btnSection5Hide.textContent = "Show";
  }
};

btnSection5Hide.addEventListener("click", hideSection5);

const btnNavigationLinkSport = document.getElementById("navigation-link-sport");
const btnNavigationLinkOpinion = document.getElementById(
  "navigation-link-opinion"
);
const btnNavigationLinkNews = document.getElementById("navigation-link-news");
const btnNavigationLinkCulture = document.getElementById(
  "navigation-link-culture"
);
const btnNavigationLinkLifestyle = document.getElementById(
  "navigation-link-lifestyle"
);
const btnNavigationLinkMore = document.getElementById("navigation-link-more");

btnNavigationLinkSport.addEventListener("click", function (e) {
  e.preventDefault();
  getNewsArticle1(`Sport`);
  getNewsArtcle2(`Sport`);
  getNews2Container(`Sport`);
  getNews3Article1(`Sport`);
  getNews3Article2(`Sport`);
  getNews4Article1(`Sport`);
  getNews4Article2(`Sport`);
  getNews4Article3(`Sport`);
  getNews5Article1(`Sport`);
  getNews5Article2(`Sport`);
});

btnNavigationLinkOpinion.addEventListener("click", function (e) {
  e.preventDefault();
  getNewsArticle1(`Politics`);
  getNewsArtcle2(`Politics`);
  getNews2Container(`Politics`);
  getNews3Article1(`Politics`);
  getNews3Article2(`Politics`);
  getNews4Article1(`Politics`);
  getNews4Article2(`Politics`);
  getNews4Article3(`Politics`);
  getNews5Article1(`Politics`);
  getNews5Article2(`Politics`);
});

btnNavigationLinkNews.addEventListener("click", function (e) {
  e.preventDefault();
  getNewsArticle1(`News`);
  getNewsArtcle2(`News`);
  getNews2Container(`News`);
  getNews3Article1(`News`);
  getNews3Article2(`News`);
  getNews4Article1(`News`);
  getNews4Article2(`News`);
  getNews4Article3(`News`);
  getNews5Article1(`News`);
  getNews5Article2(`News`);
});

btnNavigationLinkCulture.addEventListener("click", function (e) {
  e.preventDefault();
  getNewsArticle1(`Culture`);
  getNewsArtcle2(`Culture`);
  getNews2Container(`Culture`);
  getNews3Article1(`Culture`);
  getNews3Article2(`Culture`);
  getNews4Article1(`Culture`);
  getNews4Article2(`Culture`);
  getNews4Article3(`Culture`);
  getNews5Article1(`Culture`);
  getNews5Article2(`Culture`);
});

btnNavigationLinkLifestyle.addEventListener("click", function (e) {
  e.preventDefault();
  getNewsArticle1(`Lifestyle`);
  getNewsArtcle2(`Lifestyle`);
  getNews2Container(`Lifestyle`);
  getNews3Article1(`Lifestyle`);
  getNews3Article2(`Lifestyle`);
  getNews4Article1(`Lifestyle`);
  getNews4Article2(`Lifestyle`);
  getNews4Article3(`Lifestyle`);
  getNews5Article1(`Lifestyle`);
  getNews5Article2(`Lifestyle`);
});

btnNavigationLinkMore.addEventListener("click", function (e) {
  e.preventDefault();
  getNewsArticle1(`More`);
  getNewsArtcle2(`More`);
  getNews2Container(`More`);
  getNews3Article1(`More`);
  getNews3Article2(`More`);
  getNews4Article1(`More`);
  getNews4Article2(`More`);
  getNews4Article3(`More`);
  getNews5Article1(`More`);
  getNews5Article2(`More`);
});
