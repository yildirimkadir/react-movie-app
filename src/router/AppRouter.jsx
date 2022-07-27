import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieDatail from "../pages/MovieDatail";
import { PrivateRouter } from "../pages/PrivateRouter";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/react-movie-app" element={<Home />} />
          <Route path="/" index element={<Home />} />
          <Route path="/details/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDatail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
