import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
 import { LiaStarSolid } from "react-icons/lia";
import { ImArrowUpRight2 } from "react-icons/im";

import React from 'react';
import '../styles/Comments.css';
import p1 from '../Persons/p1.jpg'
import p2 from '../Persons/p2.jpg'
import p3 from '../Persons/p3.jpg'
import p4 from '../Persons/p4.jpg'
import p5 from '../Persons/p5.jpg'

const Comments = () => {

  const blogs = [
    {
      id: 1,
      Image: p1,
      title: "Remal",
      address: "Interesting one",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 2,
      Image: p2,
      title: "Kashan",
      address: "I love it.",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 3,
      Image: p3,
      title: "Abdullah",
      address: "This Blog is very helpful",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 4,
      Image: p4,
      title: "Hashim",
      address: "Thankyou for this amazing Blog.",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 5,
      Image: p5,
      title: "Abdullah",
      address: "I like this Blog. It is very useful.",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

  ]


  return (
    <section id='allComments'>


      <h1 style={{ textAlign: "center", marginBottom: "10px" }}> All Comments</h1>


      <div className="scroll2" >
        {blogs.map(function (data, id) {
          return (
            <div className="property2" key={id} >
              <img src={data.Image} alt="" />



              <h3>{data.title}</h3>

              <div className="comment">
                <p>   {data.address}</p>
              </div>


              <div className="icons2">
                <p>{data.dot}</p>
                <p><ImArrowUpRight2/></p>

              </div>

            </div>
          )
        })}
      </div>



    </section>
  )
}

export default Comments