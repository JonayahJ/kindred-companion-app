import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';

export default function Attributes() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Attributes
      </Typography>
      <Grid container spacing={3}>
        <Typography variant="h6" gutterBottom>
            Hello neonate!
        </Typography>
      </Grid>
    </React.Fragment>
  );
}