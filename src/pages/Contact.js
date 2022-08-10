import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import classes from './Contact.module.css'

const Contact = () => {
  const formRef = useRef()
  const submitHandler = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_nrb7wvq',
        'template_fhb2vb6',
        formRef.current,
        '1VbH-tZ62myjvMz6b'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <div className={classes.content}>
        <h4 className={classes.title}>
          Get <span>in</span> <span>Touch!</span>
        </h4>
        <form ref={formRef} onSubmit={submitHandler} className={classes.form}>
          <input type='text' placeholder='Name' name='user_name' />

          <input type='text' placeholder='Subject' name='user_subject' />

          <input type='text' placeholder='Email' name='user_email' />
          <textarea row='5' placeholder='message' name='message' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
