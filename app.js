document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = '0a6558b0d28ce6724388ae6a6ee843a1'
let url ='https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')

function searchMovies(){
    resultContainer.innerHTML = 'Cargando...'

    let searchInput = document.getElementById('searchInput').value
    fetch(`${url}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response=> displayMovie(response.results))
    
}

function displayMovie(movies){
    resultContainer.innerHTML = ''

    if(movies.length === 0){
        resultContainer.innerHTML = '<p>No se encontraron resultados para su busqueda </p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseData = document.createElement('p')
        releaseData.textContent = 'La fecha de lanzamiento fue: '+ movie.release_date

        let overview = document.createElement('P')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src= posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseData)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
        
    });

};

