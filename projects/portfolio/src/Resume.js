import React from 'react';

const Resume = () => {
    return (
        <div className='resume'>
        <h1 className='title'>Resume.</h1>
            
            <div className='resume-container'>
                <div>
                    <h1>Jeremy Bleak</h1>
                </div>
                <div>
                    <h3>Eagle Mountain, UT
                        (385)-227-2102
                        Jeremybleak99@gmail.com
                    </h3>
                </div>
                <div>
                    <h1>PROJECTS:</h1>
                    <div>
                        <h3>Business Time - http://eagleimaging.surge.sh/ </h3>
                        <h4>Made with React, this is my very first responsive project. It was coursework in VSchool, the goal was to create a website for a company that does not exist. 
                        Built With: React</h4>
                        <a>GitHub</a>
                    </div>
                    <br/>
                    <div>
                        <h3>PokeCard API Project - http://pokecards.surge.sh/</h3>
                        <h4>Created with React, and the packages: “react-router-dom” & “axios”. I made this project as a way to understand how to pull data from APIs/databases, and use of local storage.
                        Built With: React</h4>
                        <a>GitHub</a>
                    </div>
                </div>
                <div className='resume-skills-container'>
                        <div>
                        <h3>DEVELOPMENT:</h3>
                        <div className='resume-skills'>
                            <h5>JavaScript</h5>
                            <h5>ES6</h5>
                            <h5>React</h5>
                            <h5>HTML</h5>
                            <h5>CSS</h5>
                            <h5>Node.js</h5>
                            <h5>Express</h5>
                            <h5>AJAX/HTTP</h5>
                            <h5>Mongoose</h5>
                            <h5>MongoDB</h5>
                            <h5>JSON</h5>
                            <h5>Git</h5>
                        </div>
                    </div>
                    <div>
                        <h3>OTHER:</h3>
                        <div className='resume-skills'>
                            <h5>Problem Solving</h5>
                            <h5>Customer Service</h5>
                            <h5>Management</h5>
                            <h5>Fast Learner</h5>
                            <h5>Time Management</h5>
                            <h5>Power Tools</h5>
                            <h5>Communication</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>EXPERIENCE: </h1>
                    <div>
                        <h3>VSchool, Vineyard UT - Full Stack Internship</h3>
                        <h4>September 2019 - Current</h4>
                        <ul>
                            <li>Assist students with all assigned course work / personal projects</li>
                            <li>Keep track of student progress as well as conduct biweekly technical challenges with each student</li>
                            <li>Acted as first resource of help for students, to reteach a subject or help walk them through their code/functionality of their code.</li>
                        </ul>
                        <h4>Accomplishments: Graduated from V School and was hired as TA</h4>
                    </div>
                    <br/>
                    <div>
                        <h3>Groviv, Vineyard UT - Production Assistant</h3>
                        <h4>September 2018 - May 2019</h4>
                        <ul>
                            <li>Built and maintained Controlled Agricultural Environments by using and operating various power tools and lifts.</li> 
                            <li>Improved product functionality by working collaboratively with a team of 8 to problem solve pain points which lead to moving from a part-time temporary position to a full-time position.</li>
                            <li>Assembled 25% of the carts for the Controlled Agricultural Environments</li>
                        </ul>
                        <h4>Accomplishments: In the assembly line and a week later got promoted to work on different projects at a Groviv owned Farm.</h4>
                    </div>
                    <br/>
                    <div>
                        <h3>Iceberg, Riverton UT - Employee/Manager</h3>
                        <h4>October 2017 - September 2018</h4>
                        <ul>
                            <li>Managed a team of  5, delegating tasks in a fast paced environment.</li>
                            <li>Worked as a cleaner, cashier, cook, and making shakes.</li>
                        </ul>
                        <h4>Accomplishments: Promoted to manager in 6 months</h4>
                    </div>
                </div>
                <div>
                    <h3>EDUCATION</h3>
                    <div>
                        <h4>Herriman High, Herriman UT</h4>
                        — HS Diploma <br/>
                        August 2014 - June 2017 <br/>
                        3.4 GPA, Multiple Honors Courses, <br/>
                         2 years of Spanish
                    </div>
                    <div>
                        <h4>VSchool, SLC UT </h4>
                        — Certificate of Completion <br/>
                        July 2019 - September 2019 <br/>
                        Hired as a VSchool TA
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Resume;