import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function Biography() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Biography
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="kindredName"
            name="kindredName"
            label="Kindred name"
            fullWidth
          />
        </Grid>
        {/* Dropdown Menu */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="clan"
            name="clan"
            label="Clan"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            id="sire" 
            name="sire" 
            label="Sire" 
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="chronicle"
            name="chronicle"
            label="Chronicle"
            fullWidth
          />
        </Grid>
        {/* Dropdown Menu */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="generation"
            name="generation"
            label="Generation"
            fullWidth
          />
        </Grid>
        
        {/* Dropdown Menu */}
        <Grid item xs={12} sm={6}>
          <TextField
            id="predation"
            name="predation"
            label="Predator Style"
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
            <TextField
                id="trueAge"
                name="trueAge"
                label="True Age"
                fullWidth
            >
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                id="apparentAge"
                name="apparentAge"
                label="Apparent Age"
                fullWidth
            >
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                id="dateOfBirth"
                name="dateOfBirth"
                label="Date of Birth"
                fullWidth
            >
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                id="dateOfDeath"
                name="dateOfDeath"
                label="Date of Death"
                fullWidth
            >
            </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="concept"
            name="concept"
            label="Concept"
            fullWidth
          />
        </Grid>
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