import React from "react";

const PersonCard = ({firstName, lastName, age, hairColor}) => {
    return(
        <div className="row justify-content-center">
            <div className="col-3 card mb-3 mt-3 p-2">
                <h2> {lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        </div>
    )
}

export default PersonCard;