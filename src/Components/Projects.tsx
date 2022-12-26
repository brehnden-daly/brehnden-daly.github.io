// Third Party Imports
import { useState } from 'react';

// First Party Imports
import Item from './About/CustomItem';
import ProjectItem from './Projects/ProjectItem';

// Assets






interface Data {
    images: Array<string>,
    header: string,
    bullets: Array<string>,
    link: string
}


/**
 * 
 * @param data dynamic data to display in the About page
 */
function Projects( data: object ) {

    const [projectItemData, setProjectItemData] = useState<Array<Data>>( [

        {images: [  ],
        header: "This Website",
        bullets: [
            "Developed in TypeScript using a React framework",
            "Utilized Material UI for user interface components",
            "Deployed to github as a user page"
        ],
        link: "https://github.com/brehnden-daly/brehnden-daly.github.io"},
        {images: [  ],
        header: "Quantitative/Automated Trading",
        bullets: [
            "Developed in Python utilizing packages such as Numpy, Pandas, Numba (Cuda), and more",
            "Codebase that automates the process of parameter creation, strategy generation, backtesting, optimization, and deployment of securities trading scripts",
            "Utilizes Numba Cuda to accelerate computations via use of a GPU",
            "Supports decision trees, neural networks, and more"
        ],
        link: ""},
        {images: [  ],
        header: "Graph-Based Systems Engineering App",
        bullets: [
            "An in-progress Electron/React desktop application that displays systems engineering data in a graph structure",
            "Allows systems engineers to visualize and create requirements in a node-relationship graph structure"
        ],
        link: ""},
        {images: [  ],
        header: "Physics Simulation",
        bullets: [
            "Python scripts developed for physics-based coursework",
            "Simulated the positions of charged particles in an electrostatic and magnetic field",
            "Simulated the pressure of a fluid discretized to a grid and solved via finite difference"
        ],
        link: ""}

    ] );


    return (
        <div id='About' style={{position: "relative", marginTop: "75px", marginBottom: "25px", width: "100%", padding:0}}>

            {projectItemData.map( (item) => (
                <div style={{ marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 15,
                marginBottom: 15,
                width: "90%", 
                height: "80%" }}>
    
                    <Item elevation={8}>
                        <ProjectItem {...item}></ProjectItem>
                    </Item>
                    
                </div>
            ) )}
                
        </div>
    );
}

export default Projects;








