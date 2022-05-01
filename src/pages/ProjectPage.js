import React, { useState, useEffect } from "react";
import './ProjectPage.css'

import ProjectCard from '../components/Project/ProjectCard'

import { buttons } from "../components/Project/ProjectItems";
import { ProjectItems } from "../components/Project/ProjectItems";


function ProjectPage() {

    // Filter project items
    // const ProjectItems2 = ProjectItems.slice(0, 2)

    function getProject() {
        const projectList = ProjectItems;
        return projectList;
    }

    function filterProject(projectType) {
        let filtredProject = getProject().filter((type) => type.category === projectType);
        return filtredProject;
    }

    const [filtredProject, setFiltredProject] = useState(null);
        useEffect(() => {
        setFiltredProject(getProject());
    }, []);

    let typeProject = "all";

    // TODO: select "all" from the start
    const [filtredType, setFiltredType] = useState(null);
        useEffect(() => {
            setFiltredType(typeProject);
    }, []);

    function handleProject(e) {
        typeProject = e.target.value;
        typeProject !== "all"
            ? setFiltredProject(filterProject(typeProject))
            : setFiltredProject(getProject());
        
        setFiltredType(typeProject);
    }

    return (
        <>
            <div className='projectpage-container'>
                <div className="padding-top-48 flex justify-center">
                    <div className='flex space-btw' style={{width: '400px'}}>
                        {buttons &&
                            buttons.map((type, index) => (
                            <>
                                <button onClick={handleProject}
                                    value={type.value}
                                    
                                    className = { (filtredType===type.value)
                                        ? 'button-category-clicked'
                                        : 'button-category'
                                    }
                                    key={index} >
                                    {type.name}
                                    
                                </button>
                            </>
                        ))}
                    </div>
                </div>

                <div className='padding-top-48 flex space-btw wrap'>
                    {filtredProject &&
                        filtredProject.map((card) => (
                            <ProjectCard key={card.id} thumbnail={card.thumbnail} title={card.title} type={card.type} desc={card.desc} url={card.url}/>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ProjectPage;