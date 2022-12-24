// Third Party Imports
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';

// First Party Imports
import AboutItem from './About/AboutItem';



const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: vh-75,
    width: "98%",
}));


/**
 * 
 * @param data dynamic data to display in the About page
 */
function About( data: object ) {



    return (
        <div id='About' style={{position: "relative", top: "50px", width: "100%", padding:0}}>
            <div style={{ marginLeft: "auto", 
            marginRight: "auto", 
            marginTop: 15, 
            marginBottom: 15, 
            width: "90%", 
            height: "80%" }}>

                <Item elevation={8}>
                    <AboutItem />
                </Item>

            </div>

            <div style={{ marginLeft: "auto", 
            marginRight: "auto", 
            marginTop: 15, 
            marginBottom: 15, 
            width: "90%", 
            height: "80%" }}>

                <Item elevation={8}>

                </Item>
                
            </div>
                
        </div>
    );

}

export default About;








