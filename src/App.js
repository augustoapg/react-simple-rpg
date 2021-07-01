import "./App.css";
import { Grid, Typography } from "@material-ui/core";
import hero from "./assets/images/hero.svg";
import { useState, useEffect } from "react";

const initialMap = {
	0: [
		{ style: "path", contains: hero, containsAlt: "hero" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
	],
	1: [
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
	],
	2: [
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
	],
	3: [
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
	],
	4: [
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
	],
	5: [
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
	],
	6: [
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
	],
	7: [
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "wall", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
	],
};

const createMap = (map) => {
	let mapRender = [];

	for (const row in map) {
		let mapCols = [];
		map[row].forEach((cell) => {
			const image =
				cell.contains !== null ? (
					<img src={cell.contains} alt={cell.containsAlt} />
				) : null;
			mapCols.push(<td className={cell.style}>{image}</td>);
		});

		mapRender.push(<tr id={"row" + row}>{mapCols}</tr>);
	}
	return mapRender;
};

const move = (direction, map, setMap) => {
	let heroPosition = { row: 0, column: 0 };

	for (const row in map) {
		const rowInt = parseInt(row);
		for (let i = 0; i < map[rowInt].length; i++) {
			if (map[rowInt][i].containsAlt === "hero") {
				heroPosition = { row: rowInt, column: i };
			}
		}
	}

	let { row, column } = heroPosition;
	console.log(row, column);

	setMap((map) => {
		let newMap = { ...map };

		if (direction === "RIGHT") {
			let newPosition = newMap[row][column + 1];
			if (
				column + 1 < newMap[row].length &&
				newPosition["style"] !== "wall"
			) {
				map[row][column]["contains"] = null;
				map[row][column]["containsAlt"] = "";
				newPosition["contains"] = hero;
				newPosition["containsAlt"] = "hero";
			}
		} else if (direction === "LEFT") {
			let newPosition = newMap[row][column - 1];
			if (column - 1 >= 0 && newPosition["style"] !== "wall") {
				map[row][column]["contains"] = null;
				map[row][column]["containsAlt"] = "";
				newMap[row][column - 1]["contains"] = hero;
				newMap[row][column - 1]["containsAlt"] = "hero";
			}
		} else if (direction === "UP") {
			console.log(`row ${row}`);

			if (row - 1 >= 0 && newMap[row - 1][column]["style"] !== "wall") {
				map[row][column]["contains"] = null;
				map[row][column]["containsAlt"] = "";
				newMap[row - 1][column]["contains"] = hero;
				newMap[row - 1][column]["containsAlt"] = "hero";
			}
		} else if (direction === "DOWN") {
			if (
				row + 1 < Object.entries(newMap).length &&
				newMap[row + 1][column]["style"] !== "wall"
			) {
				map[row][column]["contains"] = null;
				map[row][column]["containsAlt"] = "";
				newMap[row + 1][column]["contains"] = hero;
				newMap[row + 1][column]["containsAlt"] = "hero";
			}
		}
		return newMap;
	});
};

const handleKeyUp = (e, map, setMap) => {
	console.log(e);
	if (e.key === "ArrowUp") {
		move("UP", map, setMap);
	} else if (e.key === "ArrowDown") {
		move("DOWN", map, setMap);
	} else if (e.key === "ArrowLeft") {
		move("LEFT", map, setMap);
	} else if (e.key === "ArrowRight") {
		move("RIGHT", map, setMap);
	}
};

function App() {
	const [map, setMap] = useState(initialMap);

	useEffect(() => {
		window.addEventListener("keyup", (e) => handleKeyUp(e, map, setMap));

		return () =>
			window.removeEventListener("keyup", (e) =>
				handleKeyUp(e, map, setMap)
			);
	}, []);

	return (
		<Grid
			container
			className="container"
			direction="row"
			justify="space-evenly"
			alignItems="center"
			spacing={3}
		>
			<Grid item xs={8}>
				<Typography variant="h3" component="h3">
					Map
				</Typography>
				<div style={{ backgroundColor: "yellow" }}>
					<table className="map">
						<tbody>{createMap(map)}</tbody>
					</table>
				</div>
			</Grid>
			<Grid item xs={4}>
				<Typography variant="h3" component="h3">
					Actions
				</Typography>
				<button onClick={() => move("UP", map, setMap)}>Move UP</button>
				<button onClick={() => move("DOWN", map, setMap)}>
					Move DOWN
				</button>
				<button onClick={() => move("LEFT", map, setMap)}>
					Move LEFT
				</button>
				<button onClick={() => move("RIGHT", map, setMap)}>
					Move Right
				</button>
				<div style={{ backgroundColor: "yellow" }}>act</div>
			</Grid>
			<Grid item xs={6}>
				<Typography variant="h3" component="h3">
					Stats Player
				</Typography>
				<div style={{ backgroundColor: "yellow" }}>stats</div>
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
