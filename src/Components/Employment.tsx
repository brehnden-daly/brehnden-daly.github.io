// Third Party Imports
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Modal, Paper, Typography, Stack, Button } from '@mui/material';

// First Party Imports
import Item from './Employment/ModalItem';

// Assets
import background_desktop from './Employment/Employment_Desktop.jpg';
import background_mobile from './Employment/Employment_Mobile.jpg';


const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
var background = background_desktop;
if (vw < 800) {
    background = background_mobile;
}


interface EmpData {
    job_title: string,
    employer: string,
    bullets: Array<string>
}


/**
 * 
 * @param data dynamic data to display in the About page
 */
function Employment( data: object ) {


    const [employmentData, setEmploymentData] = useState<Array<EmpData>>(
        [
            {job_title: "Supplemental Instructor",
            employer: "UCF Student Academic Resource Center",
            bullets: [
                "Supplemental instructor for an introductory circuit theory course at the University of Central Florida",
                "Assisted students in learning concepts such as Kirchoff’s and Ohm’s laws, DC/AC RL, RC, and RLC circuit analysis methods, etc.",
                "Learned how to lead meetings, simplify ideas, and stay organized"
            ]},
            {job_title: "Steam Turbine Engineer",
            employer: "Mitsubishi Power Systems",
            bullets: [
                "Furthered development and improvement of both steam turbine blade path optimization and turbine prognostic software",
                "This software provided engineers an interface to calculate optimal cross-sectional blade positioning for high, intermediate, and low pressure turbines and analyzed sensor data to provide prognostic reports",
                "Learned agile software development/improvement processes",
                "Developed an organized bug reporting/tracking system",
                "Learned how to quantify software improvements"
            ]},
            {job_title: "Software Engineer",
            employer: "Northrop Grumman",
            bullets: [
                "Developing React web applications that provide both test engineers and lab techs the ability to provision bare-metal lab hardware",
                "This software allows engineers to build then provision system-level configuations consisting of various hardware, operating systems, and software",
                "Developing python and shell scripts to automate the collection and analysis of system-level test data",
                "Learning efficient agile software development in secure air-gapped networks/environments",
                "Learning how to efficiently provision large lab environments consisting of multiple bare-metal servers"
            ]}
        ]
    )

    const [selected, setSelected] = useState(0);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const nodeClicked = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if (target.id === "ucf") {
            setSelected(0);
            setOpen(true);
        } else if (target.id === "mps") {
            setSelected(1);
            setOpen(true);
        } else {
            setSelected(2);
            setOpen(true);
        }
    }

    const divEntering = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;

        target.style.backgroundColor = "grey"
        target.style.opacity = "0.2"
    }
    const divExiting = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;

        target.style.backgroundColor = "grey"
        target.style.opacity = "0.0"
    }

    return (
        <>
            <div style={{position: "absolute", height:'100%', width: '100%'}}>
                <img src={background} style={{position: "relative", top: "30%", width: "100%", zIndex:0}}></img>
                <Button id="ucf" onClick={nodeClicked} sx={{position: "absolute", top: 0, left:0, height: "100%", width: "33%", zIndex:1}}></Button>
                <Button id="mps" onClick={nodeClicked} sx={{position: "absolute", top: 0, left:'33%', height: "100%", width: "33%", zIndex:1}}></Button>
                <Button id="ng" onClick={nodeClicked} sx={{position: "absolute", top: 0, left:'66%', height: "100%", width: "33%", zIndex:1}}></Button>


                <Modal open={open} onClose={handleClose}>
                    <Item elevation={8}>
                        <Typography variant='h6' sx={{textAlign: 'center', fontWeight: 'medium'}}>{employmentData[selected].employer}</Typography>
                        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 'bold'}}>{employmentData[selected].job_title}</Typography>

                        <Stack spacing={0.5} sx={{width: "100%", height: "100%"}}>
                            {employmentData[selected].bullets.map( (bullet) => (
                                <Typography variant='body2' sx={{textAlign: 'left', fontWeight: 'light'}}>{"- " + bullet}</Typography>
                            ) )}
                        </Stack>
                    </Item>
                </Modal>
            </div>
        </>
    );

}

export default Employment;








