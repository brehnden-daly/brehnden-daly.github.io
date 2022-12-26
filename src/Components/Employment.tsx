// Third Party Imports
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Modal, Paper, Typography, Stack } from '@mui/material';

// First Party Imports


// Assets
import background from './Employment/Employment_1.svg';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '50%',
    transform: 'translate(-50%, -50%)'
}));


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
                "Supplemental instructor for an introductory circuit theory course",
                "Assisted students in learning concepts such as Kirchoff’s and Ohm’s laws, DC/AC RL, RC, and RLC circuit analysis methods, etc.",
                "Learned how to lead meetings, simplify ideas, and stay organized"
            ]},
            {job_title: "Steam Turbine Engineer",
            employer: "Mitsubishi Power Systems",
            bullets: [
                "Furthered development and improvement of both steam turbine blade path optimization and turbine prognostic software",
                "This software provided engineers an interface to calculate optimal cross-sectional blade positioning for high, intermediate, and low pressure turbines and analyzed sensor data to provide prognostic reports",
                "Learned agile software development/improvement processes",
                "Learned to develop an organized bug reporting/tracking system",
                "Learned how to quantify software improvements"
            ]},
            {job_title: "Software Engineer",
            employer: "Northrop Grumman",
            bullets: [
                "Developing React web applications that provide both test engineers and lab techs the ability to provision bare-metal lab hardware",
                "This software allows engineers to build then provision system-level configuations consisting of various hardware, operating systems, and software",
                "Developing python and shell scripts to automate the collection and analysis of system-level test data",
                "Learning efficient agile software development in secure air-gapped networks/environments",
                "Learning how to efficiently provision large lab environments consisting of a multitude of bare-metal servers"
            ]}
        ]
    )

    const [selected, setSelected] = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const divClicked = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
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
            <div style={{position: "absolute", top: '30%', width: '100%'}}>
                <img src={background} style={{position: "relative", width: "100%"}}></img>
                <div style={{display: "table", position: "absolute", top:0, height: "100%", width: "100%"}}>
                    <div id="ucf" onMouseEnter={divEntering} onMouseLeave={divExiting} onClick={divClicked} style={{display: "table-cell", height: "100%", width: "30%"}}></div>
                    <div id="mps" onMouseEnter={divEntering} onMouseLeave={divExiting} onClick={divClicked} style={{display: "table-cell", height: "100%", width: "30%"}}></div>
                    <div id="ng" onMouseEnter={divEntering} onMouseLeave={divExiting} onClick={divClicked} style={{display: "table-cell", height: "100%", width: "30%"}}></div>

                    <Modal open={open} onClose={handleClose}>
                        <Item elevation={8}>
                            <Typography variant='h6' sx={{textAlign: 'center', fontWeight: 'medium'}}>{employmentData[selected].employer}</Typography>
                            <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 'bold'}}>{employmentData[selected].job_title}</Typography>

                            <Stack spacing={0.5} sx={{width: "100%", height: "100%"}}>
                                {employmentData[selected].bullets.map( (bullet) => (
                                    <Typography variant='body1' sx={{textAlign: 'left', fontWeight: 'light'}}>{"- " + bullet}</Typography>
                                ) )}
                            </Stack>
                        </Item>
                    </Modal>
                </div>
            </div>
        </>
    );

}

export default Employment;








