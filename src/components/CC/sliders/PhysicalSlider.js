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

export default function PhysicalSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="physical-slider" >
      <Grid spacing={10}>
        {/* Physical */}
        <Typography variant="h6">
          Physical Attributes
        </Typography>
        {/* Strength */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Strength
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="strength-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Dexterity */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Dexterity
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="dexterity-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Stamina */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Stamina
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="stamina-slider"
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
