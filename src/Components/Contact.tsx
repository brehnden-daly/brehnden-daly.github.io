// Third Party Imports
import { useState } from 'react';
import { Typography, Stack, Link } from '@mui/material'

// First Party Imports
import Item from './About/CustomItem';




function Contact() {

    return (
        <div id='About' style={{position: "relative", marginTop: "75px", marginBottom: "25px", width: "100%", padding:0}}>
            <div style={{ marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 15,
            marginBottom: 15,
            width: "90%", 
            height: "80%" }}>

                <Item elevation={7}>
                    <Stack spacing={0.5} sx={{width: "100%", height: "100%"}}>
                        <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>E-mail</Typography>
                        <Link align="left" underline="none" href={"mailto: brehndenddaly@gmail.com"}>Personal: brehndenddaly@gmail.com</Link>
                        <Link align="left" underline="none" href={"mailto: Brehnden.Daly@ngc.com"}>Work: Brehnden.Daly@ngc.com</Link>
                    </Stack>
                </Item>
            </div>
                
            <div style={{ marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 15,
            marginBottom: 15,
            width: "90%", 
            height: "80%" }}>

                <Item elevation={7}>
                    <Stack spacing={0.5} sx={{width: "100%", height: "100%"}}>
                        <Link variant="h6" align="center" underline="none" href={"https://www.linkedin.com/in/brehnden-d-326197b3/"}>LinkedIn</Link>
                    </Stack>
                </Item>
            </div>

            <div style={{ marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 15,
            marginBottom: 15,
            width: "90%", 
            height: "80%" }}>

                <Item elevation={7}>
                    <Stack spacing={0.5} sx={{width: "100%", height: "100%"}}>
                        <Link variant="h6" align="center" underline="none" href={"https://github.com/brehnden-daly"}>GitHub</Link>
                    </Stack>
                </Item>
            </div>

            <div style={{ marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 15,
            marginBottom: 15,
            width: "90%", 
            height: "80%" }}>

                <Item elevation={7}>
                    <Stack spacing={0.5} sx={{width: "100%", height: "100%"}}>
                        <Link variant="h6" align="center" underline="none" href={"https://github.com/brehnden-daly/resume"}>Resume Files</Link>
                    </Stack>
                </Item>
            </div>
        </div>
    );

}

export default Contact;