import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // const navLinks = links.map((link) =>{
  //   return (
  //     <a key={link}>{link}</a>
  //   )
  // })

  return <nav>
    {/* display an <a> tag for each link here */}
   
    {/* {navLinks} */}
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>

    </nav>;
}

export default NavBar;
