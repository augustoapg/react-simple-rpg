import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stats } from '.';

const initialStats: Stats = {
  hp: { label: 'HP', value: 100 },
  attack: { label: 'Attack', value: 10 },
  defense: { label: 'Defense', value: 10 },
  mana: { label: 'Mana', value: 50 },
};

const displayPlayerStats = (playerStats: Stats) => {
  let elems = [];
  let key: keyof Stats;
  for (key in playerStats) {
    let item = playerStats[key];
    elems.push(
      <div key={key}>
        {item['label']}: {item['value']}
      </div>,
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
