import React, { useState } from "react";
import { url, api_key } from "../../apis/movieApi";

function MovieCard() {
	const [movieData, setMovieData] = useState([]);

	// const api = `${url}/movie/upcoming?api_key=${api_key}`;

	console.log(url);

	// async function movieApi() {
	// 	const movieApiData = await (
	// 		await fetch(`${url}/movie/upcoming?api_key=${api_key}`)
	// 	).json();

	// 	console.log(movieApiData);
	// }

	return <div>Card</div>;
}

export default MovieCard;
