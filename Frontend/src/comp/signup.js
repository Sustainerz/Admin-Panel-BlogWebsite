import React, { useState } from "react";
import "../Styles/signup.css";
function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {};
  return (
    <div className=" relative main h-screen w-full bg-cover">
      <div class="register mx-44 mt-20 absolute">
        <div class=" grid grid-cols-10">
          <div class=" flex flex-col col-span-2 register-left items-center">
            <img
              style={{ width: "150px", height: "150px" }}
              src={require("../images/logo.png")}
              alt=""
            />
            <h3>Welcome!</h3>
            <p>Register yourself in our honourable Website</p>
            <input type="submit" onClick={handleSubmit} value="Register" />
            <br />
          </div>
          <div class=" col-span-8 register-right">
            <div class="tab-content" id="myTabContent">
              <h3 class="register-heading text-3xl font-semibold bg-black">
                Registeration Form
              </h3>
              <form enctype="multipart/form-data">
                <div class="grid grid-cols-2 register-form ">
                  <div class=" space-y-8">
                    <div>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        class=" w-64 rounded-lg  h-10 p-2"
                        placeholder="First Name *"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        class="w-64 rounded-lg  h-10 p-2"
                        placeholder="Last Name *"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        class="w-64 rounded-lg  h-10 p-2"
                        placeholder="Password *"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        id="cpassword"
                        name="cpassword"
                        class="w-64 rounded-lg  h-10 p-2"
                        placeholder="Confirm Password *"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <br />
                  </div>
                  <div class=" space-y-8">
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="w-64 rounded-lg  h-10 p-2"
                        placeholder="Your Email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                    <label for="interest">Your Interest</label>
                      <select id="interest" size={'1'}>
                      <option
                      value={'select'}></option>
                        <option
                      value={'Development'}>Development</option>
                        <option
                      value={'Travel'}>Travelling</option>
                        <option
                      value={'Artist'}>Artist</option>
                        <option
                      value={'Cook'}>Cooking</option>                    
                      </select>
                    </div>
                    <div>
                      <label for="image">Select an Image</label>
                      <br />
                      <input
                        type="file"
                        name="image"
                        class="mt-5 w-64 rounded-lg  h-10 p-2"
                        id="image1"
                        value=""
                      ></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
