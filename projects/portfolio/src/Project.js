import React from 'react'

const Project = () =>{
    return(
        <div className='project'>
            <h1 className='title'>Projects.</h1>
            <div className='project-container'>
               <a href='http://eagleimaging.surge.sh/' target='blank' className='project1'><div className='project-alignment'>
                    <h1 className='project-name'>Eagle Imaging</h1>
                    <div className='middle-bar'></div>
                    <h3 className='description-long-box'>Made with HTML and CSS, this is my very first responsive project. It was coursework in VSchool, the goal was to create a website for a company that does not exist. </h3>
                </div></a>
               <a href='https://github.com/Jeremybleak/assignments/tree/master/projects/RPG' target='blank' className='project2'><div className='project-alignment'>
                    <h1 className='project-name'>RPG: Maze of Glory</h1>
                    <div className='middle-bar'></div>
                    <h3 className='description'>Created with JS and the "read-line-sync" package. “The Maze of Glory” is a text based RPG I created to further understand JS in a fun way.</h3>
                </div></a> 
                <a href="http://pokecards.surge.sh/" target='blank' className='project3'><div className='project-alignment'>
                    <h1 className='project-name'>Poke-Card API</h1>
                    <div className='middle-bar'></div>
                    <h3 className='description'>Created with React, and the packages: “react-router-dom” & “axios”. I made this project as a way to understand how to pull data from APIs/databases, and use of local storage.</h3>
                </div></a>
                <a href='https://google.com' target='blank' className='project4' ><div className='project-alignment'>
                    <h1 className='project-name'>Hi there party people</h1>
                    <div className='middle-bar'></div>
                    <h3 className='description-long-box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur molestiae sint incidunt, adipisci consequuntur delectus hic deserunt iusto unde totam minima similique impedit reiciendis quidem quos dolorem nulla nostrum?</h3>
                </div></a>
            </div>
        </div>
    )
}

export default Project