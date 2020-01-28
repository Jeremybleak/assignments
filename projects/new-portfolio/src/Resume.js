import React from 'react';

const Resume = () => {
    return (
        <div id='resume' className='resume-container'>
            <div className='resume'>
                <div className='resume-items'>
                    <div className='resume-title'>
                        <h1>Resume</h1>
                        <a href='' download><h5>DOWNLOAD PDF</h5></a>
                    </div>
                    <div>
                        <div>
                            <h3 className='resume-subtitle'>Current Projects</h3>
                            <div>
                                <div className='resume-project-title-container'>
                                    <h4 className='resume-project-name'>Airplane Rental Site (Current)</h4>
                                    <a href=""><h5>VIEW PROJECT</h5></a>
                                    <a href=""><h5>GITHUB</h5></a>
                                </div>
                                <div className='resume-project-description-container'>
                                    <h5 className='resume-project-description'>Made with React, this is my very first responsive project. It was coursework in VSchool, the goal was to create a website for a company that does not exist.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;