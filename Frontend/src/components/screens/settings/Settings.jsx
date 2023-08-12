import React, { useState } from 'react';
import '../settings/Settings.css';
import { BiUser } from "react-icons/bi";
import { BsKeyFill } from "react-icons/bs";
import Swal from 'sweetalert2';
import axios from 'axios';

const Settings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        // if (username.trim() === '' || email.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '') {
        //     // setShowPopup(true);
        //     return;
        // }

        // if (newPassword !== confirmPassword) {
        //     setShowPopup(true);
        //     return;
          
        // }

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        try {

            await axios.put('/api/auth/me/update', {
                username: username,
                email: email,
            }, config).then(() => {

                axios.put('/api/auth/password/update', {
                    oldPassword: oldPassword,
                    newPassword: newPassword,
                    confirmPassword: confirmPassword,

                })

            })

        } catch (error) {
            console.log(error);
        }


        // console.log('Old Username:', oldUsername);
        // console.log('New Username:', newUsername);
        // console.log('Old Password:', oldPassword);
        // console.log('New Password:', newPassword);

    updation();

        // setOldUsername('');
        // setNewUsername('');
        // setOldPassword('');
        // setNewPassword('');
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
                    <div className='user-settings'><h4><BiUser/> Username</h4></div>
                    <label>Username </label>
                    <div className='input-settings'>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Email </label>
                    <div className='input-settings'>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div className='pass-settings'><h4><BsKeyFill/> Password</h4></div>
                    <label>Old Password </label>
                    <div className='input-settings'>
                        <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label>New Password </label>
                    <div className='input-settings'>
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>

                    <label>confirm Password </label>
                    <div className='input-settings'>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>
                <button type='submit'>Update</button>
            </form>
        </div>
    );
};

export default Settings;
