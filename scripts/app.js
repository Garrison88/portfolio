const icons = ["html5.png", "css3.png", "javascript.png", "jquery.png", "sass.png", "nodejs.png", "mongodb.png", "firebase.png", "express.png", "java.png", "androidstudio.png", "illustrator.png", "github.png"];

const portPieces = [     
    {
      title: 'Android App',
      appUrl: 'play.google.com/store/apps/details?id=com.garrisonthomas.junkapp',
      repoUrl: 'JunkApp-2.0',
      description: 'Daily log app created for junk removal company',
      thumbPath: 'roi.png'
    },
    {
      title: 'SteveFerguson.ca',
      siteUrl: 'stevefergusonpec.ca/',
      description: 'Campaign website for mayoral candidate',
      thumbPath: 'steve-ferguson.png'
    },
    {
      title: 'TomKat Creative',
      siteUrl: 'www.tomkatcreative.com/',
      repoUrl: 'tomkat-creative',
      description: 'Portfolio website for creative studio',
      thumbPath: 'tomkat.png'
    },
    {
      title: 'RGB Game',
      siteUrl: 'garrison88.github.io/rgb-guessing-game/game-page.html',
      repoUrl: 'rgb-guessing-game',
      description: 'Guess that RGB value!',
      thumbPath: 'colour-game.png'
    },
    {
      title: 'Yelp Camp',
      siteUrl: 'fast-cliffs-46179.herokuapp.com/',
      description: 'Camp reviewing website',
      thumbPath: 'yelp-camp.png'
    },
    {
      title: 'DawnAyer.com',
      siteUrl: 'dawnayer.com/',
      description: 'Website for writer / brand strategist',
      thumbPath: 'dawn-ayer.png'
    }
  ];

function htmlToElements(portPieces) {
  const container = document.getElementById('portfolio-container');
  for (let portPiece of portPieces) {
    let portTemplate = 
        `<div class="port-piece demo-card-square mdl-card mdl-shadow--8dp">
          <div style="background: url('./res/img/portfolio/${portPiece.thumbPath}') center / cover no-repeat" class="mdl-card__title mdl-card--expand">
          </div>
          <div class="mdl-card__supporting-text">
          <h2 class="mdl-card__title-text">${portPiece.title}</h2>
              ${portPiece.description}
          </div>
          <div class="mdl-card__actions mdl-card--border" style='display:list-item'>
          ${portPiece.siteUrl ? "<a href='https://" + portPiece.siteUrl + "' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' target='_blank'>view site <i class='fas fa-external-link-square-alt'></i></a>" : ''}
          ${portPiece.appUrl ? "<a href='https://" + portPiece.appUrl + "' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' target='_blank'>download app <i class='fas fa-download'></i></a>" : ''}
            ${portPiece.repoUrl ? "<a href='https://github.com/Garrison88/" + portPiece.repoUrl + "' class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' target='_blank'>view repo <i class='fab fa-github'></i></a>" : ''}
          </div>
        </div>`;
  let template = document.createElement('template');
  template.innerHTML = portTemplate;
  container.appendChild(template.content);
  }
}

window.onscroll = function() {
  window.pageYOffset > 200 ? document.getElementById('nav-header').className = 'to-top-visible' : document.getElementById('nav-header').className = 'to-top-hidden';
}

function scrollToSection(sectionName) {
  $(`#nav-${sectionName}`).on('click', (e) => {
    e.preventDefault();
    $('html, body')
    .animate({scrollTop: $(`#section-${sectionName}`)
    .offset()
    // account for size of navbar
    .top-88 }, 500);
  });
};

function createList(items, container, elementType) {
  let list = document.getElementById(container);
  for (let item in items) {
    let node = document.createElement(elementType);
    node.src = `res/img/skills-icons/${items[item]}`;
    list.appendChild(node);
  }
}
  
createList(icons, 'skills-container', 'img');
  
htmlToElements(portPieces);

scrollToSection('header');
scrollToSection('portfolio');
scrollToSection('about');