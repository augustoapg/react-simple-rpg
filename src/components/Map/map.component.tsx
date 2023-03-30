import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialMap } from './map.constants';
import { RootState } from '../../app/store';
import { move } from '../../redux/heroSlice';
import { DIRECTION } from '../../types';
import { ReactComponent as HeroSVG } from '../../assets/hero.svg';
import { ReactComponent as MonsterSVG } from '../../assets/monster.svg';
import { initialMonstersPositions } from '../../redux/monsterSlice';
import mapStyles from './map.module.css';

export const Map = () => {
  const heroPosition = useSelector((state: RootState) => state.hero.position);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("RUNNING")
		window.addEventListener("keyup", handleKeyUp);
		return () => window.removeEventListener("keyup", handleKeyUp);
	}, []);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      dispatch(move(DIRECTION.UP));
    } else if (e.key === 'ArrowDown') {
      dispatch(move(DIRECTION.DOWN));
    } else if (e.key === 'ArrowLeft') {
      dispatch(move(DIRECTION.LEFT));
    } else if (e.key === 'ArrowRight') {
      dispatch(move(DIRECTION.RIGHT));
    }
  };

  const getImage = (row: number, col: number) => {
    if (heroPosition.row === row && heroPosition.column === col) {
      return <HeroSVG />;
    } else if (initialMonstersPositions[row]?.[col] !== undefined) {
      return <MonsterSVG />;
    } else {
      return null;
    }
  };

  const createMap = () => {
    let mapRender = [];

    for (const row in initialMap) {
      let mapCols = [];

      for (let col = 0; col < initialMap[row].length; col++) {
        const cell = initialMap[row][col];
        const image = getImage(parseInt(row), col);
        mapCols.push(
          <td className={mapStyles[cell.style]} key={`row-${row}-col-${col}`}>
            {image}
          </td>,
        );
      }

      mapRender.push(
        <tr id={'row' + row} key={`row-${row}`}>
          {mapCols}
        </tr>,
      );
    }
    return mapRender;
  };

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <table className={mapStyles.map}>
        <tbody>{createMap()}</tbody>
      </table>
      {/* <Grid item xs={4}>
                <Grid container className="container">
                  <Grid item xs={12}>
                    <button onClick={() => move('UP')}>UP</button>
                  </Grid>
                  <Grid container className="container">
                    <Grid item xs={12}>
                      <button onClick={() => move('LEFT')}>LEFT</button>
                      <button onClick={() => move('DOWN')}>DOWN</button>
                      <button onClick={() => move('RIGHT')}>RIGHT</button>
                    </Grid>
                  </Grid>
                </Grid>
          </Grid> */}
    </div>
  );
};
