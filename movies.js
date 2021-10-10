class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

getPG(moviesArray){
  return moviesArray.filter( this.rating );
}

movie1 = new Movie("Casino Royale","Eon Productions","PG13");
console.log(movie1.title);    // Casino Royale
console.log(movie1.studio);   // Eon Productions
console.log(movie1.rating);   // PG13





