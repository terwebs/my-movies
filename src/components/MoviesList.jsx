// import responseMovies from "../mocks/response_valid.json"
import { useState } from "react"
import favorite_movies from "../mocks/favorite_movies.json"

const imgPath = "https://image.tmdb.org/t/p/w1280"
const fetchURL =
  "https://api.themoviedb.org/3/search/movie?api_key=e2236eb5db210c6903690fbd931e2356&query="

export default function MoviesList() {
  const [movies, setMovies] = useState(favorite_movies.results)
  const fetchData = async (event) => {
    const query = event.target.value
    const response = await fetch(fetchURL + query)
    const data = await response.json()
    if (query === "") {
      setMovies(favorite_movies.results)
    } else {
      setMovies(data.results)
    }
  }

  return (
    <div className="page-wrapper">
      <header className="header">
        <h1>My Favorite Movies</h1>
        <div className="search-header">
          <label className="search-label" htmlFor="search">
            Look for your favorites movies!
          </label>
          <input
            type="text"
            placeholder="Search"
            onChange={fetchData}
            className="input-search"
            id="search"
          />
        </div>
      </header>

      <main>
        <ul className="movies-list">
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <img
                  className="movie-poster"
                  src={imgPath + movie.poster_path}
                  alt={movie.title}
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.vote_averages}</p>
                </div>
              </li>
            )
          })}
        </ul>
        <p className="credits">Created by Ter_Webs</p>
      </main>
    </div>
  )
}

// function NoResults() {
//   return <p>no movies found</p>
// }

// export default function MoviesList() {
//   return hasMovies ? <ShowMovies /> : <NoResults />
// }
