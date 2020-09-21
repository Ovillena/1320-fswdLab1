
function addFavouriteMovie(movieName, someArray){
    var movieArray= [];
    movieArray= movieName.split(" "); //define movieArray and make array by splitting movie name words by spaces
    
    var i = 0;
    var isFavourite=true; //defining these variables for while loop

    while (i<movieArray.length&&isFavourite==true){
        var movieNamePart=movieArray[i]; /*had to turn element of array to string. 
        found that '''If(movieArray[i]=="the")''' crashed VS. console.log showed it kept on looping undefined*/

        if(movieNamePart.toLowerCase()=="the") { //turning string to lowercase to capture all "the" words
            isFavourite=false; //makes isFavourite false if "The" is an element in the array 
        }

        i++; //adds +1 to i, allows to move onto next element of array
        
    }

    if(isFavourite==true){ /*if the while loop has not changed isFavourite 
        then the movie gets added to array in the parameter of the function */
        someArray.push(movieName); 
    }
}

var favouriteMoviesLst= [];

addFavouriteMovie("Mr. Nobody", favouriteMoviesLst);
addFavouriteMovie("The Last Airbender", favouriteMoviesLst);
addFavouriteMovie("Lord of the Rings", favouriteMoviesLst);
addFavouriteMovie("Parasite",favouriteMoviesLst);
addFavouriteMovie("Lion King", favouriteMoviesLst);

function printFavouriteMovies(){
    var i = 0;
    var listOfMovies=""; //creating a string that adds punctuation and grammar to the list of movies
    while(i<favouriteMoviesLst.length){
        var movie=favouriteMoviesLst[i];
        if(i==favouriteMoviesLst.length - 1){
            listOfMovies=listOfMovies + "and " + movie;
        }else{
            listOfMovies=listOfMovies + movie + ", ";
        }
        i++;
    }
    return console.log("My favourite movies are " + listOfMovies + ". Number of movies: " + favouriteMoviesLst.length +".");

}

printFavouriteMovies();