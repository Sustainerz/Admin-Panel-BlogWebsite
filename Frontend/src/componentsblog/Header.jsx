import React from 'react';
import '../styles/Header.css';
import image1 from '../Persons/p1.jpg';
import { BsFillBellFill } from 'react-icons/bs';

const Header = () => {
  return (
    <section id='header'>

      <div className="left">
        <h1>Admin Panel</h1>
      </div>

      <div className="right">


        <div className="rightContainer">
          <h2>Remal Fatima</h2>
          <BsFillBellFill />

        </div>

        <img src={image1} alt="" />


      </div>

    </section>
  )
}

export default Header