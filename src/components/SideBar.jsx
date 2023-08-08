import React from 'react';
import '../styles/SideBar.css';

import { FiSettings } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { ImBook } from "react-icons/im";
import { VscOpenPreview } from "react-icons/vsc";
import { BiComment } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const handleclick= async () => {

    const ipAPI = '//api.ipify.org?format=json'
  
  const inputValue = fetch(ipAPI)
    .then(response => response.json())
    .then(data => data.ip)
  
  const { value: ipAddress } = await Swal.fire({
    title: 'Blog Category',
    input: 'text',
    inputLabel: 'Insert Blog Category',
    inputValue: inputValue,
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!'
      }
    }
  })
  
  if (ipAddress) {
    Swal.fire(`Added ${ipAddress} Category Successfully`)
      }
  
  }
const SideBar = () => {
    return (
        <section id='SideBar'>
            <div className="SideBarContainer">

                <div className="elements">
                    <TbCategory />     
                    <button onClick ={handleclick}style={{ border: 'none', outline: 'none',background: 'transparent' }}><h3>Blog Categories</h3></button>
           
                </div>
                <div className="elements">
                    <BsFillPencilFill />
                    <li><Link id='all' to="/blogpost"><h3>Blog Post</h3></Link></li>
                </div>

                <div className="elements">
                    <ImBook />
                    <li><Link id='all' to="/allblogs"><h3>All Blogs</h3></Link></li>
                </div>


                <div className="elements">
                    <VscOpenPreview />
                    <li><Link id='all' to="/reviews"><h3>Reviews</h3></Link></li>
                </div>


                <div className="elements">
                    <BiComment />
                    <li><Link id='all' to="/comment"><h3>Comments</h3></Link></li>
                </div>

                <div className="elements">
                    <FiSettings />
                    
                 
                    <li><Link id='all' to="/settings"><h3>Settings</h3></Link></li>
                </div>

                </div>
            
        </section>
    )
}

export default SideBar
