const icons = ["res/img/skills-icons/html5.png", "res/img/skills-icons/css3.png", "res/img/skills-icons/javascript.png", "res/img/skills-icons/sass.png", "res/img/skills-icons/nodejs.png", "res/img/skills-icons/express.png", "res/img/skills-icons/java.png", "res/img/skills-icons/androidstudio.png", "res/img/skills-icons/illustrator.png"];

const portPieces = [     
    {
      title: 'Rid Of It',
      repoUrl: 'JunkApp-2.0',
      description: 'Android app created for junk removal company',
      thumbPath: 'roi.png'
    },
    {
      title: 'TomKat Creative',
      siteUrl: 'https://www.tomkatcreative.com/',
      repoUrl: 'tomkat-creative',
      description: 'Portfolio website for creative studio',
      thumbPath: 'tomkat.png'
    },
    {
      title: 'RGB Game',
      siteUrl: 'https://rgb-guessing-game-garrison.herokuapp.com/game-page.html',
      repoUrl: 'rgb-guessing-game',
      description: 'Guess that RBG value!',
      thumbPath: 'colour-game.png'
    },
    {
      title: 'Yelp Camp',
      siteUrl: 'https://fast-cliffs-46179.herokuapp.com/',
      description: 'Camp reviewing website',
      thumbPath: 'yelp-camp.png'
    },
    {
      title: 'DawnAyer.com',
      siteUrl: 'http://dawnayer.com/',
      description: 'Website for writer / brand strategist',
      thumbPath: 'dawn-ayer.png'
    }
  ];

function htmlToElements(portPieces) {
  const container = document.getElementById('section-portfolio');
  for (let portPiece of portPieces) {
    let portTemplate = 
        `<div class="port-piece demo-card-square mdl-card mdl-shadow--8dp">
          <div style="background: url('../res/img/portfolio/${portPiece.thumbPath}') center / cover no-repeat" class="mdl-card__title mdl-card--expand">
          </div>
          <div class="mdl-card__supporting-text">
          <h2 class="mdl-card__title-text">${portPiece.title}</h2>
              ${portPiece.description}
          </div>
          <div class="mdl-card__actions mdl-card--border" style='display:list-item'>
          ${portPiece.siteUrl ? "<a href='" + portPiece.siteUrl + "' class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' target='_blank'>view site <i class='fas fa-external-link-square-alt'></i></a>" : ''}
            ${portPiece.repoUrl ? "<a href='https://github.com/Garrison88/" + portPiece.repoUrl + "' class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' target='_blank'>view repo <i class='fas fa-external-link-square-alt'></i></a>" : ''}
          </div>
        </div>`;
  let template = document.createElement('template');
  template.innerHTML = portTemplate;
  container.appendChild(template.content);
  }
}


function scrollToSection(sectionName) {
  $(`#nav-${sectionName}`).on('click', function (e) {
    e.preventDefault();
    $("html, body")
    .animate({scrollTop: $(`#section-${sectionName}`)
    .offset()
    .top }, 500);
  });
};

function createList(items, container, elementType) {
  let list = document.getElementById(container);
  for (let item in items) {
    let node = document.createElement(elementType);
    node.src = items[item];
    list.appendChild(node);
  }
}
  
createList(icons, 'skills-container', 'img');
  
htmlToElements(portPieces);

scrollToSection('header');
scrollToSection('portfolio');
scrollToSection('about');
scrollToSection('contact');