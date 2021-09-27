export default function About(pokemon) {
	return (
		<div className="space-y-4">
			<div className="flex">
				<p className="w-1/4 text-gray-600 ">Species</p>
				<p className="ml-4">{pokemon.pokemon.species?.name}</p>
			</div>
			<div className="flex">
				<p className="w-1/4 text-gray-600">Height</p>
				<p className="ml-4">{pokemon.pokemon?.height} cm</p>
			</div>
			<div className="flex">
				<p className="w-1/4 text-gray-600">Weight</p>
				<p className="ml-4">
					{pokemon.pokemon.weight?.toString().split("").join(".")} kg
				</p>
			</div>
			<div className="flex">
				<p className="w-1/4 text-gray-600">Abilities</p>
				<p className="ml-4">
					{pokemon.pokemon.abilities?.map((e) => e.ability.name).join(", ")}
				</p>
			</div>
		</div>
	);
}
