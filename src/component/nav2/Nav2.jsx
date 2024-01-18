 import { useState } from "react";
 import {AiOutlineHome} from 'react-icons/ai'
 import {BiUser} from 'react-icons/bi'
 import {FaLaptopCode} from 'react-icons/fa'
 import {GoChecklist} from 'react-icons/go'
 import {BiMessageSquareDetail} from 'react-icons/bi'
 import styles from './nav2.module.css';
 function Nav2(){
     

    return(
        <nav className={styles.nav}>
            <a href="#home"><AiOutlineHome/></a>
            <a href="#About"><BiUser/></a>
            <a href="#skills"><FaLaptopCode/></a>
            <a href="#Myprojects"><GoChecklist/></a>
            <a href="#Contact"><BiMessageSquareDetail/></a>



        </nav>
    )
 }

 export default Nav2;