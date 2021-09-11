import { Typography, Grid } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
import hero from "../assets/images/hero.svg";
import monster from "../assets/images/monster.svg";

const initialMap = {
	0: [
		{ style: "path", contains: hero, containsAlt: "hero" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: null, containsAlt: "" },
		{ style: "path", contains: monster, containsAlt: "monster" },
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

function Map({ battleOn, setBattleOn }) {
	// const [map, setMap] = useState(initialMap);
	const map = initialMap;
	const [heroPosition, setHeroPosition] = useState({ row: 0, column: 0 });
	const heroRef = useRef({ row: 0, column: 0 });

	useEffect(() => {
		window.addEventListener("keyup", (e) => handleKeyUp(e));
		return () => window.removeEventListener("keyup", (e) => handleKeyUp(e));
	}, []);

	useEffect(() => {
		console.log(heroPosition);
		heroRef.current = heroPosition;
		createMap();
	}, [heroPosition]);

	const createMap = () => {
		let mapRender = [];

		for (const row in map) {
			let mapCols = [];

			for (let col = 0; col < map[row].length; col++) {
				const cell = map[row][col];
				const image = getImage(row, col);
				mapCols.push(<td className={cell.style}>{image}</td>);
			}

			mapRender.push(<tr id={"row" + row}>{mapCols}</tr>);
		}
		return mapRender;
	};

	const getImage = (row, col) => {
		if (
			heroPosition.row === parseInt(row) &&
			heroPosition.column === parseInt(col)
		) {
			return <img src={hero} alt={"hero"} />;
		} else if (map[row][col].contains !== null) {
			return <img src={map[row][col].contains} alt={map[row][col].alt} />;
		} else {
			return null;
		}
	};

	const move = (direction) => {
		let { rowDiff, colDiff } = getRowColDiff(direction);
		const { row, column } = heroRef.current;

		map[row][column].contains = null;
		map[row][column].alt = "";

		// this tells react to take the current object before updating
		setHeroPosition((heroPosition) => {
			return {
				...heroPosition,
				row: heroPosition.row + rowDiff,
				column: heroPosition.column + colDiff,
			};
		});
	};

	const getRowColDiff = (direction) => {
		let rowDiff = 0;
		let colDiff = 0;
		if (direction === "RIGHT") {
			colDiff = 1;
		} else if (direction === "LEFT") {
			colDiff = -1;
		} else if (direction === "UP") {
			rowDiff = -1;
		} else if (direction === "DOWN") {
			rowDiff = 1;
		}

		if (!isValidMove(rowDiff, colDiff)) {
			rowDiff = 0;
			colDiff = 0;
		}

		return { rowDiff: rowDiff, colDiff: colDiff };
	};

	const isValidMove = (rowDiff, colDiff) => {
		const { row, column } = heroRef.current;
		const newRow = row + rowDiff;
		const newCol = column + colDiff;

		return (
			newRow >= 0 &&
			newRow < Object.keys(map).length &&
			newCol >= 0 &&
			newCol < map[0].length &&
			map[newRow][newCol].style !== "wall"
		);
	};

	// const move = (direction) => {
	// 	let { row, column } = heroPosition;

	// 	setMap((map) => {
	// 		let newMap = { ...map };

	// 		console.log("newMap");
	// 		console.log(newMap);

	// 		if (direction === "RIGHT") {
	// 			let newPosition = newMap[row][column + 1];
	// 			if (
	// 				column + 1 < newMap[row].length &&
	// 				newPosition["style"] !== "wall"
	// 			) {
	// 				map[row][column]["contains"] = null;
	// 				map[row][column]["containsAlt"] = "";
	// 				newPosition["contains"] = hero;
	// 				newPosition["containsAlt"] = "hero";
	// 			}
	// 		} else if (direction === "LEFT") {
	// 			let newPosition = newMap[row][column - 1];
	// 			if (column - 1 >= 0 && newPosition["style"] !== "wall") {
	// 				map[row][column]["contains"] = null;
	// 				map[row][column]["containsAlt"] = "";
	// 				newPosition["contains"] = hero;
	// 				newPosition["containsAlt"] = "hero";
	// 			}
	// 		} else if (direction === "UP") {
	// 			let newPosition = newMap[row - 1][column];
	// 			if (row - 1 >= 0 && newPosition["style"] !== "wall") {
	// 				map[row][column]["contains"] = null;
	// 				map[row][column]["containsAlt"] = "";
	// 				newMap[row - 1][column]["contains"] = hero;
	// 				newMap[row - 1][column]["containsAlt"] = "hero";
	// 			}
	// 		} else if (direction === "DOWN") {
	// 			let newPosition = newMap[row + 1][column];
	// 			if (
	// 				row + 1 < Object.entries(newMap).length &&
	// 				newPosition["style"] !== "wall"
	// 			) {
	// 				map[row][column]["contains"] = null;
	// 				map[row][column]["containsAlt"] = "";
	// 				newPosition["contains"] = hero;
	// 				newPosition["containsAlt"] = "hero";
	// 			}
	// 		}
	// 		return newMap;
	// 	});

	// 	console.log(map);

	// 	for (const row in map) {
	// 		const rowInt = parseInt(row);
	// 		for (let i = 0; i < map[rowInt].length; i++) {
	// 			if (map[rowInt][i].containsAlt === "hero") {
	// 				setHeroPosition({ row: rowInt, column: i });
	// 			}
	// 		}
	// 	}

	// 	console.log("new hero position");
	// 	console.log(heroPosition);

	// 	row = heroPosition.row;
	// 	column = heroPosition.column;

	// 	if (map[row][column]["alt"] === "monster") {
	// 		setBattleOn(true);
	// 	}
	// };

	const handleKeyUp = (e) => {
		if (e.key === "ArrowUp") {
			move("UP");
		} else if (e.key === "ArrowDown") {
			move("DOWN");
		} else if (e.key === "ArrowLeft") {
			move("LEFT");
		} else if (e.key === "ArrowRight") {
			move("RIGHT");
		}
	};

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
						<button onClick={() => move("UP")}>UP</button>
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
							<button onClick={() => move("LEFT")}>LEFT</button>
							<button onClick={() => move("DOWN")}>DOWN</button>
							<button onClick={() => move("RIGHT")}>RIGHT</button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Map;
