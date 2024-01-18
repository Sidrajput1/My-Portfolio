import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'
import About from  './component/About/About';
import Skill from './component/Skill/Skill';
import styles from './App.module.css'
import MyProject from './component/MyProjects/MyProject';
import Contact from './component/contact/Contact';
import Extra from './component/extra/Extra';
import Nav2 from './component/nav2/Nav2';


function App() {
  

  return (
    <div className={styles.maincontainer}>
     <Navbar/>
     <Header />
     <Nav2 />
     <About />
     <Skill />
     <MyProject/>
     <Contact />
     <Extra />
     
     
    </div>
  )
}

export default App
