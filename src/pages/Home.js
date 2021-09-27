import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
	const [pokemons, setPokemons] = useState([]);
	const [next, setNext] = useState(null);
	const [prev, setPrev] = useState(null);
	// const [newPokemons, setNewPokemons] = useState([]);

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=8")
			.then((response) => {
				setPokemons(response.data.results);
				setPrev(response.data.previous);
				setNext(response.data.next);

				// fetchDetailedPokemon(response.data.results.map((e) => e.url));
			});
	}, []);

	// function fetchDetailedPokemon(list) {
	// 	const tempPokemon = [];

	// 	list.forEach((e) => {
	// 		axios.get(e).then((response) => {
	// 			tempPokemon.push(response.data);
	// 		});
	// 	});

	// 	console.log(1, tempPokemon);
	// 	setNewPokemons(tempPokemon);
	// }

	function changePage(url) {
		if (url) {
			axios.get(url).then((response) => {
				setPokemons(response.data.results);
				setPrev(response.data.previous);
				setNext(response.data.next);
			});
		}
	}

	if (!pokemons[0]) {
		return (
			<div className="flex h-screen">
				<p className="m-auto text-4xl">Loading...</p>
			</div>
		);
	} else {
		return (
			<div className="h-screen p-4 bg-gray-50 flex flex-col justify-around">
				<h1 className=" my-4 text-3xl font-bold">Pokedex</h1>

				<div className=" grid grid-cols-2 gap-4">
					{pokemons.map((pokemon, i) => (
						<Link
							to={`/detail/${pokemon.name}`}
							key={i}
							className="flex bg-green-500 h-32 rounded-lg"
						>
							<div className="m-auto text-lg text-gray-50 font-bold">
								{pokemon.name}
							</div>
						</Link>
					))}
				</div>

				<div className="flex justify-around h-6 text-xl font-bold">
					<div
						onClick={(e) => {
							changePage(prev);
						}}
						className={prev ? "" : "text-gray-400"}
					>
						{"< Prev"}
					</div>
					<div
						onClick={(e) => {
							changePage(next);
						}}
						className={next ? "" : "text-gray-400"}
					>
						{"Next >"}
					</div>
				</div>
			</div>
		);
	}
}
