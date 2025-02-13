import React,{useState, useEffect} from "react";
import "./Row.css";
import axios from "../../../utils/Axios/Axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube"
import { containerClasses } from "@mui/material";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        if (request.status === 204 || !request.data.results.length) {
          console.warn("No movies found for this request");
          return; 
        }

        console.log(request);
        setmovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    
      <div className="row">
        <h1 className="title">{title}</h1>
        <div className="row_posters">
          {movies?.map((movie, index) => (
            <img
              onClick={() => handleClick(movie)}
              key={index}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
          ))}
        </div>
        <div style={{ padding: "40px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    
  );
}

export default Row;
