import React from 'react'

const Project = () =>{
    return(
        <div className='project'>
            <h1 className='title'>Projects.</h1>
            <div className='project-container'>
               <a href='http://eagleimaging.surge.sh/' className='project1'><div>
                    <h1 className='project-name'>Eagle Imaging</h1>
                </div></a>
               <a href='https://github.com/Jeremybleak/assignments/tree/master/projects/RPG' className='project2'><div>
                    <h1 className='project-name'>RPG: Maze of Glory</h1>
                </div></a> 
                <a href="http://pokecards.surge.sh/" className='project3'><div>
                    <h1 className='project-name'>Poke-Card API</h1>
                </div></a>
            </div>
        </div>
    )
}

export default Project