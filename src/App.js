import "./App.css";
// import pic from "";
import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import TvShows from "./pages/TvShows/TvShows";
import Categories from "./pages/Categories/Categories";
import MovieCards from "./components/MovieCards/MovieCards";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/movies"} element={<Movies />} />
					<Route path={"/tv-show"} element={<TvShows />} />
					<Route path={"/categories"} element={<Categories />} />
				</Routes>
			</BrowserRouter>

			<MovieCards />
			<MovieCard />
		</div>
	);
}

export default App;
