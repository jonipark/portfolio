import React from 'react'
import './HomePage.css'

import ArrowDown from'../resources/icon/arrow-down-yellow.png'
import ProjectCard from '../components/Project/ProjectCard'
import { ProjectItems } from'../components/Project/ProjectItems'
import GitHubLogo from'../resources/logo/github.svg'
import LinkedInLogo from'../resources/logo/linkedin.svg'
import DevpostLogo from'../resources/logo/dev.svg'
import { TechStackItems } from'../components/TechStackItems'


function HomePage() {

    const TechStackItems1 = TechStackItems.slice(0, 9)
    const TechStackItems2 = TechStackItems.slice(9, 18)

    const ProjectItems2 = ProjectItems.slice(0, 2)

    return (
        <>
            <div className='home-container'>
                <div className='padding-top-180'>
                    <p className='flex font-m semi-bold'>Hi, my name is Joni 👋</p>
                    <div className='flex'>
                        <span className='padding-top-16 font-xl font-800 opensans'>I </span>
                        <span className='padding-top-16 padding-left-12 font-xl font-800 opensans yellow'>explore </span>
                        <span className='padding-top-16 padding-left-12 font-xl font-800 opensans'>the world with </span>
                        <span className='padding-top-16 padding-left-12 font-xl font-800 opensans yellow'>technologies</span>
                    </div>

                    <p className='padding-top-32 flex font-sm gray'>I’m a software engineer specializing in Mobile and Front-end development.</p>
                    <p className='padding-top-16 flex font-sm gray'>💻  Software Engineer Intern at<span className='padding-left-3 yellow'> Brex</span></p>
                    <p className='padding-top-4 flex font-sm gray'>🛠 Technical Product Manager Intern at<span className='padding-left-3 yellow'> Ringle</span></p>
                    <p className='padding-top-4 flex font-sm gray'>🎓 Currently a senior at Mount Holyoke College (Expected May 2023)</p>
                
                    <div className='padding-top-32 flex'>
                        {/* social media */}
                        <a target="_blank" href='https://github.com/jonipark'><img alt='GitHub-logo' src={GitHubLogo}/></a>
                        <a className='padding-left-8' target="_blank" href='https://www.linkedin.com/in/joeun-park/'><img alt='LinkedIn-logo' src={LinkedInLogo}/></a>
                        <a className='padding-left-8' target="_blank" href='https://devpost.com/joeun?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'><img alt='Devpost-logo' src={DevpostLogo}/></a>
                    </div>

                    {/* arrow down */}
                    <div className='padding-top-160 flex justify-center'>
                        <img width='40px' alt='arrow-down' src={ArrowDown} />
                    </div>
                </div>
                
                {/* My Tool Box */}
                <p className='padding-top-160 flex justify-center font-l bold'>My Tool Box</p>
                <div className='padding-top-48 flex space-btw'>
                    {TechStackItems1.map((card) => 
                        <img
                            src={require('../resources/logo/techstack/' + card.title + '.png')}
                            alt={card.title}
                            className='tech-stack-logo'
                        />
                    )}
                </div>
                <div className='padding-top-32 flex space-btw'>
                    {TechStackItems2.map((card) => 
                        <img
                            src={require('../resources/logo/techstack/' + card.title + '.png')}
                            alt={card.title}
                            className='tech-stack-logo'
                        />
                    )}
                </div>

                {/* Recent Projects */}
                <p className='padding-top-240 flex justify-center font-l bold'>Recent Projects</p>
                <a href='/projects' className='padding-top-8 flex justify-center font-sm yellow'>View more ></a>
                <div className='padding-top-48 flex space-btw wrap'>
                    {ProjectItems2.map((card) => 
                        <ProjectCard key={card.id} thumbnail={card.thumbnail} title={card.title} type={card.type} desc={card.desc} url={card.url}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default HomePage;