//  create movie class that contain movie details
class Movie{
    constructor(title,studio,rating="PG"){ //default value of rating is "PG"
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

//A method getPG, which takes an array of base type Movie as its argument
getPG(moviesArray){
  return moviesArray.filter( this.rating );
}

// piece of code that creates an instance of the class Movie
movie1 = new Movie("Casino Royale","Eon Productions","PG13");
console.log(movie1.title);    // Casino Royale
console.log(movie1.studio);   // Eon Productions
console.log(movie1.rating);   // PG13





