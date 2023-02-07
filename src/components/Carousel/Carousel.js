import React, { useEffect, useState } from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
// import { FadeIn } from "react-fade-in";
import "./Carousel.css";

function Carousel() {
	const url = "https://api.themoviedb.org/3";
	const api_key = "b6173b294a7ff9f5e53d7acd70d287ba";
	const [carouselData, setCarouselData] = useState([]);

	async function carouselApi() {
		const carouselApi = await (
			await fetch(`${url}/trending/movie/week?api_key=${api_key}`)
		).json();
		const carouselApiData = carouselApi.results;
		// console.log(carouselApiData);

		setCarouselData(carouselApiData);
	}

	const imgUrl = carouselData.map(
		(movie) => `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
	);

	const title = carouselData.map((title) => title.title);
	const rating = carouselData.map((rating) => rating.vote_average.toFixed(1));
	const release_date = carouselData.map(
		(release_date) => release_date.release_date
	);
	const description = carouselData.map((description) => description.overview);

	let [index, setIndex] = useState(0);
	useEffect(() => {
		carouselApi();
	}, []);
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(index++ % 20);
		}, 2500);
		return () => clearInterval(interval);
	}, [index]);
	console.log(release_date[index]);
	return (
		<div className="carousel-container">
			<div className="carousel-image-container">
				<img
					src={imgUrl[index]}
					alt={title[index]}
					className="carousel-image"
				/>
			</div>

			<div className="carousel-data-container">
				<p className="carousel-title">{title[index]}</p>

				<div className="carousel-data">
					{rating[index] !== 0 ? (
						<div className="carousel-rating">
							<StarBorderSharpIcon className="carousel-star" />
							<p className="carousel-rating-data">
								{rating[index]}
								<span>/10</span>
							</p>
						</div>
					) : null}
					<p className="carousel-release-date">
						{release_date[index]}
					</p>
				</div>

				<p className="carousel-description">{description[index]}</p>
			</div>
		</div>
	);
}

export default Carousel;

// {carouselData.map((movie) => (
// 	<>
// 		<img
// 			src={
// 				`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`[
// 					index
// 				]
// 			}
// 		/>
// 		<p>{title.title}</p>
// 	</>
// ))}
