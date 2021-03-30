import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SkillsSlider1 from './sliders/SkillsSlider1';
import SkillsSlider2 from './sliders/SkillsSlider2';
import SkillsSlider3 from './sliders/SkillsSlider3';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Skills() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Typography variant="h5">
            Skills
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Skill ratings range from 1 (poor) through 2 (average) to 5 (peak ability), although ratings of 0 are possible. In a Skill, 0 merely signifies no specific training or experience. A Skill of 3 might indicate significant experience, a Skill of 4 means an expert level; someone with Skill 5 is likely the best in the city or even in the nation. Most people get by perfectly well with 2 in their main Skill.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SkillsSlider1 />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SkillsSlider2 />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SkillsSlider3 />
        </Grid>
      </Grid>
    </div>
  );
}