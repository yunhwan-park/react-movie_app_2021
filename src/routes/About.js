import React from 'react';
import './About.css'

function About(props)
{
    console.log(props);
    
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to day that two plus two make four. If that is granted, all else floows."
            </span>
            <span>- George Orell, 1984</span>
        </div>
    );
}

export default About;