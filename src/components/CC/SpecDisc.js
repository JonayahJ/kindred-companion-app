import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SpecDisc() {
  const classes = useStyles();
  const [points, setPoints] = React.useState('');
  const handleChange = (event) => {
    setPoints(event.target.value);
  };

  return (
    <div className={classes.root}>
        <FormControl className={classes.margin}>
            <InputLabel htmlFor="discipline-textbox" >Discipline</InputLabel>
            <BootstrapInput id="discipline-textbox" />
        </FormControl>
        <FormControl className={classes.margin}>
            <InputLabel id="point-label">Points</InputLabel>
            <Select
            labelId="points-select-label"
            id="points-select"
            value={points}
            onChange={handleChange}
            input={<BootstrapInput />}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            </Select>
        </FormControl>
        <TextField
            id="outlined-full-width"
            label="Discipline"
            style={{ margin: 8, paddingRight: 10 }}
            placeholder="Specialty"
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            id="outlined-full-width"
            label="Discipline"
            style={{ margin: 8, paddingRight: 10 }}
            placeholder="Specialty"
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            id="outlined-full-width"
            label="Discipline"
            style={{ margin: 8, paddingRight: 10 }}
            placeholder="Specialty"
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            id="outlined-full-width"
            label="Discipline"
            style={{ margin: 8, paddingRight: 10 }}
            placeholder="Specialty"
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            id="outlined-full-width"
            label="Discipline"
            style={{ margin: 8, paddingRight: 10 }}
            placeholder="Specialty"
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
        />
    </div>
  );
}