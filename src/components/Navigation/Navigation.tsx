import React, { useState } from 'react';
import github from './img/github.png';
import linkedIn from './img/linkedin-logo.png';
import gmail from './img/gmail.png';
import styles from './Navigation.module.css';
import Bisrat from './Document/Bisrat.pdf'

function Navigation() {
    const [showNav, setshowNav] = useState(false);

    // stackoverflow answer but I forgot the link
    const handleClick = (event: any) => {
        setshowNav(prevCheck => !prevCheck);
    }

    return (
        <>
            <div>
                {/* https://www.w3schools.com/howto/howto_css_menu_icon.asp */}
                <div onClick={handleClick} className={styles.nav}>
                    <div className={styles.barOne} style={{ transform: showNav ? 'rotate(-45deg) translate(-9px, 6px)' : 'none' }}></div>
                    <div className={styles.barTwo} style={{ opacity: showNav ? '0' : '1' }}></div>
                    <div className={styles.barThree} style={{ transform: showNav ? 'rotate(45deg) translate(-8px, -8px)' : 'none' }}></div>
                </div>
                {showNav && (
                    <>
                        <ul className={styles.navMenu}>
                            <a href='#skills' className={styles.aTagNav}><li className={styles.jumpLink}>SKILLS</li></a>
                            <a href='#projects' className={styles.aTagNav}><li className={styles.jumpLink}>PROJECTS</li></a>
                            <a href='#about' className={styles.aTagNav}><li className={styles.jumpLink}>ABOUT</li></a>
                            <a href={Bisrat} download='Bisrat' target='_blank' rel='noreferrer' className={styles.aTagNav}><li className={styles.resumeLink}>Resume</li></a>
                            <li className={styles.otherLink}>
                                <a href='https://github.com/BISrat3' target='_blank' rel='noreferrer' className={styles.aTag}><img src={github} alt="Link to Bisrat's Github" className={styles.imgLink} /></a>
                                <a href='https://www.linkedin.com/in/bisrat-menberu/' target='_blank' rel='noreferrer' className={styles.aTag}><img src={linkedIn} alt="Link to Bisrat's LinkedIn" className={styles.imgLink} /></a>
                                <a href='mailto:bisrat.amtataw@gmail.com' className={styles.aTag}><img src={gmail} alt="Send Bisrat an email" className={styles.imgLink} /></a>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </>
    );
}

export default Navigation;