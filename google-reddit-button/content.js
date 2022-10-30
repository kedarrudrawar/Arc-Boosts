/* This runs after a web page loads */
const query = queryParams().q.replace(/\+/g, ' ');

// const wikipediaLink = 'https://en.wikipedia.org/wiki/' + encodeURIComponent(query);
// addLink('W', 'Wikipedia', wikipediaLink);

const redditLink = 'https://www.google.com/search?q=' + encodeURIComponent(query) + encodeURIComponent(" reddit");
addLink('👾', 'Reddit', redditLink);

// const twitterLink = 'https://twitter.com/search?q=' + encodeURIComponent(query);
// addLink('🐥', 'Twitter', twitterLink);

// const amazonLink = 'https://www.amazon.com/s?k=' + encodeURIComponent(query);
// addLink('😳', 'Amazon', amazonLink);

function queryParams() {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}


function css(element, style){
  for(const key of Object.keys(style)){
    element.style[key] = style[key];
  }
}

function createLink(symbol, name, url) {
  const a = document.createElement('a');
  css(a, {
    display: 'flex',
    color: '#5f6368',
    margin: '0 0.5em',
  });

  const icon = document.createElement('span');
  icon.innerText = symbol;
  css(icon, {marginTop: 'auto'});

  a.append(icon);
  a.setAttribute('href', url);

  const div = document.createElement('div');
  div.setAttribute('aria-label', 'Append reddit to search query.')
  css(div, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '3px solid green',
  })
  div.append(a);

  return div;
}

function addLink(symbol, name, url) {
  const link = createLink(symbol, name, url);
  document.querySelector('[aria-label="Search by voice"]').parentElement.prepend(link)
}

