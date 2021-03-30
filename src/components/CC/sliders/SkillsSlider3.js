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

export default function SkillsSlider3() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="slider3" >
      <Grid spacing={10}>
        {/* Academics */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Academics
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="academics-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Awareness */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Awareness
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="awareness-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Finance */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Finance
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="finance-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Investigation */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Investigation
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="investigation-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Medicine */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Medicine
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="medicine-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Occult */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Occult
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="occult-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Politics */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Politics
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="politics-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Science */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Science
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="science-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={5}
          />
        </Grid>
        <br /><br />
        {/* Technology */}
        <Grid item xs={10} sm={4}>
          <Typography >
            Technology
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="technology-slider"
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
