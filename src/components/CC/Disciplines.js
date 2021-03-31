import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SpecDisc from './SpecDisc';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Disciplines() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Typography variant="h5">
            Disciplines
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Blurb
          </Typography>
        </Grid>
        {/* Customized Select - POINTS */}
        <Grid item xs={12} sm={5} >
            <SpecDisc />
            <SpecDisc />
        </Grid>
        <Grid item xs={12} sm={5} style={{paddingLeft: '20px'}}>
            <SpecDisc />
            <SpecDisc />
        </Grid>
      </Grid>
    </div>
  );
}