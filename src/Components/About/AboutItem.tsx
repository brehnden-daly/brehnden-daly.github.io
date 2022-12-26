import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Stack, Button, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

interface Data {
    images: Array<string>,
    header: string,
    bullets: Array<string>
}


function AboutItem( itemData: Data ) {

    const [selectedImage, setSelectedImage] = useState(0);

    const iterImage = () => {
        if (selectedImage < (itemData.images.length - 1)) {
            setSelectedImage( selectedImage + 1 )
        } else {
            setSelectedImage( 0 )
        }
    }

    const backImage = () => {
        if (selectedImage > 0) {
            setSelectedImage( selectedImage - 1 )
        } else {
            setSelectedImage( itemData.images.length - 1 )
        }
    }

    return (

        <Stack spacing={0.5} sx={{width: "100%", height: "100%"}}>
            <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}> {itemData.header} </Typography>

            {/* <img src={itemData.images[selectedImage]} onClick={iterImage}></img> */}

            <div style={{position: 'relative'}}>
                <img src={itemData.images[selectedImage]} style={{width: '100%'}}></img>
                <IconButton onClick={backImage} sx={{position: 'absolute', top: 0, height: '100%', left: 0}}>
                    <ArrowBackIos></ArrowBackIos>
                </IconButton>
                <IconButton onClick={iterImage} sx={{position: 'absolute', top: 0, height: '100%', right: 0}}>
                    <ArrowForwardIos></ArrowForwardIos>
                </IconButton>
            </div>

            {itemData.bullets.map( (bullet) => (
                <Typography variant="body2" sx={{fontWeight: "light"}}> {"- " + bullet} </Typography>
            ) )}
        </Stack>

    );


}

export default AboutItem;
