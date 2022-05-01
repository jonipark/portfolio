import React from 'react'
import './AboutPage.css'
import JoniGif from'../resources/img/joni-bg-black.gif'

function AboutPage() {

    return (
        <>
            <div className='about-container'>
                {/* gif & intro */}
                <div className='flex space-btw'>
                    <img className='jonigif padding-right-96' alt='joni-gif' src={JoniGif}/>

                    <div className='padding-top-32 about-intro flex column'>
                        <p className='bold font-l yellow'>Hi, I’m Joni!</p>
                        <p className='padding-top-12 font-light font-m'>My ultimate goal to provide personalized Jarvis
                            (Yes, from iron man)<br/> for everyone around world!<br/>
                            I love new environments and challenges :)</p>

                        {/* first line */}
                        <div className='padding-top-48 flex space-btw'>
                            <div style={{width: '225px'}}>
                                <p className='semi-bold font-m'>💻 Areas of expertise</p>
                                <li className='padding-top-12 font-light font-s'>Mobile app development</li>
                                <li className='padding-top-12 font-light font-s'>Web front-end development</li>
                                <li className='padding-top-12 font-light font-s'>GitHub</li>
                            </div>
                            <div style={{width: '225px'}}>
                                <p className='semi-bold font-m'>👋 Currently Learning</p>
                                <li className='padding-top-12 font-light font-s'>UX design</li>
                                <li className='padding-top-12 font-light font-s'>Machine learning</li>
                            </div>
                        </div>

                        {/* second line */}
                        <div className='padding-top-48 flex space-btw'>
                            <div style={{width: '225px'}}>
                                <p className='semi-bold font-m'>🔭 Personal interests</p>
                                <li className='padding-top-12 font-light font-s'>Space</li>
                                <li className='padding-top-12 font-light font-s'>Board games</li>
                                <li className='padding-top-12 font-light font-s'>Notion</li>
                                <li className='padding-top-12 font-light font-s'>FPS games (Overwatch / PUBG)</li>
                                <li className='padding-top-12 font-light font-s'>Ada Lovelace</li>
                            </div>
                            <div style={{width: '225px'}}>
                                <p className='semi-bold font-m'>💡 Current Projects</p>
                                <li className='padding-top-12 font-light font-s'>Several iOS App development</li>
                                <li className='padding-top-12 font-light font-s'>Smart Mirror using Raspberrypi</li>
                                <li className='padding-top-12 font-light font-s'>School org website using React</li>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default AboutPage;