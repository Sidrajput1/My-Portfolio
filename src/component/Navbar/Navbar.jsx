import { getImageUrl } from '../../utils';
import styles from './Navbar.module.css';
// import cross from '../../assets/Nav/cross.png';
// import open from '../../assets/Nav/open.png';
import { useState } from 'react';
function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuimg}
                    src=
                    {
                        menuOpen
                        ? getImageUrl("nav/cross.png")
                        : getImageUrl("nav/open.png")
                    }
                    alt="menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#Myprojects">My Projects</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
export default Navbar;