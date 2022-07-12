import React from 'react';
import styles from './About.module.css';
import profile from './img/bisrat.jpeg';

function About() {
    return (
        <div className={styles.aboutContainer} id='about'>
            <img src={profile} alt='Portrait of Jeremiah' className={styles.portrait} />
            <h1 className={styles.aboutHeader}>ABOUT ME</h1>
            <p className={styles.aboutDesc}>Hello! I'm Bisrat, a software engineer .</p>
            <br />
            <p className={styles.aboutDesc}>After </p>
            <br />
            <p className={styles.aboutDesc}>On the never-ending journey of discovery and growth,  This is me.</p>
        </div>
    );
}

export default About;