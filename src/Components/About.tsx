// Third Party Imports
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';

// First Party Imports
import AboutItem from './About/AboutItem';

// Assets
import senior_design from './About/senior_design.jpg';
import stackable_drones from './About/stackable_drones.jpg';
import stackable_drones_dwg from './About/stackable_drones_dwg.jpg';
import hiking from './About/hiking.jpg';
import camping from './About/camping.jpg';



const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 500,
    display: "flex"
}));


interface Data {
    images: Array<string>,
    header: string,
    bullets: Array<string>
}


/**
 * 
 * @param data dynamic data to display in the About page
 */
function About(  ) {

    const [aboutItemData, setAboutItemData] = useState<Array<Data>>( [

        {images: [senior_design, stackable_drones_dwg, stackable_drones],
        header: "Passionate Engineer",
        bullets: [
            "Bachelor's degree in Aerospace Engineering from the University of Central Florida with a minor in Mathematics",
            "Software Engineer at Northrop Grumman currently developing React.js web applications to support closed environment system testing",
            "Professional experience in various areas of engineering including software, reliability, systems, and cyber security",
            "Professional experience with Python, JavaScript, TypeScript, HTML, CSS, C#, and Visual Basic. Collegiate experience with C and C++",
            "Professional experience with Microsoft Windows, Red Hat Enterprise Linux (CLI), Ubuntu Linux, Raspbian Linux, and macOS",
            "Experience programming microprocessors in C and Python for sensor data input and actuator control output. Experience developing and running scripts on Nvidia Cuda GPUs for computational acceleration purposes",
            "Utility patent owner for a system to augment drone capabilities",
            "Certified in general cyber security skills by CompTIA's Security+ SY0-601 course"
        ]},
        {images: [  ],
            header: "Short-Term Goals",
            bullets: [
                "Continue to work in environments that are challenging, encourage innovation, and facilitate learning",
                "Begin my Master's Degree in data science/machine learning",
                "Take control of and automate my investments"
        ]},
        {images: [  ],
            header: "Long-Term Goals",
            bullets: [
                "Become an engineer-entrepreneur",
                "Advance the merge of machine learning and engineering design",
                "Build a cabin"
        ]},
        {images: [hiking, camping],
            header: "Hobbies",
            bullets: [
                "Backpacking",
                "Rock Climbing",
                "Snowboarding",
                "Building PCs",
                "Video Games"
        ]}

    ] );


    return (
        <div id='About' style={{position: "relative", marginTop: "75px", marginBottom: "25px", width: "100%", padding:0}}>

            {aboutItemData.map( (item) => (
                <div style={{ marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 15,
                marginBottom: 15,
                width: "90%", 
                height: "80%" }}>
    
                    <Item elevation={8}>
                        <AboutItem {...item}></AboutItem>
                    </Item>
                    
                </div>
            ) )}
                
        </div>
    );

}

export default About;








