import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import InvertColors from '@material-ui/icons/InvertColors';
import InvertColorsOff from '@material-ui/icons/InvertColorsOff';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Blood droplet font awesome icon = tint, ex: <i class="fas fa-tint"></i>
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faTint)

export default function BloodPotency() {
  const [state, setState] = React.useState({
    checked1: true,
    checked2: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Blood Potency <FontAwesomeIcon icon="tint" color="red" />
      </Typography>
      <Grid container >
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox icon={<InvertColorsOff />} checkedIcon={<InvertColors />} name="checked1" />}
          />
          <FormControlLabel
            control={<Checkbox icon={<InvertColorsOff />} checkedIcon={<InvertColors />} name="checked2" />}
          />
          <FormControlLabel
            control={<Checkbox icon={<InvertColorsOff />} checkedIcon={<InvertColors />} name="checked3" />}
          />
          <FormControlLabel
            control={<Checkbox icon={<InvertColorsOff />} checkedIcon={<InvertColors />} name="checked4" />}
          />
          <FormControlLabel
            control={<Checkbox icon={<InvertColorsOff />} checkedIcon={<InvertColors />} name="checked5" />}
          />
          <FormControlLabel
            control={<Checkbox icon={<InvertColorsOff />} checkedIcon={<InvertColors />} name="checked6" />}
          />
          <FormControlLabel
            control={<Checkbox icon={<InvertColorsOff />} checkedIcon={<InvertColors />} name="checked7" />}
          />
          <FormControlLabel
            control={<Checkbox icon={<InvertColorsOff />} checkedIcon={<InvertColors />} name="checked8" />}
          />
          <FormControlLabel
            control={<Checkbox icon={<InvertColorsOff />} checkedIcon={<InvertColors />} name="checked9" />}
          />
          <FormControlLabel
            control={<Checkbox icon={<InvertColorsOff />} checkedIcon={<InvertColors />} name="checked10" />}
          />
        </FormGroup>
      </Grid>
    </React.Fragment>
  );
}