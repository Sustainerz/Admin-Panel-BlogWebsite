import React, { useState } from 'react';
import './SignUp.css';

import axios from 'axios';

const Login = ({ history }) => {

    const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

      

        try {
            const { data } = await axios.post(
                "http://localhost:5000/api/auth/register",
                {
                    name,
                    email,
                    password,
                },
                config
            );

            localStorage.setItem("authToken", data.token);

            history.push("/");
        } catch (error) {
           console.log(error);
        }
    };




    return (
        <section id='SignUp'>
            <div className="signCard">
                <div className="loginText">
                    <h1>Registration</h1>
                </div>

                <form action="" onSubmit={registerHandler}>
                    <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder='Create a password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    {/* <input type="password" placeholder='Confirm a password' /> */}

                    {/* <div className="uplaod">
                        <label htmlFor="" style={{fontWeight: 'bold'}}>Upload image</label>
                        <input type="file" style={{ border: 'none', padding: '20px' }} />
                    </div> */}



                    {/* <div className="check">
                        <input type="checkbox" />
                        <p>I accept all terms and conditions</p>
                       
                    </div> */}

                    <button>Register Now</button>

                    <p>Already have an account? <a href="#">Login now</a></p>

                </form>



            </div>
        </section>
    )
}

export default Login