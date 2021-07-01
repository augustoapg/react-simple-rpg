import "./App.css";
import { Grid, Typography } from "@material-ui/core";
import Map from "./components/Map";
import Player from "./components/Player";

function App() {
	return (
		<Grid
			container
			className="container"
			direction="row"
			justify="space-evenly"
			alignItems="center"
			spacing={3}
		>
			<Grid item xs={12}>
				<Map />
			</Grid>
			<Grid item xs={6}>
				<Player />
			</Grid>
			<Grid item xs={6}>
				<Typography variant="h3" component="h3">
					Stats Monster
				</Typography>
				<div style={{ backgroundColor: "yellow" }}>stats</div>
			</Grid>
		</Grid>
	);
}

export default App;
