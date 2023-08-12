import React, { useState } from 'react';
import '../styles/Settings.css';
import { BiUser } from "react-icons/bi";
import { BsKeyFill } from "react-icons/bs";
import Swal from 'sweetalert2';

const Settings = () => {
    const [oldUsername, setOldUsername] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (oldUsername.trim() === '' || newUsername.trim() === '' || oldPassword.trim() === '' || newPassword.trim() === '') {
            setShowPopup(true);
            return;
        }

        console.log('Old Username:', oldUsername);
        console.log('New Username:', newUsername);
        console.log('Old Password:', oldPassword);
        console.log('New Password:', newPassword);

        updation();

        setOldUsername('');
        setNewUsername('');
        setOldPassword('');
        setNewPassword('');
    };
    
    const updation = () => {
        Swal.fire({
            icon: 'success',
            title: 'Username and Password updated successfully.',
            showConfirmButton: true
          })
    }

    const showError = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all the fields.',
          })
    }
 
    return (
        <div className="App1">
            <div className='H1'><h1>Hello!</h1></div>
            <div className='H2'><h2>Change Your Username & Password</h2></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='user-settings'><h4><BiUser /> Username</h4></div>
                    <label>Old Username </label>
                    <div className='input-settings'>
                    <input
                        type="text"
                        value={oldUsername}
                        onChange={(e) => setOldUsername(e.target.value)}
                    />
                    </div>
                </div>
                <div>
                    <label>New Username </label>
                    <div className='input-settings'>
                    <input
                        type="text"
                        value={newUsername}
                        onChange={handleUsernameChange}
                    />
                    </div>
                </div>
                <div>
                    <div className='pass-settings'><h4><BsKeyFill /> Password</h4></div>
                    <label>Old Password </label>
                    <div className='input-settings'>
                    <input
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    </div>
                </div>
                <div>
                    <label>New Password </label>
                    <div className='input-settings'>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={handlePasswordChange}
                    />
                    </div>
                </div>
                <button onClick={showError}>Update</button>
            </form>
        </div>
    );
};

export default Settings;
