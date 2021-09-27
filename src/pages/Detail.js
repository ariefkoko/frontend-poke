import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "../components/About";
import Stats from "../components/Stats";

export default function Detail() {
	const { name } = useParams();
	const [pokemon, setPokemon] = useState({});
	const [currentTab, setCurrentTab] = useState("about");

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((response) => setPokemon(response.data));
	}, []);

	function changeTab(tab) {
		setCurrentTab(tab);
	}

	if (!pokemon.name) {
		return (
			<div className="flex h-screen">
				<p className="m-auto text-4xl">Loading...</p>
			</div>
		);
	} else {
		return (
			<div
				className={`flex flex-col h-screen  justify-between relative  ${
					pokemon?.types[0].type.name === "fire" ? "bg-red-400" : "bg-green-400"
				} ${pokemon?.types[0].type.name === "water" ? "bg-blue-400" : ""}`}
			>
				<div className=" px-4 py-8 text-gray-50">
					<div className="text-4xl font-bold">{pokemon.name}</div>

					<div className=" leading-4 text-right font-bold">
						{"#" + pokemon.id?.toString().padStart(3, "0")}
					</div>

					<div className="flex space-x-2">
						{pokemon.types?.map((e, i) => (
							<div
								key={i}
								className="rounded-full bg-gray-50 bg-opacity-30 px-5 py-1 shadow-sm"
							>
								{e.type.name}
							</div>
						))}
					</div>
				</div>

				<div className=" bg-gray-50 h-2/4 rounded-t-3xl p-8">
					<div className="flex justify-between width-full ">
						<div
							onClick={(e) => changeTab("about")}
							className={
								"py-4 " +
								(currentTab === "about"
									? "border-b-2 border-blue-800"
									: "text-gray-500")
							}
						>
							About
						</div>
						<div
							onClick={(e) => changeTab("stats")}
							className={
								"py-4 " +
								(currentTab === "stats"
									? "border-b-2 border-blue-800"
									: "text-gray-500")
							}
						>
							Base Stats
						</div>
						<div
							onClick={(e) => changeTab("evolution")}
							className={
								"py-4 " +
								(currentTab === "evolution"
									? "border-b-2 border-blue-800"
									: "text-gray-500")
							}
						>
							Evolution
						</div>
						<div
							onClick={(e) => changeTab("moves")}
							className={
								"py-4 " +
								(currentTab === "moves"
									? "border-b-2 border-blue-800"
									: "text-gray-500")
							}
						>
							Moves
						</div>
					</div>

					<div className=" my-6 h-full">
						{currentTab === "about" && <About pokemon={pokemon} />}
						{currentTab === "stats" && <Stats pokemon={pokemon} />}
					</div>
				</div>

				<div className="absolute w-full top-1/4">
					<img
						src={pokemon.sprites?.other.dream_world.front_default}
						className="m-auto max-h-52"
					/>
				</div>
			</div>
		);
	}
}
