import React from 'react';

const Resume = () => {
    return (
        <div className='resume'>
        <h1 className='title'>Resume.</h1>
            
            <div className='resume-container'>
                <div className='resume-name'>
                    <h1>Jeremy Bleak</h1>
                    <a target='blank' href="https://docs.google.com/document/d/1s_LoaKR1AhbNg6PFxYLcUQ7vzctVb_m9ogv75YwAxko/edit?usp=sharing"><button className='resume-doc-button'>Go to Google Doc</button></a>
                </div>
                <div>
                    <h3>Eagle Mountain, UT </h3>
                    <h3>(385)-227-2102</h3>
                    <h3><a href='mailto: jeremybleak99@gmail.com'>Jeremybleak99@gmail.com</a></h3>
                </div>
                <div>
                    <h1>PROJECTS:</h1>
                    <div>
                        <h3>Business Time - <a href='http://eagleimaging.surge.sh/'>http://eagleimaging.surge.sh/</a></h3>
                        <h4>Made with React, this is my very first responsive project. It was coursework in VSchool, the goal was to create a website for a company that does not exist. 
                        Built With: React</h4>
                        <a href='https://github.com/Jeremybleak/assignments/tree/master/projects/btime'>GitHub</a>
                    </div>
                    <br/>
                    <div>
                        <h3>PokeCard API Project - <a href='http://pokecards.surge.sh/'>http://pokecards.surge.sh/</a></h3>
                        <h4>Created with React, and the packages: “react-router-dom” & “axios”. I made this project as a way to understand how to pull data from APIs/databases, and use of local storage.
                        Built With: React</h4>
                        <a href='https://github.com/Jeremybleak/assignments/tree/master/projects/personal-react-site'>GitHub</a>
                    </div>
                </div>
                <div className='resume-skills-container'>
                        <div>
                            <h3>DEVELOPMENT: </h3>
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
                            <h5>ProblemSolving</h5>
                            <h5>CustomerService</h5>
                            <h5>Management</h5>
                            <h5>FastLearner</h5>
                            <h5>TimeManagement</h5>
                            <h5>PowerTools</h5>
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
                    <h3>EDUCATION:</h3>
                    <div>
                        <h4>Herriman High, Herriman UT
                        — HS Diploma </h4>
                        August 2014 - June 2017 <br/>
                        3.4 GPA, Multiple Honors Courses, <br/>
                         2 years of Spanish
                    </div>
                    <div>
                        <h4>VSchool, SLC UT — Certificate of Completion</h4>
                        July 2019 - September 2019 <br/>
                        Hired as a VSchool TA
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Resume;