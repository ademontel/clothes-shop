import React from "react";
import cardimg from "../../img/card-example.jpg";

export const Card = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={cardimg} alt="Card example" />
            <div className="card-body">Producto 1</div>
        </div>
    );
};