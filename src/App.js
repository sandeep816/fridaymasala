import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Trending from "./pages/Trending";
import Celebrities from "./pages/Celebrities";
import Error from "./pages/Error";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} >
                    <Route path="movies" element={<Movies />} />
                    <Route path="series" element={<Series />} />
                    <Route path="celebrities" element={<Celebrities />} />
                    <Route path="trending" element={<Trending />} />
                    <Route index element={<Home />} />
                </Route>

                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default App;