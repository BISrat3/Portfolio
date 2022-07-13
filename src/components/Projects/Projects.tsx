import React from 'react';
import styles from './Projects.module.css';
import MenStore from './img/MenStore.png';
import Movie from './img/movie_app.png';
import Simon from './img/simongame.png';
import Soccer from './img/Soccerplayer.png';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function Projects() {
    return (
        <div className={styles.projectComponentContainer} id='projects'>
            <h1 className={styles.headerOne}>PROJECTS</h1>
            <div className={`${styles.projectContainer} ${styles.project4}`} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}><img src={MenStore} alt='Mens store application ' className={styles.projectImg} /></div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Men's Store</h2>
                    <p className={`${styles.projectDesc} ${styles.projectFourDesc}`}>This application is a basic expense tracker to keep tabs on your spending.  You can create, read, update, and delete any post that you input.  The backend database is hosted on Heroku and uses Django, Python, and the Django Rest Framework.  The frontend is created using React Native and Typescript.  Follow the viewing instructions on GitHub to view and use the application.</p>
                    <div className={styles.projectLinkContainer3}>
                        <a href="https://mens-styles-store.herokuapp.com/" target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>
                        <a href='https://github.com/BISrat3/Style-App'
                        target='_blank' rel='noreferrer' className={styles.projectLink}>Frontend</a>
                        <a href='https://github.com/leejoonli/expense-tracker-backend' target='_blank' rel='noreferrer' className={styles.projectLink}>Backend</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={Movie} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Movie App</h2>
                    <p className={`${styles.projectDesc} ${styles.projectThreeDesc}`}>FELP is a blog style food review application to document the hottest spots to go to eat.  The idea is verified locals who have lived in a certain area for an extended period of time would suggest the bets local restaraunts for tourists to go.  The application has full CRUD functionaliy for registered users.  Frontend created using React, Javascript, CSS, with requests handled using Axios.  Backend created with MongoDB, Mongoose, Express, with user authentication being handled by Passport.  Feel like a local even when you're out of town.</p>
                    <div className={styles.projectLinkContainer3}>
                        <a href='https://movie-app-1305.herokuapp.com/movies' target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>
                        <a href='https://github.com/BISrat3/Movie_Project2' target='_blank' rel='noreferrer' className={styles.projectLink}>Frontend</a>
                        <a href='https://github.com/leejoonli/felp-backend' target='_blank' rel='noreferrer' className={styles.projectLink}>Backend</a>
                    </div>
                </div>
            </div>
            <div className={`${styles.projectContainer} ${styles.projectTwo}`} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={Simon} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Simon Game</h2>
                    <p className={styles.projectDesc}>This application is a straightforward access point for one of greatest table top role playing games currently in existence, if not THE greatest.  Browse through the application and see what catches your eye.  Built using React, React Bootstrap, React Router, JavaScript, CSS, and deployed on Netlify.</p>
                    <div className={styles.projectLinkContainer}>
                        <a href='https://github.com/BISrat3/Project1_Simon' target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>
                        <a href='https://github.com/BISrat3/Project1_Simon' target='_blank' rel='noreferrer' className={styles.projectLink}>Live</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={Soccer} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Soccer Player App</h2>
                    <p className={styles.projectDesc}>MVC application of a human resources department database created using Python, PostgreSQL, and Django.  Establish multiple tables with interconnecting many-to-many and one-to-many relationship structure which are all accessible through the Django admin site and have full CRUD capabilities.</p>
                    <div className={styles.projectLinkContainer}>
                        <a href='https://github.com/BISrat3/Soccer-frontend' target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>
                        <a href='https://github.com/BISrat3/Soccer-frontend"
                class="btn' target='_blank' rel='noreferrer' className={styles.projectLink}>Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;