import React from "react";

const Card = ({name, id, email, username}) => {
    // const {name, id, email, username} = props;
    return(
       
        <div className ="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" >
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robotphoto"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{username}</p>
            </div>

        </div>
    );
} 

export default Card; 