const icons = [
  "java.png",
  "kotlin.png",
  "dart.png",
  "flutter.png",
  "firebase.png",
  "androidstudio.png",
  "html_css_js.png"
  // "sass.png"
  // "github.png"
  // "nodejs.png",
  // "mongodb.png",
  // "express.png"
  // "illustrator.png"
];

const portPieces = [
  {
    title: "Takla Fish Tracker",
    playStoreUrl: "ca.taklafn.taklafishtracker",
    appStoreUrl: "takla-fish-tracker/id1476625954",
    description:
      "Flutter, Dart, Firebase. Track your catches, promote conservation, and win prizes!",
    thumbPath: "tft.png"
  },
  {
    title: "Gloomhaven",
    playStoreUrl: "tomkatcreative.gloomhavenenhancementcalc",
    appStoreUrl: "gloomhaven-utility/id1474725845",
    repoUrl: "gloomhaven-enhancement-calculator",
    description:
      "Flutter, Dart, Material Design. Calculate the cost of a card enhancement. 6,000+ downloads",
    thumbPath: "ghc.png"
  },
  {
    title: "Travel Advisories",
    playStoreUrl: "com.thomas.garrison.traveladvisories",
    repoUrl: "travel-advisories",
    description:
      "Kotlin, Room, Retrofit, REST APIs. Add trips and view advisories",
    thumbPath: "travel_advisories_feature_graphic.png"
  },
  {
    title: "Junk App 2.0",
    playStoreUrl: "com.garrisonthomas.junkapp",
    repoUrl: "JunkApp-2.0",
    description:
      "Java, Firebase, Material Design. Daily log app for junk removal company",
    thumbPath: "roi_feature_graphic.png"
  },
  {
    title: "TomKat Creative",
    siteUrl: "www.tomkatcreative.com/",
    repoUrl: "tomkat-creative",
    description: "Portfolio website for creative studio",
    thumbPath: "tomkat.png"
  },
  {
    title: "RGB Game",
    siteUrl: "garrison88.github.io/rgb-guessing-game/game-page.html",
    repoUrl: "rgb-guessing-game",
    description: "Guess that RGB value!",
    thumbPath: "colour-game.png"
  },
  {
    title: "Yelp Camp",
    siteUrl: "fast-cliffs-46179.herokuapp.com/",
    description: "Camp reviewing website",
    thumbPath: "yelp-camp.png"
  },
  {
    title: "DawnAyer.com",
    siteUrl: "dawnayer.com/",
    description: "Website for writer / brand strategist",
    thumbPath: "dawn-ayer.png"
  }
];

function htmlToElements(portPieces) {
  const container = document.getElementById("portfolio-container");
  for (let portPiece of portPieces) {
    let portTemplate = `<div class="port-piece demo-card-square mdl-card mdl-shadow--8dp">
          <div style="background: url('./res/img/portfolio/${
      portPiece.thumbPath
      }') center / cover no-repeat" class="mdl-card__title mdl-card--expand">
          </div>
          <div class="mdl-card__supporting-text">
          <h2 class="mdl-card__title-text">${portPiece.title}</h2>
              ${portPiece.description}
          </div>
          <div class="mdl-card__actions mdl-card--border" style='display:list-item'>
          ${
      portPiece.siteUrl
        ? "<a href='https://" +
        portPiece.siteUrl +
        "' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' target='_blank'>visit site <i class='fas fa-external-link-square-alt'></i></a>"
        : ""
      }
          ${
      portPiece.playStoreUrl
        ? "<a href='https://play.google.com/store/apps/details?id=" +
        portPiece.playStoreUrl +
        "' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' target='_blank'>google play <i class='fab fa-google-play'></i></a>"
        : ""
      }
      ${
      portPiece.appStoreUrl
        ? "<a href='https://apps.apple.com/ca/app/" +
        portPiece.appStoreUrl +
        "' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' target='_blank'>app store <i class='fab fa-app-store-ios'></i></a>"
        : ""
      }
            ${
      portPiece.repoUrl
        ? "<a href='https://github.com/Garrison88/" +
        portPiece.repoUrl +
        "' class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' target='_blank'>view repo <i class='fab fa-github'></i></a>"
        : ""
      }
          </div>
        </div>`;
    let template = document.createElement("template");
    template.innerHTML = portTemplate;
    container.appendChild(template.content);
  }
}

window.onscroll = function () {
  window.pageYOffset > 200
    ? (document.getElementById("nav-header").className = "to-top-visible")
    : (document.getElementById("nav-header").className = "to-top-hidden");
};

function scrollToSection(sectionName) {
  $(`#nav-${sectionName}`).on("click", e => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop:
          // account for size of navbar
          $(`#section-${sectionName}`).offset().top - 88
      },
      500
    );
  });
}

function createList(items, container, elementType) {
  let list = document.getElementById(container);
  for (let item in items) {
    let node = document.createElement(elementType);
    node.src = `res/img/skills-icons/${items[item]}`;
    list.appendChild(node);
  }
}

createList(icons, "skills-container", "img");

htmlToElements(portPieces);

scrollToSection("header");
scrollToSection("portfolio");
scrollToSection("about");
