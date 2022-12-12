import { Grid, Paper, Avatar, TextField, Checkbox, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { FormGroup, FormControlLabel } from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useState } from 'react';


const Adform = () => {
    useEffect(() => {

    }, [])
    const handleNameChange = (e) => {
        setname(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }
    const [obj, setObj] = useState({ Name: '', Age: 0, Date: '' });
    const handleClick = () => {
        if (!name) {
            alert("Fill the name correctly");
            setname('');
        }
        else if (!(age >= 18 && age <= 65)) {
            alert("You are not eligble")
        }
        else if (!regDate) {
            alert("Fill the date correctly");
            setDate('');
        }
        else {
            setObj({
                ...obj,
                Name: name,
                Age: age,
                Date: regDate
            });
            console.log(obj);
            fetch('/', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }).then(response => response.text()).then(response => alert(response));

        }
        // (!(age >= 18 && age <= 65)) ? alert("Not eligble") :
        //     (!name || !regDate) ? alert("Fill the Deets correctly.")
        //         : setObj({
        //             ...obj,
        //             Name: name,
        //             Age: age,
        //             Date: regDate
        //         });
        // console.log(obj);


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
                    <TextField id="standard-basic" onChange={(e) => handleNameChange(e)} label="Full Name" variant="standard" InputLabelProps={{ shrink: true }} style={texfield} fullWidth required />
                    <TextField id="standard-basic" onChange={(e) => handleAgeChange(e)} label="Age" type='number' variant="standard" InputLabelProps={{ shrink: true }} style={texfield} fullWidth required />
                    <TextField id="standard-basic" onChange={(e) => handleDateChange(e)} label="Date" type='date' variant="standard" InputLabelProps={{ shrink: true }} style={texfield} fullWidth required />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Complete Payment" />
                    </FormGroup>
                    <Button onClick={() => handleClick()} variant="contained" disableElevation fullWidth>
                        Submit form
                    </Button>
                </Paper>
            </Grid>
        </>
    )
}

export default Adform
