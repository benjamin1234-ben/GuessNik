import '../App.css';
import { Box, Button, Grid } from '@mui/material';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
// import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
// reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

function Role() {
    const navigate = useNavigate();

    const asker = (e) => {
        e.preventDefault();
        navigate("/player/asker");
    };

    const guesser = (e) => {
        e.preventDefault();
        navigate("/player/guesser");
    };

    return (
        <Box>
            <h1>Which role would you like to player in the game</h1>
            <Grid container spacing={2}>
                <Grid item xs={1}/>
                <Grid item xs={5}>
                    <Button color='primary' variant='contained' onClick={asker}> Asker</Button>
                </Grid>
                <Grid item xs={5}>
                    <Button color='primary' variant='contained' onClick={guesser}>Guesser</Button>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </Box>
    );
};

export default Role;