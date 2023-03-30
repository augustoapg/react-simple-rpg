import { useState } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Map } from './components/Map';
import Player from './components/PlayerStats/player.component';

function App() {
  const [battleOn, setBattleOn] = useState(false);
  return (
    <Grid container className="container" spacing={3}>
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
        <div style={{ backgroundColor: 'yellow' }}>stats</div>
      </Grid>
    </Grid>
  );
}

export default App;
