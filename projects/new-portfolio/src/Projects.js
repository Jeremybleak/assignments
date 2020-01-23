import React from 'react';

const Projects = () => {
    return (
        <div id='projects' className='project-container'>
            <div className='project'>
                <h1 className='project-title' >Projects</h1>
                <div className='project-items-container'>
                    {/* Eagle imaging */}
                    <div className='project-item'>
                        <a target='blank' href="http://eagleimaging.surge.sh/">
                            <div className='project-image-one'></div>
                            <div className='project-description'>
                                <h1>Eagle Imaging</h1>
                                <h5>Recreated using React, designed by a UX Designer with Sketch. This is my very first responsive project. The assignment was to create a website for a ficticious company. </h5>
                                <h4 className='project-button'>VIEW PROJECT</h4>
                            </div>
                        </a>
                    </div>
                    {/* Maze of Glory */}
                    <div className='project-item'>
                        <a target='blank' href="https://github.com/Jeremybleak/assignments/blob/master/projects/RPG/app.js">
                            <div className='project-image-two'></div>
                            <div className='project-description'>
                                <h1>Maze of Glory</h1>
                                <h5>Created with JS and the "read-line-sync" package. “The Maze of Glory” is a text based RPG I created to further understand JS in a fun way.</h5>
                                <h4 className='project-button'>VIEW PROJECT</h4>
                            </div>
                        </a>
                    </div>
                    {/* Pokecards */}
                    <div className='project-item'>
                        <a target='blank' href="http://pokecards.surge.sh/">
                            <div className='project-image-three'></div>
                            <div className='project-description'>
                                <h1>Poke Card API</h1>
                                <h5>Created with React, and the packages: “react-router-dom” & “axios”. I made this project as a way to understand how to pull data from APIs/databases, and use of local storage.</h5>
                                <h4 className='project-button'>VIEW PROJECT</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;