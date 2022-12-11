import { Grid, Paper, Avatar, TextField, Checkbox, Button } from '@mui/material'
import React from 'react'
import { FormGroup, FormControlLabel } from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useState } from 'react';


const Adform = () => {
    const handleClick = () => {
        console.log("Hi himanshu going good");
    }

    const paperstyle = { padding: 20, height: 'fitContent', width: '350px', margin: '20px auto' }
    const avatarstyle = { backgroundColor: 'black' }
    const texfield = { padding: 5 }

    const [name, setname] = useState('');
    const [age, setAge] = useState('');
    const [regDate, setDate] = useState('');

    return (
        <>
            <Grid>
                <Paper elevation={10} style={paperstyle}>
                    <Grid align='center'>
                        <Avatar style={avatarstyle}><FitnessCenterIcon /></Avatar>
                        <h2>Admission Form</h2>
                    </Grid>
                    <TextField id="standard-basic" value={name} label="Full Name" variant="standard" InputLabelProps={{ shrink: true }} style={texfield} fullWidth required />
                    <TextField id="standard-basic" value={age} label="Age" type="number" variant="standard" InputLabelProps={{ shrink: true }} style={texfield} fullWidth required />
                    <TextField id="standard-basic" value={regDate} label="Date" type="date" variant="standard" InputLabelProps={{ shrink: true }} style={texfield} fullWidth required />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Complete Payment" />
                    </FormGroup>
                    <Button onClick={handleClick} variant="contained" disableElevation>
                        Submit form
                    </Button>
                </Paper>
            </Grid>
        </>
    )
}

export default Adform
