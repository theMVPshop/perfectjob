let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function loadFavorites() {
  let favorites = localStorage.getItem('favorites');
  favorites = JSON.parse(favorites)
  console.log(favorites)
  favorites.forEach(function(entry) {
    let results = document.getElementById('results');
    let div = document.createElement('div');
    results.appendChild(div);
  
    let h2 = document.createElement('h2');
    h2.innerHTML = `<a href="${entry.link}">${entry.title}</a>`;

    let a = document.createElement('a');
    a.href = entry.link;
    a.innerHTML = entry.link;

    let p = document.createElement('p');
    p.innerHTML = entry.contentSnippet;

    div.appendChild(h2);
    div.appendChild(p);
  })
};

