import React from 'react'
import "./ProjectCard.css"

/**
 * @param: (thumbnail, title, type, desc, url)
 * @returns: ProjectCard
 */

function ProjectCard({thumbnail, title, type, desc, url}) {
    return(
        // if url is empty string, then don't make it clickable
        url === ''
        ? (<div className='projectcard-container padding-bottom-48'>
            <div className='flex justify-center thumbnail-container'>
                <img src={thumbnail} alt='project-thumbnail' width="100%" />
            </div>
            <div>
                <h3 className='padding-top-8'>{title}</h3>
                <p className='padding-top-8 italic'>{type}</p>
                <p className='padding-top-4 font-light'>{desc}</p>
            </div>
        </div>):
        (<a className='projectcard-container padding-bottom-48' href={url} target='_blank' rel="noreferrer" /*onClick={() => window.location.href=url}*/>
            <div className='flex justify-center thumbnail-container'>
                <img src={thumbnail} alt='project-thumbnail' width="100%" />
            </div>
            <div>
                <h3 className='padding-top-8'>{title}</h3>
                <p className='padding-top-8 italic'>{type}</p>
                <p className='padding-top-4 font-light'>{desc}</p>
            </div>
        </a>)
    )
}

export default ProjectCard