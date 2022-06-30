# randomMovieFinder
## if you want to get recommendations for what to watch next, but aren’t sure where to look.
### Description: this project help you to find a movie to watch next

Steps:
============
1. set your account to get an Api in (the movieDb) - https://developers.themoviedb.org/3/getting-started/introduction
2. in getGenres fun is a asynchronous functions that returns a Promise. 
3. the const requestParams save the query string where key is gonna be your TMDBKEY.
4. the const urlToFetch save url where we'll send our fetch request.
5. try ad catch, to handle errors if the fetch() request fails.
6. inside the try block, I use fetch to send request to urlToFetch and AWAIT the response.
7. the conditional statement checks if the .ok property of the response object is a truthy value
8. and then capture the data we gonna need to populate the dropdown menu
9. convert the response to a json() object

#### note: the getMovies() fun and the getMovieInfo() fun is basically the same process than getGenres() fun...

10. in the showRandomMovie fun I call my asynchronous functions and wait for the response to call the next function because they depend in each other.
