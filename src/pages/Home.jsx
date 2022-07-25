import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovie = async (API) => {
    try {
      setLoading(true);
      const { data } = await axios.get(API);
      setInfo(data.results);
      console.log(info);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovie(FEATURED_API);
  }, []);

  return (
    <>
      <div className="input-group mb-1">
        <div className="w-25 d-flex justify-content-center align-items-center">
          <input
            type="search"
            className="form-control in"
            placeholder="Search a movie..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-danger" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {loading ? (
          <div class="spinner-border text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          info?.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </>
  );
};

export default Home;
