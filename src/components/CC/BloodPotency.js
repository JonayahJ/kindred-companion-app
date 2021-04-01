import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Blood droplet font awesome icon = tint, ex: <i class="fas fa-tint"></i>
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faTint)

export default function BloodPotency() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Blood Potency <FontAwesomeIcon icon="tint" color="red" />
      </Typography>
      <Grid container spacing={3}>
        <Typography variant="h6" gutterBottom>
            Hello neonate! 
        </Typography>
      </Grid>
    </React.Fragment>
  );
}