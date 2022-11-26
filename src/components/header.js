import {Route, Routes,BrowserRouter as Router} from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";



function Header(){   

    return (<Router>

    <div className="content">
        <Routes>
          <Route exact path="/" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
        </div>
        </Router>
        
    )
}


export default Header;