
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
      let jobData = document.getElementById('jobData');

      

      let div = document.createElement('div');
      jobData.appendChild(div)
        jobData.style.display = "inline-block";
        jobData.style.width = "50%";  
        jobData.style.padding = "0 20px";  
        jobData.style.margin = "40px 0";  

      let h2 = document.createElement('h2');
      h2.innerHTML = `<a href="${entry.link}">${entry.title}</a>`;

      let p = document.createElement('p');
      p.innerHTML = entry.contentSnippet;

      let button = document.createElement('button');
      button.innerHTML = "Save to Favorites";
      button.style.margin = "10px 0"; 
      button.addEventListener('click', saveFavorite);
      function saveFavorite() {
        let title = h2.innerHTML;
        let link = entry.link;
        let summary = p.innerHTML;

        favorites = [...favorites, {'title': title, 'link': link, 'contentSnippet': summary}];
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }

      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(button);
    })
  })
}