import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    margin: "1.5rem",
    marginBottom: "3rem"
  },
}));

const marks = [
  {
    value: 1,
    label: '1 pt',
  },
  {
    value: 2,
    label: '2 pts',
  },
  {
    value: 3,
    label: '3 pts',
  },
  {
    value: 4,
    label: '4 pts',
  },
  {
    value: 5,
    label: '5 pts',
  },
];

function valuetext(value) {
  return `${value} point`;
}

export default function MentalSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="mental-slider" >
      <Grid spacing={10}>
        {/* Mental */}
        <Typography variant="h6">
          Mental Attributes
        </Typography>
        {/* Intelligence */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Intelligence
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="intelligence-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Wits */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Wits
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="wits-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Resolve */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Resolve
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="resolve-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
      </Grid>
    </div>
  );
}
