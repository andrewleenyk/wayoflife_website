import "./Body.css";
import stretching from "./stretching.jpg"
import ContactForm from './ContactForm'

function Body() {


  return (
    <div className="container">
      <img className="stretchingimg" src={stretching}/>
        <ContactForm />
    </div>
  );
}

export default Body;