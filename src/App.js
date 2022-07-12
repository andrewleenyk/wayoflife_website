
import './App.css';
import Nav from './Nav.jsx';
import Body from './Body.jsx';
import { render } from "react-dom";
import { motion } from "framer-motion";


function App() {
  return (
    <div className="App">
        <Nav/>
        <Body/>

    </div>
  );
}

export default App;
