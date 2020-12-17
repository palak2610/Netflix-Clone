import React, {useState, useEffect } from 'react'
import "./Nav.css"


function Nav(){

    const[show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    },[]);
    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img 
              className = "nav__logo"
              src="data:image/png;base64,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"
              alt="Mooovy Logo"
            />
            <img 
            className="nav__avatar"
            src = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Mooovy Logo"
            />
        </div>
    )
}

export default Nav