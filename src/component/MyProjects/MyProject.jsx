import styles from './Myproject.module.css';
import { getImageUrl } from '../../utils';
import projects from '../../data/projects.json'

function MyProject() {
    return (
        <section className={styles.container} id='Myprojects'>
            <h2>My Projects</h2>
            <div className={styles.content}>
                {
                    projects.map((project, id) => {
                        return (
                            <article key={id} className={styles.item}>
                                <div className={styles.item_img}>
                                    <img src={getImageUrl(project.image)} alt={project.title} />
                                </div>
                                <h3>{project.title}</h3>
                                <p1>{project.description}</p1>
                                <br />
                                {/* <small>{project.tecnologies}</small> */}
                                <div className={styles.skills}>
                                    <p1 className={styles.skill}>{project.tecnologies}</p1>

                                </div>
                                {/* <ul className={styles.skills}>
                                    {
                                        tecnologies.map((skill,id)=>{
                                            return(
                                                <li key={id} className={styles.skill}>
                                                    
                                                </li>
                                            )

                                        })
                                    }

                                </ul> */}
                                <div className={styles.link}>
                                <a href={project.demo}>Demo</a>
                                <a href={project.source}>Source</a>

                                </div>
                                


                            </article>

                        )

                    })
                }

            </div>



        </section>
    )
}
export default MyProject;