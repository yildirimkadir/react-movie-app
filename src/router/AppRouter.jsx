import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          {/* <Route path="/react-movie-app" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDatail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
