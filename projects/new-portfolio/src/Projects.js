import React from 'react';

const Projects = () => {
    return (
        <div className='project-container'>
            <div className='project'>
                <h1 className='project-title' id='projects'>Projects</h1>
                <div className='project-items-container'>
                    <div className='project-item'>
                        <div className='project-image-one'></div>
                        <div className='project-description'>
                            <h1>Eagle Imaging</h1>
                            <h5>Recreated using React, designed by a UX Designer with Sketch. This is my very first responsive project. The assignment was to create a website for a ficticious company. </h5>
                            <h4>VIEW PROJECT</h4>
                        </div>
                    </div>
                    <div className='project-item'>
                        <div className='project-image-one'></div>
                        <div className='project-description'>
                            <h1>Maze of Glory</h1>
                            <h5>Recreated using React, designed by a UX Designer with Sketch. This is my very first responsive project. The assignment was to create a website for a ficticious company.</h5>
                            <h4>VIEW PROJECT</h4>
                        </div>
                    </div>
                    <div className='project-item'>
                    <div className='project-image-one'></div>
                        <div className='project-description'>
                            <h1>Poke Card API</h1>
                            <h5>Recreated using React, designed by a UX Designer with Sketch. This is my very first responsive project. The assignment was to create a website for a ficticious company.</h5>
                            <h4>VIEW PROJECT</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;