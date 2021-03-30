import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 600,
    margin: "1.5rem",
    marginBottom: "3rem"
  },
});

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

export default function SkillsSlider1() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="slider1" >
      <Grid spacing={10}>
        {/* Athletics */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Athletics
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="athletics-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Brawl */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Brawl
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="brawl-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Craft */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Craft
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="craft-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        {/* Drive */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Drive
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="drive-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        {/* Firearms */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Firearms
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="firearms-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        {/* Melee */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Melee
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="melee-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        {/* Larceny */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Larceny
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="larceny-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        {/* Stealth */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Stealth
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="stealth-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        {/* Survival */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Survival
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="survival-slider"
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
