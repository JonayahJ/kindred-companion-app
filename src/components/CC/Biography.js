import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        margin: theme.spacing(1),
        width: 190,
      },
  }));

export default function Biography() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        clan: '',
        generation: '',
        predator: ''
    });
    const handleChange = (event) => {
    const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Biography
      </Typography>
      <Grid container spacing={3}>
        {/* KINDRED NAME */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="kindredName"
            name="kindredName"
            label="Kindred name"
            fullWidth
          />
        </Grid>
        {/* HUMAN NAME */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="humanName"
            name="humanName"
            label="Human name"
            fullWidth
          />
        </Grid>
        {/* Dropdown Menu - CLAN */}
        <FormControl variant="filled" className={classes.formControl} required>
        <InputLabel htmlFor="filled-clan-native-simple">Clan</InputLabel>
        <Select
          native
          value={state.clan}
          onChange={handleChange}
          inputProps={{
            name: 'clan',
            id: 'filled-clan-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>Brujah</option>
          <option value={2}>Gangrel</option>
          <option value={3}>Malkavian</option>
          <option value={4}>Nosferatu</option>
          <option value={5}>Toreador</option>
          <option value={6}>Tremere</option>
          <option value={7}>Venture</option>
          <option value={8}>Caitiff</option>
          <option value={9}>Thin-Blooded</option>
        </Select>
        </FormControl>
        {/* Dropdown Menu - Generation */}
        <FormControl variant="filled" className={classes.formControl} required>
        <InputLabel htmlFor="filled-generation-native-simple">Generation</InputLabel>
        <Select
          native
          value={state.generation}
          onChange={handleChange}
          inputProps={{
            name: 'generation',
            id: 'filled-generation-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={4}>4th</option>
          <option value={5}>5th</option>
          <option value={6}>6th</option>
          <option value={7}>7th</option>
          <option value={8}>8th</option>
          <option value={9}>9th</option>
          <option value={10}>10th</option>
          <option value={11}>11th</option>
          <option value={12}>12th</option>
          <option value={13}>13th</option>
          <option value={14}>14th</option>
          <option value={15}>15th</option>
          <option value={16}>16th</option>
        </Select>
        </FormControl>
        {/* Dropdown Menu - Predator */}
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-predator-native-simple">Predator</InputLabel>
        <Select
          native
          value={state.predator}
          onChange={handleChange}
          inputProps={{
            name: 'predator',
            id: 'filled-predator-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>Alleycat</option>
          <option value={2}>Bagger</option>
          <option value={3}>Blood Leech</option>
          <option value={4}>Cleaver</option>
          <option value={5}>Consensualist</option>
          <option value={6}>Farmer</option>
          <option value={7}>Osiris</option>
          <option value={8}>Sandman</option>
          <option value={9}>Scene Queen</option>
          <option value={10}>Siren</option>
        </Select>
        </FormControl>
        {/* DOB */}
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                variant="filled"
                label="Date of Birth"
                type="date"
                defaultValue="1990-02-13"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </form>
        {/* DOD */}
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                variant="filled"
                label="Date of Death"
                type="date"
                defaultValue="2006-06-29"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </form>
        {/* SIRE */}
        <Grid item xs={12} sm={6}>
          <TextField 
            id="sire" 
            name="sire" 
            label="Sire" 
            fullWidth />
        </Grid>
        {/* CHRONICLE */}
        <Grid item xs={12} sm={6}>
          <TextField
            id="chronicle"
            name="chronicle"
            label="Chronicle"
            fullWidth
          />
        </Grid>
        {/* TRUE AGE */}
        <Grid item xs={12} sm={6}>
            <TextField
                id="trueAge"
                name="trueAge"
                label="True Age"
                fullWidth
            >
            </TextField>
        </Grid>
        {/* APPARENT AGE */}
        <Grid item xs={12} sm={6}>
            <TextField
                id="apparentAge"
                name="apparentAge"
                label="Apparent Age"
                fullWidth
            >
            </TextField>
        </Grid>
        
        {/* CONCEPT */}
        <Grid item xs={12}>
          <TextField
            id="concept"
            name="concept"
            label="Concept"
            fullWidth
          />
        </Grid>
        {/* AMBITION */}
        <Grid item xs={12}>
          <TextField
            id="ambition"
            name="ambition"
            label="Ambition"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

