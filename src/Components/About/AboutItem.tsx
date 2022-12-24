import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';



function AboutItem( data: object ) {


    return (
        <Grid container spacing={2}>
            <Grid item xs={8} style={{height: "100%"}}>
                Image
            </Grid>

            <Grid item xs={4} style={{height: "100%"}}>
                Paragraph
            </Grid>
        </Grid>
    );


}

export default AboutItem;


