var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in l)return l[e].exports;if(e in t){var i=t[e];delete t[e];var n={id:e,exports:{}};return l[e]=n,i.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,l){t[e]=l},e.parcelRequired7c6=i),i("g1uI7"),i("ebN5C"),i("1PLT2"),(0,(s=i("lthku")).renderfromLocalStorage)(),i("lthku");var n=i("5y5ap"),a=(i("hGVxz"),i("c8RuX")),s=i("lthku");const o={galleryBox:document.querySelector(".movies__library"),filmModal:document.querySelector("[data-modal]"),searchId:[],filmDetails:{}};function d(){o.filmModal.classList.add("is-hidden"),o.filmModal.innerHTML=""}async function r(){const e={id:o.filmDetails.id,title:o.filmDetails.title,posterPath:o.filmDetails.poster_path,releaseYear:o.filmDetails.release_date,genreNames:o.filmDetails.genres};(0,s.addToWatched)(e)}async function c(){const e={id:o.filmDetails.id,title:o.filmDetails.title,posterPath:o.filmDetails.poster_path,releaseYear:o.filmDetails.release_date,genreNames:o.filmDetails.genres};(0,s.addToQueue)(e)}o.galleryBox.addEventListener("click",(async function(e){if(e.target.classList.contains(".movies__library"))return;const l=e.target.closest("[data-id]").dataset.id;let t=null;o.searchId.length>0&&o.searchId.find((e=>e.id==l));(0,a.displayLoader)(a.loader);const i=(await(0,n.fetchFilmDetailsById)(l)).data;o.filmDetails=i,o.searchId.push(i),o.filmModal.classList.remove("is-hidden"),function(e){const l=function(e){const{title:l,vote_average:t,vote_count:i,popularity:n,original_title:a,overview:s,poster_path:o,genres:d}=e,r=o?`https://image.tmdb.org/t/p/w500${o}`:"https://www.cloudways.com/blog/wp-content/uploads/How-to-Create-Custom-Codeigniter-404-Not-Found-Page-1.jpg",c=d.map((e=>e.name)).join(" ");return`\n    <div class="film-modal">\n      <button class="button-close" type="button" button-modal-close>X</button>\n      <img class="film__image" src="${r}" alt="Film Image" />\n      <article>\n        <div class="film__content">\n          <h2 class="film__title">${l}</h2>\n          <ul class="film-info">\n            <li class="film-info__item">\n              <p class="film-info__label">Vote / Votes</p>\n              <div class="film-vote">\n                <span class="film-vote__label film-vote__label--orange">${t}</span>\n                <span>/</span>\n                <span class="film-vote__label">${i}</span>\n              </div>\n            </li>\n            <li class="film-info__item">\n              <p class="film-info__label">Popularity</p>\n              <span class="film-info__text">${n}</span>\n            </li>\n            <li class="film-info__item">\n              <p class="film-info__label">Original Title</p>\n              <span class="film-info__text film-info__text--uppercase">${a}</span>\n            </li>\n            <li class="film-info__item">\n              <p class="film-info__label">Genre</p>\n              <span class="film-info__text">${c}</span>\n            </li>\n          </ul>\n          <div class="film-description">\n            <h3 class="film-description__title">About</h3>\n            <p class="film-description__text">${s}</p>\n          </div>\n        </div>\n        \n      </article>\n    </div>\n  `}(e);o.filmModal.insertAdjacentHTML("beforeend",l),(0,a.displayLoader)(a.loader);document.querySelector(".button-close").addEventListener("click",d),window.addEventListener("keydown",d),window.addEventListener("click",d);document.querySelector("[button-add-watch]").addEventListener("click",r);document.querySelector("[button-add-queue]").addEventListener("click",c)}(o.filmDetails)}));
//# sourceMappingURL=library.82a77a11.js.map