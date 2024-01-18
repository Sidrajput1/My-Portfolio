import styles from './Skill.module.css';
import skill from '../../data/skill.json';
import { getImageUrl } from '../../utils';

function Skill(){

    return(
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skill & Experence</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skill.map( (skill,id)=>{
                        return(
                            <div key={id} className={styles.skill}>
                                <div className={styles.imgcontainer}>
                                    <img src={getImageUrl(skill.imagesrc)} alt={skill.title} />

                                </div>
                                <p>{skill.title}</p>

                            </div>
                        );

                    })}
                </div>
                <ul className={styles.experincelist}>
                    <li className={styles.exp}>
                       <img src={getImageUrl("cursors/cursor.png")} alt="cursor" />
                       
                        <div className={styles.myexptext}>
                            <h3>Frontend developer</h3>
                            <p>
                            I'm a frontend developer with experience in building responsive
                              and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.exp}>
                        <img src={getImageUrl("cursors/backend.png")} alt="backend cursor" />
                        <div className={styles.myexptext}>
                            <h3>Backend developer</h3>
                            <p>
                            I have experience developing fast and optimised back-end systems
                             and APIs
                            </p>
                        </div>
                    </li>

                    <li className={styles.exp}>
                        <img src={getImageUrl("cursors/ui.png")} alt="ui cursor" />
                        <div className={styles.myexptext}>
                            <h3>UI Designer</h3>
                            <p>
                            I have designed multiple landing pages and have created design
                             systems as well
                            </p>
                        </div>
                    </li>

                </ul>
                
            </div>


        </section>
    )

}
export default Skill;