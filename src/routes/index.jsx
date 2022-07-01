import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Movies from "../pages/movies"
import MovieDetails from "../pages/MovieDetails"
import Celebrities from "../pages/celebrities"
import CelebrityDetails from "../pages/CelebrityDetails"
import Series from "../pages/series"
import Error from "../pages/error"
import Login from "../pages/authentication/Login"
import Signup from "../pages/authentication/Signup"
import AppLayout from "../layout/AppLayout"


const Routing = () => {
    return (
      <>
        <Routes>
                <Route element={<AppLayout />}>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="movies" element={<Movies />}></Route>
                  <Route path="movies/:id" element={<MovieDetails />}></Route>
                  <Route path="celebrities" element={<Celebrities />}></Route>
                  <Route path="celebrity/:id" element={<CelebrityDetails />}></Route>
                  <Route path="series" element={<Series />}></Route>
                  <Route path="login" element={<Login />}></Route>
                  <Route path="signup" element={<Signup />}></Route>
                  <Route path="*" element={<Error />} />
                </Route>
        </Routes>
      </>
    )
  }
  
  export default Routing