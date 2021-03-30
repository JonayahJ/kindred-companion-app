import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PhysicalSlider from '../CC/sliders/PhysicalSlider';
import SocialSlider from '../CC/sliders/SocialSlider';
import MentalSlider from '../CC/sliders/MentalSlider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Attributes() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Typography variant="h5">
            Attributes
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
          Attribute ratings range from 1 (poor) through 2 (average) to 5 (peak ability), although ratings of 0 are possible. In an Attribute, 0 indicates actual debility.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhysicalSlider />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SocialSlider />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MentalSlider />
        </Grid>
      </Grid>
    </div>
  );
}