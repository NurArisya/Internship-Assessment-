//Question 5: User Profile Card (15 minutes)
/*Create a React component called ProfileCard
• Accepts props: user (object with name, email, avatar properties)
• Displays the user's avatar image, name, and email
• Has a "Toggle Details" button that shows/hides the email
• Uses basic styling to make it look like a card*/

import React, { useState } from 'react';
import './profilecard.css';

function ProfileCard() {
    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://via.placeholder.com/100"
    };

    <ProfileCard user={user} />

    const [hideEmail, setHideEmail] = useState(true);
    const toggleDetails = () => {
        setHideEmail(!hideEmail);
    }
    return (
        <div className="profile-card">
            <img src={user.avatar} alt="Avatar" className="avatar" /> {/**cannot display because of the DNS problem */}
            <h2>{user.name}</h2>
            <p className= "role">Web Developer</p>
            <p>Passionate about creating beautiful and functional websites.</p>
            {hideEmail && <p>{user.email}</p>}
            <button
                className="toggle-btn"
                onClick={toggleDetails}>
                Toggle Details
            </button>
        </div>
    );
}

export default ProfileCard;

