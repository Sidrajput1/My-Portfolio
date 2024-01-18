//import { getImageUrl } from '../../utils';
import styles from './contact.module.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function Contact() {
    const form = useRef()
    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_22k7ztr','template_b0js4hj',form.current,'j4xx381zO86hhZJce')
        
        .then((result) => {
            console.log(result.text);
            console.log("Message sent Succesfully");
        }, (error) => {
            console.log(error.text);
        }
      );
        e.target.reset()
        

    }



    return (
        <section className={styles.container} id="Contact">
            <h1>Contact me</h1>
            <h3 className={styles.header1}>Get in touch</h3>
            <div className={styles.contactinfo}>
               
                <p1 className={styles.query}>
                    If You Want to hire me or want to give some work to do. 
                    then please Go ahead
                    I'd love if you reaced out of me. 
                    Don't think too much,Drop me a message and i'll get back to you asap.
                </p1>
            </div>
            <div className={styles.msgbox}>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    
                    <input type="email" name='email' placeholder='Enter your email' required />
                   
                    <textarea name="message" id="" cols="30" rows="10" placeholder="your message" required></textarea>
                    
                    <button type='submit' className={styles.btn}>Send Message</button>
                </form>


            </div>


        </section>
    )
}
export default Contact;