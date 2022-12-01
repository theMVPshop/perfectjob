class Favorite {
    constructor(title, link, contentSnippet) {
        this.title = title;
        this. link = link;
        this.contentSnippet = contentSnippet;
    }
}

function createNewFavorite () {

    const favoriteJob = new Favorite('java job', 'www.java.com', 'description');
    console.log(favoriteJob.title);
    console.log(favoriteJob.link);
    console.log(favoriteJob.contentSnippet);
    
}