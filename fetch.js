
let jobTitle = '';
let jobLocation = '';
let positionType = '';
let favorites = [];

const titleText = document.getElementById('title-search');
const locationText = document.getElementById('location-search');

titleText.addEventListener('input', updateTitleValue);
locationText.addEventListener('input', updateLocationValue);


function updateTitleValue(e) {
  e.preventDefault();
  jobTitle = e.target.value;
}

function updateLocationValue(e) {
  jobLocation = e.target.value;
}

function updatePositionValue() {
  positionType = document.getElementById("position-type").value;
}

async function getFeed() {
  let parser = new RSSParser({
    customFields: {
      item:['georss:point', 'geo']
    }
  });

  parser.parseURL(`https://rss.indeed.com/rss/jobs?q=${jobTitle}&l=${jobLocation}&sc=0kf%3Ajt%28${positionType}%29%3B&radius=0&vjk=2dd88a57cffe14c8`, function(err, feed) {
    document.getElementById('jobData').innerHTML = '';
    if (err) throw err;

    feed.items.forEach(function(entry) {
      let li = document.getElementById('jobData');
    
      let h2 = document.createElement('h2');
      h2.innerHTML = entry.title;

      let a = document.createElement('a');
      a.href = entry.link;
      a.innerHTML = entry.link;

      let p = document.createElement('p');
      p.innerHTML = entry.contentSnippet;

      let button = document.createElement('button');
      button.addEventListener('click', saveFavorite);
      function saveFavorite() {
        let title = h2.innerHTML;
        let link = a.innerHTML;
        let summary = p.innerHTML;

        favorites = [...favorites, {'title': title, 'link': link, 'contentSnippet': summary}];

        console.log(favorites)
      }
      console.log(entry)

      let map = document.createElement('button');
      map.addEventListener('click', grabGeo);
      function grabGeo() {
        let coords = entry['georss:point'];
        openRequestedTab();
      }

      li.appendChild(h2);
      li.appendChild(a);
      li.appendChild(p);
      li.appendChild(button);
      li.appendChild(map);
      document.body.appendChild(li)
    })
  })
}

