// import responseMovies from "../mocks/response_valid.json"
import { useState } from "react"
import favorite_movies from "../mocks/favorite_movies.json"
import Movie from "./Movie"

const secret = import.meta.env.VITE_SECRET
const fetchURL = `https://api.themoviedb.org/3/search/movie?api_key=${secret}&query=`

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
            return <Movie key={movie.id} movie={movie} />
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
