import styles from './About.module.css';
import { getImageUrl } from '../../utils';
import { FaUserGraduate } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";

function About() {


    return (
        <section className={styles.container} id="About">
            <h2 className={styles.heading}>About me</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutme2.jpg")}
                    alt="about me"
                    className={styles.me}
                />
                <div className={styles.aboutme}>
                    <div className={styles.degree1}>
                        <FaUserGraduate />
                        <h3>Degree</h3>
                        <li>
                            BCA
                        </li>
                        <li>
                            Graduated
                        </li>
                        <li>
                            Patna University
                        </li>
                    </div>
                    <div className={styles.marks}>
                        <BsBookmarkStarFill />
                        <li>percentage</li>
                        <li>80</li>

                    </div>
                    <div className={styles.interest}>
                        <GoGoal />
                        <h1>Domains</h1>
                        <li>Web-Development</li>
                    </div>

                </div>
                
                
            </div>
            <div className={styles.para}>
                    <p1>I'm a Full-Stack Web developer Graduated from Patna University.<br/>
                        I have a Strong commond over both front-end and back-end tecnologies and
                        allowing me to build complete and scalable applications.
                        I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.

                    </p1>
                </div>
            

        </section>
    );
}
export default About;