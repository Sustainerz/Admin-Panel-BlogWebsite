import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SignUp/SignUp.css";

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (

    <>
      {/* // <div className="register-screen">
    //   <form onSubmit={registerHandler} className="register-screen__form">
    //     <h3 className="register-screen__title">Register</h3>
    //     {error && <span className="error-message">{error}</span>}
    //     <div className="form-group">
    //       <label htmlFor="name">Username:</label>
    //       <input
    //         type="text"
    //         required
    //         id="name"
    //         placeholder="Enter username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         required
    //         id="email"
    //         placeholder="Email address"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         required
    //         id="password"
    //         autoComplete="true"
    //         placeholder="Enter password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="confirmpassword">Confirm Password:</label>
    //       <input
    //         type="password"
    //         required
    //         id="confirmpassword"
    //         autoComplete="true"
    //         placeholder="Confirm password"
    //         value={confirmpassword}
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Register
    //     </button>

    //     <span className="register-screen__subtext">
    //       Already have an account? <Link to="/login">Login</Link>
    //     </span>
    //   </form>
    // </div> */}

      <section id='SignUp'>
        <div className="signCard">
          <div className="loginText">
            <h1>Registration</h1>
          </div>

          <form action="" onSubmit={registerHandler}>
            <input type="text" required id="name" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" required id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" required id="password" autoComplete="true" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" required id="confirmpassword" autoComplete="true" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
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

            <p>Already have an account? <Link to="/login">Login</Link></p>

          </form>



        </div>
      </section>


    </>
  );
};

export default RegisterScreen;
