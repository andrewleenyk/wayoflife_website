import "./ContactForm.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import stretching from "./stretching.jpg"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_meoi79b",
        "template_z7443gx",
        form.current,
        "7JSWXADQ03wq05wQS"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };
    return (
    <div className="col align-self-center">
        <h1 className="text-center">Email - React Contact Form</h1>
        
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-container">
            <TextField
            label="Name"
            name="name"
            className="form-control"
            id="name"
            variant="standard"
            />
            <TextField
            label="Email"
            name="email"
            className="form-control"
            id="email"
            variant="standard"
            />
            <TextField
            id="email_body"
            name="message"
            label="Message"
            className="form-control"
            multiline
            rows={5}
            variant="standard"
            />
        </div>
            <Button 
            id="submit-share" 
            type="submit">
            Submit
            </Button>
        </form>
    </div>);
}

export default ContactForm;