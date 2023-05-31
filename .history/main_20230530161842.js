const apiKey = `37a45964-fcec-438d-856c-4391f0f28135`;
const weatherAPIKey = `df894a7e70114baaa2c130524231305`;
const locationAPIKey = `676abcfa67c5463fa43f013da11902ee`;
const hourlyAPIKey = `DN3MFUF4FAJRL2L9VJPBDKKA8
`;

const news1Article1Container = document.getElementById(
  "news1-article1-container"
);
const news1Article3Container = document.getElementById(
  "news1-article3-container"
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

// Weather API call (location) = http://api.weatherapi.com/v1/current.json?key=df894a7e70114baaa2c130524231305&q=London&aqi=no

// Hour Weather API = https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?unitGroup=uk&key=DN3MFUF4FAJRL2L9VJPBDKKA8&contentType=json

const weatherLocationInput = document.querySelector(
  ".weather-container-location-input"
);
const weatherSearchConfirm = document.querySelector(".search-icon");

const getLocation = function () {
  fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${locationAPIKey}`)
    .then((response) => response.json())
    .then((data) => {
      var loadLocation = `${data.city.name}`;
      getWeather(loadLocation);
    });
};

const getWeather = function (location) {
  let url = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${location}&aqi=no`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(
        ".weather-location-current-icon"
      ).src = `${data.current.condition.icon}`;
      document.querySelector(
        ".weather-location-current-text"
      ).innerHTML = `Now <br/>${data.current.temp_c}°C`;
    });
};

const response = function () {
  var responseAccept = confirm(`Do you allow your location to be shared?`);
  if (responseAccept === true) getLocation();
};
response();

weatherSearchConfirm.addEventListener("click", function (e) {
  e.preventDefault();
  if (weatherLocationInput.value === "") {
    alert(`Please input closest city`);
  } else {
    var location = weatherLocationInput.value;
    getWeather(location);
  }
});

const date = new Date();
const day = date.getDay();

const dateModified = new Date().toLocaleString("en-UK");

const getDay = function () {
  if (day === 1) {
    document.querySelector(".weather-container-day").textContent = "Monday";
  } else if (day === 2) {
    document.querySelector(".weather-container-day").textContent = "Tuesday";
  } else if (day === 3) {
    document.querySelector(".weather-container-day").textContent = "Wednesday";
  } else if (day === 4) {
    document.querySelector(".weather-container-day").textContent = "Thursday";
  } else if (day === 5) {
    document.querySelector(".weather-container-day").textContent = "Friday";
  } else if (day === 6) {
    document.querySelector(".weather-container-day").textContent = "Saturday";
  } else
    document.querySelector(".weather-container-day").textContent = "Sunday";
};
getDay();

document.querySelector(
  ".weather-container-date"
).textContent = `${dateModified}`;

const getNews1Article1 = function (searchInput) {
  let url = `
  https://content.guardianapis.com/search?section=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const news1Thumbnail = document.querySelectorAll(".news1-thumbnail");
      for (let i = 0; i < data.response.results.length; i++) {
        if (data.response.results[i].fields.thumbnail === undefined) {
          console.log(`NO THUMBNAIL`);
          // news1Thumbnail.src = `./images/${no_image.jpg}`;
        }
        news1Article1Container.innerHTML = `
        <a href="${data.response.results[i].webUrl}" target="_blank">
          <div id="news1-article1" class="news-container">
            <img class="news1-article1-thumbnail news1-thumbnail" src="${
              data.response.results[i].fields.thumbnail
            }" />
            <p class="news1-article1-header webpage-header">${
              data.response.results[i].fields.headline
            }</p>
          </div>
        </a>

          <div id="news1-article2" >
            <a href="${data.response.results[i + 1].webUrl}" target="_blank">
              <div id="news1-article2-article1" class="news1-article2 news-container">
                <img class="news1-article2-thumbnail news1-thumbnail" src="${
                  data.response.results[i + 1].fields.thumbnail
                }" />
                <p class="news1-article2-header webpage-header">${
                  data.response.results[i + 1].fields.headline
                }</p>
              </div>
            </a>

        <a href="${data.response.results[i + 2].webUrl}" target="_blank">
          <div id="news1-article2-article2" class="news1-article2 news-container">
          <img class="news1-article2-thumbnail news1-thumbnail" src="${
            data.response.results[i + 2].fields.thumbnail
          }" />
          <p class="news1-article2-header webpage-header">${
            data.response.results[i + 2].fields.headline
          }</p>
        </div>
        </a>

        <a href="${data.response.results[i + 3].webUrl}" target="_blank" >
        <div id="news1-article2-article3" class="news1-article2 news-container">
          <img class="news1-article2-thumbnail news1-thumbnail" src="${
            data.response.results[i + 3].fields.thumbnail
          }" />
          <p class="news1-article2-header webpage-header">${
            data.response.results[i + 3].fields.headline
          }</p>
        </div>
        </a>
`;
      }
    });
};

getNews1Article1();

const getNews1Article3 = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.response.results.length; i++) {
        news1Article3Container.innerHTML = `

      <a href="${data.response.results[i + 4].webUrl}" target="_blank">
      <div id="news1-article3-article1" class="news-container">
      <p class="news1-article3-header webpage-header">${
        data.response.results[i + 4].fields.headline
      }</p>
      <img class="news1-article3-thumbnail news1-thumbnail" src="${
        data.response.results[i + 4].fields.thumbnail
      }" />
    </div>
      </a>

      <a href="${data.response.results[i + 5].webUrl}" target="_blank">
      <div id="news1-article3-article2" class="news-container">
      <p class="news1-article3-header webpage-header">${
        data.response.results[i + 5].fields.headline
      }</p>
      <img class="news1-article3-thumbnail news1-thumbnail" src="${
        data.response.results[i + 5].fields.thumbnail
      }" />
    </div>
      </a>

      `;
      }
    });
};

getNews1Article3();

const getNewHeaders = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.response.results.length; i++) {
        newsHeader.innerHTML = `

      <div id="news-headers-section" class="news-container">
      <a href="${data.response.results[i + 6].webUrl}" target="_blank">
        <p class="news-header-title webpage-header">${
          data.response.results[i + 6].fields.headline
        }</p>
      </a>
      </div>

      <div id="news-headers-section"  class="news-container">
      <a href="${data.response.results[i + 7].webUrl}" target="_blank">
        <p class="news-header-title webpage-header">${
          data.response.results[i + 7].fields.headline
        }</p>
      </a>
      </div>

<div id="news-headers-section"  class="news-container news-header3">
<a href="${data.response.results[i + 8].webUrl}" target="_blank">
        <p class="news-header-title webpage-header" id="news-header3">${
          data.response.results[i + 8].fields.headline
        }</p>
      </a>
</div>

<div id="news-headers-section"  class="news-container news-header4">
<a href="${data.response.results[i + 9].webUrl}" target="_blank">
        <p class="news-header-title webpage-header" id="news-header4">${
          data.response.results[i + 9].fields.headline
        }</p>
      </a>
</div>

      `;
      }
    });
};

getNewHeaders();

const getNews2Container = function (searchInput) {
  let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=39&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.response.results.length; i++) {
        var date1 = new Date(
          `${data.response.results[i + 15].webPublicationDate}`
        ).toLocaleString(`en-UK`);

        var date2 = new Date(
          `${data.response.results[i + 16].webPublicationDate}`
        ).toLocaleString(`en-UK`);
        var date3 = new Date(
          `${data.response.results[i + 17].webPublicationDate}`
        ).toLocaleString(`en-UK`);
        var date4 = new Date(
          `${data.response.results[i + 18].webPublicationDate}`
        ).toLocaleString(`en-UK`);
        news2ArticleContainer.innerHTML = `

      <div id="news2-article1">

      <a href="${data.response.results[i + 10].webUrl}" target="_blank">
      <div id="news2-article1-section1" class="news-container" >
              <p class="news2-article1-header webpage-header">${
                data.response.results[i + 10].fields.headline
              }</p>

            </div>
      </a>

            <div id="news2-article1-section2" >

            <a href="${data.response.results[i + 11].webUrl}" target="_blank">
            <div id="news2-article1-section2-article1" class="news-container">
                <img class="news2-article1-section2-thumbnail news2-thumbnail" src="${
                  data.response.results[i + 11].fields.thumbnail
                }"" />
                <p class="news2-article1-section2-header webpage-header">${
                  data.response.results[i + 11].fields.headline
                }</p>
                <p class="news2-article1-section2-author"></p>
              </div>
            </a>

              <a href="${data.response.results[i + 12].webUrl}" target="_blank">
              <div id="news2-article1-section2-article1" class="news-container">
                <img class="news2-article1-section2-thumbnail news2-thumbnail" src="${
                  data.response.results[i + 12].fields.thumbnail
                }"" />
                <p class="news2-article1-section2-header webpage-header">${
                  data.response.results[i + 12].fields.headline
                }</p>
                <p class="news2-article1-section2-author"></p>
              </div>
              </a>

              <a href="${data.response.results[i + 13].webUrl}" target="_blank">
              <div id="news2-article1-section2-article1" class="news-container">
                <img class="news2-article1-section2-thumbnail news2-thumbnail" src="${
                  data.response.results[13].fields.thumbnail
                }"" />
                <p class="news2-article1-section2-header webpage-header">${
                  data.response.results[13].fields.headline
                }</p>
                <p class="news2-article1-section2-author"></p>
              </div>
              </a>

              <a href="${data.response.results[14].webUrl}" target="_blank">
              <div id="news2-article1-section2-article1" class="news-container">
                <img class="news2-article1-section2-thumbnail news2-thumbnail" src="${
                  data.response.results[14].fields.thumbnail
                }"" />
                <p class="news2-article1-section2-header webpage-header">${
                  data.response.results[14].fields.headline
                }</p>
                <p class="news2-article1-section2-author"></p>
                </div>
              </a>

            </div>
          </div>
          <div id="news2-article2">

      <a href="${data.response.results[15].webUrl}" target="_blank">
          <div id="news2-article2-article1" class="news2-article news-container">
              <p class="news2-article2-header webpage-header news2-article-blue">${
                data.response.results[15].fields.headline
              }</p>
              <p class="news2-article2-date news2-article-blue">${date1}</p>
              <img class="news2-article2-thumbnail news2-thumbnail" src="${
                data.response.results[15].fields.thumbnail
              }" />
            </div>
          </a>

<a href="${data.response.results[16].webUrl}" target="_blank">
<div id="news2-article2-article2" class="news2-article news-container">
              <p class="news2-article2-header webpage-header">${
                data.response.results[16].fields.headline
              }</p>
              <p class="news2-article2-date">${date2}</p>
              <img class="news2-article2-thumbnail news2-thumbnail" src="${
                data.response.results[16].fields.thumbnail
              }" />
            </div>
</a>

<a href="${data.response.results[17].webUrl}" target="_blank">
<div id="news2-article2-article3" class="news2-article news-container">
              <p class="news2-article2-header webpage-header">${
                data.response.results[17].fields.headline
              }</p>
              <p class="news2-article2-date">${date3}</p>
              <img class="news2-article2-thumbnail news2-thumbnail" src="${
                data.response.results[17].fields.thumbnail
              }" />
            </div>
</a>

<a href="${data.response.results[18].webUrl}" target="_blank">
<div id="news2-article2-article4" class="news2-article news-container">
              <p class="news2-article2-header webpage-header news2-article-blue">${
                data.response.results[18].fields.headline
              }</p>
              <p class="news2-article2-date news2-article-blue">${date4}</p>
              <img class="news2-article2-thumbnail news2-thumbnail" src="${
                data.response.results[18].fields.thumbnail
              }" />
            </div>
</a>

      `;
      }
    });
};

getNews2Container();

// const getNews3Article1 = function (searchInput) {
//   let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       news3Article1Container.innerHTML = `

// <a href="${data.response.results[19].webUrl}" target="_blank">
// <div id="news3-article1" class="news-container">
//               <p class="news3-article1-topic webpage-header">${data.response.results[19].pillarName}</p>
//               <p class="news3-aticle1-header news-header webpage-header">${data.response.results[19].fields.headline}</p>
//             </div>
// </a>

// <a href="${data.response.results[20].webUrl}" target="_blank">
// <div id="news3-article1" class="news-container">
//             <p class="news3-article1-topic webpage-header">${data.response.results[20].pillarName}</p>
//             <p class="news3-aticle1-header webpage-header">${data.response.results[20].fields.headline}</p>
//           </div>
// </a>

// <a href="${data.response.results[21].webUrl}" target="_blank">
//  <div id="news3-article1" class="news-container">
//             <p class="news3-article1-topic webpage-header">${data.response.results[21].pillarName}</p>
//             <p class="news3-aticle1-header webpage-header">${data.response.results[21].fields.headline}</p>
//           </div>
// </a>

// <a href="${data.response.results[22].webUrl}" target="_blank">
// <div id="news3-article1" class="news-container">
//             <p class="news3-article1-topic webpage-header">${data.response.results[22].pillarName}</p>
//             <p class="news3-aticle1-header webpage-header">${data.response.results[22].fields.headline}</p>
//           </div>
// </a>

// <a href="${data.response.results[23].webUrl}" target="_blank">
// <div id="news3-article1" class="news-container">
//             <p class="news3-article1-topic webpage-header">${data.response.results[23].pillarName}</p>
//             <p class="news3-aticle1-header webpage-header">${data.response.results[23].fields.headline}</p>
//           </div>
// </a>

//       `;
//     });
// };
// getNews3Article1(`News`);

// const getNews3Article2 = function (searchInput) {
//   let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       news3Article2Container.innerHTML = `

// <a href="${data.response.results[24].webUrl}" target="_blank">
// <div id="news3-article2-article1" class="news3-article2 news-container">
//       <img class="news3-article2-thumbnail news3-thumbnail" src="${data.response.results[24].fields.thumbnail}" />
//       <p class="news3-article2-header webpage-header">${data.response.results[24].fields.headline}</p>
//     </div>
// </a>

// <a href="${data.response.results[25].webUrl}" target="_blank">
// <div id="news3-article2-article2" class="news3-article2 news-container">
//       <img class="news3-article2-thumbnail news3-thumbnail" src="${data.response.results[25].fields.thumbnail}"  />
//       <p class="news3-article2-header webpage-header">${data.response.results[25].fields.headline}</p>
//     </div>
// </a>

// <a href="${data.response.results[26].webUrl}" target="_blank">
// <div id="news3-article2-article3" class="news3-article2 news-container">
//       <img class="news3-article2-thumbnail news3-thumbnail" src="${data.response.results[26].fields.thumbnail}" />
//       <p class="news3-article2-header webpage-header">${data.response.results[26].fields.headline}</p>
//     </div>
// </a>

//   <a href="${data.response.results[27].webUrl}" target="_blank">
//   <div id="news3-article2-article4" class="news3-article2 news-container">
//       <img class="news3-article2-thumbnail news3-thumbnail" src="${data.response.results[27].fields.thumbnail}" />
//       <p class="news3-article2-header webpage-header">${data.response.results[27].fields.headline}</p>
//       </div>
//   </a>

//       `;
//     });
// };
// getNews3Article2(`News`);

// const getNews4Article1 = function (searchInput) {
//   let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=30&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       news4Article1Container.innerHTML = `
//       <p class="news4-article1-header webpage-header">${data.response.results[0].pillarName}</p>
//       `;
//     });
// };
// getNews4Article1(`News`);

// const getNews4Article2 = function (searchInput) {
//   let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=40&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       news4Article2Container.innerHTML = `

//     <a href="${data.response.results[28].webUrl}" target="_blank">
//     <div id="news4-article2-article1" class="news-container news4-article2-article">
//               <img class="news4-article2-thumbnail news4-thumbnail" class="news4-article2" src="${data.response.results[28].fields.thumbnail}"/>
//               <p class="news4-article2-header webpage-header">${data.response.results[28].fields.headline}</p>
//               <p class="news4-article2-description"></p>
//             </div>
//     </a>

// <a href="${data.response.results[29].webUrl}" target="_blank">
// <div id="news4-article2-article2" class="news-container news4-article2-article">
//               <img class="news4-article2-thumbnail news4-thumbnail" class="news4-article2" src="${data.response.results[29].fields.thumbnail}" />
//               <p class="news4-article2-header webpage-header">${data.response.results[29].fields.headline}</p>
//               <p class="news4-article2-description"></p>
//             </div>
// </a>

// <a href="${data.response.results[30].webUrl}" target="_blank">
// <div id="news4-article2-article3" class="news-container news4-article2-article">
//               <img class="news4-article2-thumbnail news4-thumbnail" class="news4-article2" src="${data.response.results[30].fields.thumbnail}" />
//               <p class="news4-article2-header webpage-header">${data.response.results[30].fields.headline}</p>
//               <p class="news4-article2-description"></p>
//             </div>
// </a>

// <a href="${data.response.results[31].webUrl}" target="_blank">
// <div id="news4-article2-article4" class="news-container news4-article2-article">
//               <img class="news4-article2-thumbnail news4-thumbnail" class="news4-article2" src="${data.response.results[31].fields.thumbnail}" />
//               <p class="news4-article2-header webpage-header">${data.response.results[31].fields.headline}</p>
//               <p class="news4-article2-description"></p>
//             </div>
// </a>

//       `;
//     });
// };

// getNews4Article2(``);

// const getNews4Article3 = function (searchInput) {
//   let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=40&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       news4Article3Contianer.innerHTML = `

//       <a href="${data.response.results[32].webUrl}" target="_blank">
//       <div id="news4-article3-article1" class="news-container">
//               <img class="news4-article3-thumbnail news4-thumbnail" src="${data.response.results[32].fields.thumbnail}" />
//               <p class="news4-article3-header webpage-header">${data.response.results[32].fields.headline}</p>
//               <p class="news4-article3-description"></p>
//             </div>
//       </a>

// <a href="${data.response.results[33].webUrl}" target="_blank">
// <div id="news4-article3-article2" class="news-container">
//               <img class="news4-article3-thumbnail news4-thumbnail" src="${data.response.results[33].fields.thumbnail}"  />
//               <p class="news4-article3-header webpage-header">${data.response.results[33].fields.headline}</p>
//               <p class="news4-article2-description"></p>
//             </div>
// </a>

// <a href="${data.response.results[34].webUrl}" target="_blank">
// <div id="news4-article3-article3" class="news-container">
//               <img class="news4-article3-thumbnail news4-thumbnail" src="${data.response.results[34].fields.thumbnail}" />
//               <p class="news4-article3-header webpage-header">${data.response.results[34].fields.headline}</p>
//               <p class="news4-article3-description"></p>
//             </div>
// </a>

// <a href="${data.response.results[35].webUrl}" target="_blank">
// <div id="news4-article3-article4" class="news-container">
//               <img class="news4-article3-thumbnail news4-thumbnail" src="${data.response.results[35].fields.thumbnail}" />
//               <p class="news4-article3-header webpage-header">${data.response.results[35].fields.headline}</p>
//               <p class="news4-article3-description"></p>
//             </div>
// </a>

// `;
//     });
// };

// getNews4Article3(``);

// const getNews5Article1 = function (searchInput) {
//   let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=40&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       news5Article1Container.innerHTML = `

// <a href="${data.response.results[36].webUrl}" target="_blank">
// <div id="news5-article1-article" class="news-container">
//               <p class="news5-article1-header webpage-header">${data.response.results[36].fields.headline}</p>
//               <img class="news5-article1-thumbnail" src="${data.response.results[36].fields.thumbnail}" />
//             </div>
// </a>

// <a href="${data.response.results[37].webUrl}" target="_blank">
// <div id="news5-article1-article" class="news-container">
//               <p class="news5-article1-header webpage-header">${data.response.results[37].fields.headline}</p>
//               <img class="news5-article1-thumbnail" src="${data.response.results[37].fields.thumbnail}" />
//             </div>
// </a>

// <a href="${data.response.results[32].webUrl}" target="_blank">
// <div id="news5-article1-article" class="news-container">
//               <p class="news5-article1-header webpage-header">${data.response.results[38].fields.headline}</p>
//               <img class="news5-article1-thumbnail" src="${data.response.results[38].fields.thumbnail}" />
//             </div>
// </a>

// `;
//     });
// };
// getNews5Article1(``);

// const getNews5Article2 = function (searchInput) {
//   let url = `https://content.guardianapis.com/search?q=${searchInput}&page-size=40&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail&show-fields=all`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       news5Article2Container.innerHTML = `
//       <a href="${data.response.results[39].webUrl}" target="_blank">
//       <img class="news5-article2-thumbnail" src="${data.response.results[39].fields.thumbnail}" />
//       <p class="news5-article2-header webpage-header">${data.response.results[39].fields.headline}</p>
//       </a>
//       `;
//     });
// };
//
// getNews5Article2(``);

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
  getNews1Article1(`Sport`);
  getNews1Article3(`Sport`);
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
  getNews1Article1(`Politics`);
  getNews1Article3(`Politics`);
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
  getNews1Article1(`News`);
  getNews1Article3(`News`);
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
  getNews1Article1(`Culture`);
  getNews1Article3(`Culture`);
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
  getNews1Article1(`Lifestyle`);
  getNews1Article3(`Lifestyle`);
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
  getNews1Article1(`More`);
  getNews1Article3(`More`);
  getNews2Container(`More`);
  getNews3Article1(`More`);
  getNews3Article2(`More`);
  getNews4Article1(`More`);
  getNews4Article2(`More`);
  getNews4Article3(`More`);
  getNews5Article1(`More`);
  getNews5Article2(`More`);
});
