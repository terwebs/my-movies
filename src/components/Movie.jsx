import { useState } from "react"
import PropTypes from "prop-types"

const imgPath = "https://image.tmdb.org/t/p/w1280"

// eslint-disable-next-line react/prop-types
export default function Movie({ movie }) {
  // eslint-disable-next-line react/prop-types
  let { title, poster_path, overview } = movie
  const [isOverviewDisplayed, setisOverviewDisplayed] = useState(false)
  const toggleOverviewDisplayed = () =>
    setisOverviewDisplayed(!isOverviewDisplayed)

  return (
    <>
      <li onClick={toggleOverviewDisplayed}>
        <div className="movie-content">
          <img
            className="movie-poster"
            src={imgPath + poster_path}
            alt={title}
          />
          <div className={isOverviewDisplayed ? "overview show" : "overview"}>
            <h3 className="overview-title">Overview</h3>
            {overview}
          </div>
        </div>
        <div className="movie-info">
          <h3>{title}</h3>
        </div>
      </li>
    </>
  )
}

Movie.PropTypes = {
  movie: PropTypes.object,
}
