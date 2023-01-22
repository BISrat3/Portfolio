import React from 'react';
import styles from './Projects.module.css';
import MenStore from './img/MenStore.png';
import Movie from './img/movie_app.png';
import Simon from './img/simongame.png';
import Soccer from './img/Soccerplayer.png';
import AmazonClone from './img/AmazonClone.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
    return (
        <div className={styles.projectComponentContainer} id='projects'>
            <h1 className={styles.headerOne}>PROJECTS</h1>
            <div className={`${styles.projectContainer} ${styles.project4}`} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}><img src={AmazonClone} alt='Amazon clone application ' className={styles.projectImg} /></div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Amazon Clone</h2>
                    <p className={`${styles.projectDesc} ${styles.projectFourDesc}`}>My app is called Amazon Clone App. It's an ecommerce site for customer who have a hard time figuring out which products to buy and reviewing the item they selected and seeing other people's comments(CRUD functionality). This app allows consumers to buy items from the sites. </p>
                    <div className={styles.projectLinkContainer3}>
                        <a href="https://challenge-12a45.web.app/" target='_blank' rel='noreferrer' className={styles.projectLink}>Live</a>
                        <a href='https://github.com/BISrat3/amazon-clone-react'
                        target='_blank' rel='noreferrer' className={styles.projectLink}>Github</a>
                    </div>
                </div>
            </div>
            <div className={`${styles.projectContainer} ${styles.project4}`} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}><img src={MenStore} alt='Mens store application ' className={styles.projectImg} /></div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Men's Store</h2>
                    <p className={`${styles.projectDesc} ${styles.projectFourDesc}`}>My app is called Men's Style Store App. It's a style app for men who have a hard time figuring out which products to buy and reviewing the item they selected and seeing other people's comments(CRUD functionality). This app allows consumers to comment on specific categories and to read the item's description and price and decide which item is good to buy in the future.</p>
                    <div className={styles.projectLinkContainer3}>
                        <a href="https://mens-styles-store.herokuapp.com/" target='_blank' rel='noreferrer' className={styles.projectLink}>Live</a>
                        <a href='https://github.com/BISrat3/Style-App'
                        target='_blank' rel='noreferrer' className={styles.projectLink}>Github</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={Movie} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Movie App</h2>
                    <p className={`${styles.projectDesc} ${styles.projectThreeDesc}`}>Browser application inspired by imdb. Allows users to search and view movie details. Allows users to search movies using API databases (imdb-api, omdb-api). Allows users to rate and leave reviews to selected movies.</p>
                    <div className={styles.projectLinkContainer3}>
                        <a href='https://movie-app-1305.herokuapp.com/movies' target='_blank' rel='noreferrer' className={styles.projectLink}>Live</a>
                        <a href='https://github.com/BISrat3/Movie_Project2' target='_blank' rel='noreferrer' className={styles.projectLink}>Github</a>
                    </div>
                </div>
            </div>
            <div className={`${styles.projectContainer} ${styles.projectTwo}`} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={Simon} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Simon Game</h2>
                    <p className={styles.projectDesc}>Simon game instructs the player to follow the sequence of flashing buttons. To move to the next level the player must click the four colored buttons as Simon says. As a player identifies the pattern correctly, he/she moves to the next level and each evel of the game gets harder.</p>
                    <div className={styles.projectLinkContainer}>
                        <a href='https://bisrat3.github.io/Project1_Simon/' target='_blank' rel='noreferrer' className={styles.projectLink}>Live</a>
                        <a href='https://github.com/BISrat3/Project1_Simon' target='_blank' rel='noreferrer' className={styles.projectLink}>Github</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={Soccer} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Soccer Player App</h2>
                    <p className={styles.projectDesc}>It's a soccer player's app for people who have a hard time figuring out the players' information, where they are originally from and the player's profile. Users can see soccer players who are currently playing in the world soccer leagues or country's leagues, and can search for a specific player by their name and click on a specific player to see a player's detailed information.</p>
                    <div className={styles.projectLinkContainer}>
                        <a href='https://soccer-player-profile-app.netlify.app/' target='_blank' rel='noreferrer' className={styles.projectLink}>Live</a>
                        <a href='https://github.com/BISrat3/Soccer-frontend"
                class="btn' target='_blank' rel='noreferrer' className={styles.projectLink}>Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;