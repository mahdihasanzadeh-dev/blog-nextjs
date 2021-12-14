import React,{useState, useRef, useContext} from 'react'
import {NotificationContext} from '../../../store/notificationContext'
import classess from './ContactForm.module.css'
const ContactForm:React.FC = () => {
    const [isInvalid, setIsInvalid] = useState(false);
    const notificationCtx = useContext(NotificationContext)
    const emailInputRef = useRef<HTMLInputElement >(null);
    const nameInputRef = useRef<HTMLInputElement >(null);
    const messageInputRef = useRef<HTMLTextAreaElement>(null);
    const sendMessageHandler = (e:any)=>{
        e.preventDefault()
        const enteredEmail = emailInputRef.current?.value;
        const enteredName = nameInputRef.current?.value;
        const enteredMesssage = messageInputRef.current?.value;
        if (
            !enteredEmail ||
            enteredEmail.trim() === '' ||
            !enteredEmail.includes('@') ||
            !enteredName ||
            enteredName.trim() === '' ||
            !enteredMesssage ||
            enteredMesssage.trim() === ''
          ) {
            setIsInvalid(true);
            return;
          }
          notificationCtx.showNotification({
            title:'Process',
            message:'Submiting message',
            status:'pending'
          })
          fetch('/api/contact',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              email:enteredEmail,
              name:enteredName,
              message:enteredMesssage

            })
          }).then(response=>{
            if(response.ok){
              return  response.json()
            }
            return response.json().then(data=>{
              throw new Error(data.message || 'Somthing went wrong')
            })
          
          })
          .then(data=>{
            notificationCtx.showNotification({
              title:'Success!',
              message:'Successfully submited message',
              status:'success'
            })
            e.target.reset()
      
          }).catch(err=>{
            notificationCtx.showNotification({
              title:'Failed!',
              message:err.message,
              status:'error'
            })
            e.target.reset()
          })
          
    }
  
    return (
        <section className={classess.contact}>
            <h1>How can I help you ?</h1>
            <form className={classess.form} onSubmit={sendMessageHandler} >
                <div className={classess.controls}>
                    <div className={classess.control}>
                        <label htmlFor="email" >Your Email</label>
                        <input type="email" id="email" required ref={emailInputRef} />
                    </div>
                    <div className={classess.control}>
                        <label htmlFor="name" >Your Name</label>
                        <input type="text" id="name" required ref={nameInputRef}/>
                    </div>
                </div>
                <div className={classess.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows={5} ref={messageInputRef}></textarea>
                </div>
                <div className={classess.actions}>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm
