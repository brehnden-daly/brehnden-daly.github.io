import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper, Typography, Stack } from '@mui/material';

interface Data {
    image: string,
    header: string,
    bullets: Array<string>
}


function AboutItem( itemData: Data ) {

    console.log(itemData)

    return (

        <Stack spacing={0.5} sx={{width: "100%", height: "100%"}}>
            <Typography variant="h5" align="center"> {itemData.header} </Typography>
            <img src={itemData.image}></img>

            {itemData.bullets.map( (bullet) => (
                <Typography variant="body2"> {"- " + bullet} </Typography>
            ) )}
        </Stack>

    );


}

export default AboutItem;
