import styles from './extra.module.css'
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


function Extra() {

    return (

        <div className={styles.container}>
            <h1 className={styles.name}>Sidharth Shekhar</h1>
            <p className={styles.para}>You Can also check out here</p>
            <div className={styles.extrainfo}>

                <ul className={styles.links}>
                    <li className={styles.link}>
                        <a href="https://accounts.google.com/b/0/AddMailService">shekharsidharth7Agmail.com <MdEmail className={styles.icon} /></a>
                    </li>


                    <li className={styles.link}>
                        <a href="linkedin.com">Sidharth Shekhar <BsLinkedin className={styles.icon} />  </a>

                    </li>
                    <li className={styles.link}>
                        <a href="https://github.com/">Sidrajput01 <BsGithub className={styles.icon} /> </a>
                    </li>
                </ul>

            </div>
            <div className={styles.social}>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <a href="https://www.instagram.com/shekharsidharth/">ShekharSidharth7 <FaInstagramSquare className={styles.icon} /> </a>

                    </li>
                    <li className={styles.link}>
                        <a href="www.facebook.com">Sidharth Shekhar rajput <FaFacebookSquare className={styles.icon} /> </a>
                    </li>
                    <li className={styles.link}>
                        <a href="#">6201274925 <FaPhone className={styles.icon} /></a>
                    </li>

                </ul>
            </div>
            <div className={styles.copyright}>
                <small>&copy; Sidharh Shekhar All rightts reserved.</small>
            </div>

        </div>
    )

}
export default Extra;