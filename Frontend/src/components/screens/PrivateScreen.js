import { useState, useEffect } from "react";
import axios from "axios";
// import Settings from '../screens/settings/Settings.jsx';
import Rote from '../../Routes'

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(true);

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);

  const logout = () => {
    try {
      axios.get("/api/auth/logout").then(() => {
        console.log("user Logged out!!!");

      })
    } catch (error) {

    }

    localStorage.removeItem("authToken");
    setIsLoggedin(true);
    history.push("/login");
  };

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div> <Rote/>  
      <button onClickCapture={logout}>logout user</button>
    </div>
  );
};

export default PrivateScreen;
