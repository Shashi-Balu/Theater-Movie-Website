import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import MovieCards from "../../components/MovieCards/MovieCards";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

function Home() {
	return (
		<>
			<div className="home-topbar">
				<Navbar className="home-navbar" />
				<Carousel className="home-carousel" />
			</div>

			<MovieCards />
		</>
	);
}

export default Home;
