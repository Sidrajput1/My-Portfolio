import styles from './Header.module.css'
//import myImage from '../assets/profile.jpg'
//import myImage from '../../assets/profile/profile.jpg';
import { getImageUrl } from '../../utils';

function Header(){
    return(
        <section className={styles.container} id='home' >
            <div className={styles.header}>
               <h1 className={styles.title}>Hello,I Am <br/> Sidharth</h1>
               <p className={styles.description}>
                I am A Full-stack-developer Using Reactjs and NodeJs.
               </p>
               <a href="/contact" className={styles.contactme}>Contact Me</a>
            </div>
            <img src= {getImageUrl("profile/profile.jpg")} alt="profile" className={styles.profile}/>

            <div className={styles.topblur}></div>
            <div className={styles.bottomblur}></div>

        </section>

    );
};
export default Header;