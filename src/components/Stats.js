export default function About(pokemon) {
	const hp = pokemon.pokemon.stats[0]?.base_stat;
	const attack = pokemon.pokemon.stats[1]?.base_stat;
	const defense = pokemon.pokemon.stats[2]?.base_stat;
	const spAtk = pokemon.pokemon.stats[3]?.base_stat;
	const spDef = pokemon.pokemon.stats[4]?.base_stat;

	return (
		<div className="space-y-4">
			<div className="flex">
				<p className="w-3/12 text-gray-600">HP</p>
				<p className="w-2/12 ">{hp}</p>
				<div className="flex w-7/12 ">
					<div
						className={
							"my-auto h-1 " + (hp < 50 ? "bg-red-500" : "bg-green-500")
						}
						style={{
							width: `${hp}%`,
						}}
					></div>
				</div>
			</div>
			<div className="flex">
				<p className="w-3/12 text-gray-600">Attack</p>
				<p className="w-2/12 ">{attack}</p>
				<div className="flex w-7/12 ">
					<div
						className={
							"my-auto h-1 " + (attack < 50 ? "bg-red-500" : "bg-green-500")
						}
						style={{
							width: `${attack}%`,
						}}
					></div>
				</div>
			</div>
			<div className="flex">
				<p className="w-3/12 text-gray-600">Defense</p>
				<p className="w-2/12 ">{defense}</p>
				<div className="flex w-7/12 ">
					<div
						className={
							"my-auto h-1 " + (defense < 50 ? "bg-red-500" : "bg-green-500")
						}
						style={{
							width: `${defense}%`,
						}}
					></div>
				</div>
			</div>
			<div className="flex">
				<p className="w-3/12 text-gray-600">Sp. Atk</p>
				<p className="w-2/12 ">{spAtk}</p>
				<div className="flex w-7/12 ">
					<div
						className={
							"my-auto h-1 " + (spAtk < 50 ? "bg-red-500" : "bg-green-500")
						}
						style={{
							width: `${spAtk}%`,
						}}
					></div>
				</div>
			</div>
			<div className="flex">
				<p className="w-3/12 text-gray-600">Sp. Def</p>
				<p className="w-2/12 ">{spDef}</p>
				<div className="flex w-7/12 ">
					<div
						className={
							"my-auto h-1 " + (spDef < 50 ? "bg-red-500" : "bg-green-500")
						}
						style={{
							width: `${spDef}%`,
						}}
					></div>
				</div>
			</div>
		</div>
	);
}
