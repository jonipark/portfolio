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
        let filteredProject = getProject().filter((type) => type.category === projectType);
        return filteredProject;
    }

    const [filteredProject, setFilteredProject] = useState(null);
        useEffect(() => {
        setFilteredProject(getProject());
    }, []);

    let typeProject = "all";

    // TODO: select "all" from the start
    const [filteredType, setFilteredType] = useState(null);
        useEffect(() => {
            setFilteredType(typeProject);
    }, []);

    function handleProject(e) {
        typeProject = e.target.value;
        typeProject !== "all"
            ? setFilteredProject(filterProject(typeProject))
            : setFilteredProject(getProject());
        
        setFilteredType(typeProject);
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
                                    
                                    className = { (filteredType===type.value)
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
                    {filteredProject &&
                        filteredProject.map((card) => (
                            <ProjectCard key={card.id} thumbnail={card.thumbnail} title={card.title} type={card.type} desc={card.desc} url={card.url}/>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ProjectPage;