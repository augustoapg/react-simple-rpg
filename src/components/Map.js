import { Typography, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import hero from "../assets/images/hero.svg";

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

function Map() {
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
			<Grid item xs={12}>
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
				<Grid
					container
					className="container"
					direction="row"
					justify="center"
					alignItems="center"
					alignContent="center"
				>
					<Grid item xs={12}>
						<button onClick={() => move("UP", map, setMap)}>
							UP
						</button>
					</Grid>
					<Grid
						container
						className="container"
						direction="row"
						justify="center"
						alignItems="center"
						alignContent="center"
					>
						<Grid item xs={12}>
							<button onClick={() => move("LEFT", map, setMap)}>
								LEFT
							</button>
							<button onClick={() => move("DOWN", map, setMap)}>
								DOWN
							</button>
							<button onClick={() => move("RIGHT", map, setMap)}>
								RIGHT
							</button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Map;
