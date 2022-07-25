import axios from "axios";
import React from "react";
import { useState, useEffect, useContext } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const { currentUser } = useContext(AuthContext);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("tiklandim");
    if (value && currentUser) {
      getMovie(SEARCH_API + value);
    } else if (!currentUser) {
      // toastWarnNotify("Please log in to search a movie");
      alert("Please log in to search a movie");
    } else {
      // toastWarnNotify("Please enter a text");
      alert("Please enter a text");
    }
  };

  return (
    <>
      <div className="input-group mb-1">
        <div className="w-25 d-flex justify-content-center align-items-center">
          <form className="d-flex justify-content-center">
            <input
              type="search"
              className="form-control in"
              placeholder="Search a movie..."
              aria-label="Movie's name"
              aria-describedby="button-addon2"
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="btn btn-danger"
              type="button"
              id="button-addon2"
              onClick={handleSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {loading ? (
          <div className="spinner-border text-danger m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          info?.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </>
  );
};

export default Home;
