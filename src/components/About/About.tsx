import React from 'react';
import styles from './About.module.css';
import profile from './img/bisrat.jpeg';

function About() {
    return (
        <div className={styles.aboutContainer} id='about'>
            <img src={profile} alt='Bisrat profile' className={styles.portrait} />
            <h1 className={styles.aboutHeader}>
                ABOUT ME
            </h1>
            <p className={styles.aboutDesc}>
                Hello! I'm Bisrat, a software engineer. I have 6+ years of experience in software development. I have successfully utilized my expertise in HTML5, CSS3, and JavaScript to create visually appealing and interactive user interfaces. I have extensive experience with popular frameworks such as React JS, React Hooks, and Redux, and have developed numerous front end web applications using these technologies. I have a deep understanding of React JS and its core principles, allowing me to optimize and benchmark applications for enhanced performance.</p>
            <br />
        </div>
    );
}

export default About;