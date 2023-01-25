import React from 'react';
import styles from './About.module.css';
import profile from './img/bisrat.jpeg';

function About() {
    return (
        <div className={styles.aboutContainer} id='about'>
            <img src={profile} alt='Bisrat profile' className={styles.portrait} />
            <h1 className={styles.aboutHeader}>ABOUT ME</h1>
            <p className={styles.aboutDesc}>Hello! I'm Bisrat, a software engineer. I have four years of experience in a full-stack position. In my previous role, I worked on several projects, like leave management system, share management, network monitoring system, etc. I have excellent problem-solving and communication skills. That makes me an excellent candidate for the company I work for. I have a bachelor's degree in information systems from the university of Mekelle, Ethiopia and a master's degree in Software Engineering. Currently, I have completed two certifications; I'm  a Certified Ethical Hacker from EC-Council and Certified Software Engineering Immersive from General Assembly Bootcamp.</p>
            <br />
        </div>
    );
}

export default About;