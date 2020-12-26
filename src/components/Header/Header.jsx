import React from 'react';
import './Header.css';

export default ({black}) => {

    return (
       
       <header className={black ? 'black' : ''}>
            
            <div className="header--logo">
                <a href="/">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
                </a>
            </div>
        
        </header>
    )

}
