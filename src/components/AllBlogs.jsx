import { AiFillDelete } from "react-icons/ai";
import {AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';
import Axios from 'axios';
import '../styles/AllBlogs.css';
import slugify from "slugify";
import { useBlogContext } from "../BlogProvider";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';

const AllBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await Axios.get('http://localhost:3002/api/retrieve');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const blogs = [
    {
      id: 1,
      Image: img1,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 2,
      Image: img2,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 3,
      Image: img3,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 4,
      Image: img4,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 5,
      Image: img5,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 7,
      Image: img6,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 8,
      Image: img7,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },


    {
      id: 9,
      Image: img8,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

  ]

  const handleDelete = async(id) => {
 
    
    try {
      await Axios.delete(`http://localhost:3002/api/delete/${id}`
      )
      .then(()=>{window.location.reload()})
      console.log("Data deleted successfully");
    } catch (error) {
      console.error("Error deleting data:", error);
    }

  };

  const { setSelectedBlogId } = useBlogContext();

  return (
    <section id='allblogs'>



      <form className="example" action="">
        <input type="text" placeholder="Search for Blogs" name="search" />
        <button type="submit"><i className="fa fa-search"></i></button>



      </form>


      <h1> All Blogs</h1>


      <div className="scroll">


     


        <div className="objects">
          {posts.map(function (data, index) {
            return (
              <div className="property" id={data._id}>


               <img
                  src={`http://localhost:3002/uploads/${data.p_img}`}
                  alt="Primary Image" />

                <div className="title">
                  <span>{data.title}</span>
                </div>


                <div className="description">
                  <span >{data.description}</span>
                </div>

                <div className="description">
                  <span >{data.address}</span>
                </div>
                
                <p><AiFillDelete onClick={()=>{handleDelete(data._id)}}></AiFillDelete> &nbsp; <Link onClick={() => setSelectedBlogId(data._id)} to={`/update/${slugify(data.title)}/${index + 1}`}><AiFillEdit style={{ color: 'black' }}/></Link> </p>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AllBlogs