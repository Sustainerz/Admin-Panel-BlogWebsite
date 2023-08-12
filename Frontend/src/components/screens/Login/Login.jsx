import { useState, useEffect } from "react";
import axios from "axios";
import './Login.css'

const Login = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push("/");
        }
    }, [history]);

    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                "/api/auth/login",
                { email, password },
                config
            );

            localStorage.setItem("authToken", data.token);

            history.push("/");
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <section id='Login'>
            <div className="loginCard">
                <div className="loginText">
                    <h1>Login</h1>
                </div>

                <form action="" onSubmit={loginHandler}>
                    <input type="text" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} value={email} tabIndex={1} />
                    <input type="password" placeholder='Confirm a password' onChange={(e) => setPassword(e.target.value)} value={password} tabIndex={2} />


                    <div className="check">
                        {/* <input type="checkbox" /> */}
                        {/* <p>Remember me</p> */}
                        <a href="#">Forget Password?</a>
                    </div>

                    <button type="submit">Login Now</button>

                    <p>Don't have an account? <a href="#">Signin now</a></p>

                </form>



            </div>
        </section>
    )
}

export default Login