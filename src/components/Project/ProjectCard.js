import React from 'react'
import "./ProjectCard.css"

/**
 * @param: (thumbnail, title, type, desc, url)
 * @returns: ProjectCard
 */

function ProjectCard({thumbnail, title, type, desc, url}) {
    return(
        <div className='projectcard-container padding-bottom-48' onClick={() => window.location.href=url}>
            <div className='flex justify-center thumbnail-container'>
                <img src={thumbnail} alt='project-thumbnail' width="100%" />
            </div>
            <div>
                <h3 className='padding-top-8'>{title}</h3>
                <p className='padding-top-8 italic'>{type}</p>
                <p className='padding-top-4 font-light'>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard