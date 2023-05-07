const api_key = 'e530d723b917c92c74a87915309458fe';
const api = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e530d723b917c92c74a87915309458fe';
console.log('hi');
const img_url = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById("main");


function getMovies(api){
    fetch(api).then(response=>
    response.json()
).then(res=>
    {console.log(res.results.length)
    showMoviesData(res.results)
    }
)}

getMovies(api);

function showMoviesData(data){
main.innerHTML = '';

data.forEach((movie) => {
   const image = movie.backdrop_path;
const movie_title = movie.original_title;
const overview = movie.overview;
    const movie1 = document.createElement('div');
    movie1.classList.add('movie');
    movie1.innerHTML = `<img src="${img_url + image}" alt="">
    <div class="movie_info">
     <h2> ${movie_title}</h2>
     <span class="green">9.8</span>
    </div>
    <div class="overview">
        <h3>
            Overview
        </h3>
       ${overview}
    </div>`
main.appendChild(movie1)
})


}

