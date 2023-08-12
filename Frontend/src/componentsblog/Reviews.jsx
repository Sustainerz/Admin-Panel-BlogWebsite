import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { LiaStarSolid } from "react-icons/lia";

import React from 'react';
import '../styles/Reviews.css';
import p1 from '../Persons/p1.jpg'
import p2 from '../Persons/p2.jpg'
import p3 from '../Persons/p3.jpg'
import p4 from '../Persons/p4.jpg'
import p5 from '../Persons/p5.jpg'

const Reviews = () => {

  const blogs = [
    {
      id: 1,
      Image: p1,
      title: "Remal",
      address: [  <LiaStarSolid/>,  <LiaStarSolid/>, <LiaStarSolid/>,<LiaStarSolid/>,<LiaStarSolid/>,],
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 2,
      Image: p2,
      title: "Kashan",
      address: [  <LiaStarSolid/>,  <LiaStarSolid/>, <LiaStarSolid/>,<LiaStarSolid/>,<LiaStarSolid/>,],
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 3,
      Image: p3,
      title: "Abdullah",
      address: [  <LiaStarSolid/>,  <LiaStarSolid/>, <LiaStarSolid/>,<LiaStarSolid/>,<LiaStarSolid/>,],
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 4,
      Image: p4,
      title: "Hashim",
      address: [  <LiaStarSolid/>,  <LiaStarSolid/>, <LiaStarSolid/>,<LiaStarSolid/>,<LiaStarSolid/>,],
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 5,
      Image: p5,
      title: "Abdullah",
      address: [  <LiaStarSolid/>,  <LiaStarSolid/>, <LiaStarSolid/>,<LiaStarSolid/>,<LiaStarSolid/>,],
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 6,
      Image: p5,
      title: "Fazeel",
      address: [  <LiaStarSolid/>,  <LiaStarSolid/>, <LiaStarSolid/>,<LiaStarSolid/>,<LiaStarSolid/>,],
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

   

  ]


  return (
    <section id='allreviews'>


      <h1 style={{ textAlign: "center", marginBottom: "10px" }}> All Reviews</h1>


      <div className="scroll1">
        {blogs.map(function (data) {
          return (
            <div className="property1">
              <img src={data.Image} alt="" />
              <h3>{data.title}</h3>
              <p style={{color: 'yellow'}}>   {data.address}</p>

              <div className="icons1">
                <p>{data.dot}</p>
              
              </div>

            </div>
          )
        })}
      </div>



    </section>
  )
}

export default Reviews