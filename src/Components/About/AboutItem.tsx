import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper, Typography, Stack } from '@mui/material';

interface Data {
    images: Array<string>,
    header: string,
    bullets: Array<string>
}


function AboutItem( itemData: Data ) {

    return (

        <Stack spacing={0.5} sx={{width: "100%", height: "100%"}}>
            <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}> {itemData.header} </Typography>

            {itemData.images.map( (image) => (
                <img src={image}></img>
            ) )}

            {itemData.bullets.map( (bullet) => (
                <Typography variant="body2" sx={{fontWeight: "light"}}> {"- " + bullet} </Typography>
            ) )}
        </Stack>

    );


}

export default AboutItem;
