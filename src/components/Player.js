import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";

const initialStats = {
	hp: { label: "HP", value: 100 },
	attack: { label: "Attack", value: 10 },
	Defense: { label: "Defense", value: 10 },
	Mana: { label: "Mana", value: 50 },
};

const displayPlayerStats = (playerStats) => {
	let elems = [];
	for (const key in playerStats) {
		let item = playerStats[key];
		elems.push(
			<div>
				{item["label"]}: {item["value"]}
			</div>
		);
	}
	return elems;
};

const Player = () => {
	const [playerStats, setPlayerStats] = useState(initialStats);

	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography variant="h3" component="h3">
					Player
				</Typography>
			</Grid>
			<Grid item xs={12}>
				{displayPlayerStats(playerStats)}
			</Grid>
		</Grid>
	);
};

export default Player;
