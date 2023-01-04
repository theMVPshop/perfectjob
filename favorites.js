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
    let li = document.getElementById('results');
  
    let h2 = document.createElement('h2');
    h2.innerHTML = entry.title;

    let a = document.createElement('a');
    a.href = entry.link;
    a.innerHTML = entry.link;

    let p = document.createElement('p');
    p.innerHTML = entry.contentSnippet;

    li.appendChild(h2);
    li.appendChild(a);
    li.appendChild(p);
    document.body.appendChild(li)
  })
};

