import { Route, Router, Routes } from "react-router-dom";
import "./assets/style/main.scss"
import Header from "./layout/header/header";
import Bosh_sahifa from "./pages/boshsahifa/index"
import Filmlar from "./pages/filmlar/index"
import Seriallar from "./pages/seriallar/serial"
import Multfilmlar from "./pages/multfilmlar/index"
import Obunalar from "./pages/obunalar/index"
import Boshqalar from "./pages/boshqalar/index"
import TV from "./pages/tv";
import Footer from "./layout/footer/footer";
import MovieInfo from "./pages/movie-info";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Bosh_sahifa/>} />
        <Route path="/tv" element={<TV/>} />
        <Route path="/filmlar" element={<Filmlar />} />
        <Route path="/seriallar" element={<Seriallar />} />
        <Route path="/multfilmlar" element={<Multfilmlar />} />
        <Route path="/obunalar" element={<Obunalar />} />
        <Route path="/boshqalar" element={<Boshqalar />} />
        <Route path="/movie/:movieId" element={<MovieInfo />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
