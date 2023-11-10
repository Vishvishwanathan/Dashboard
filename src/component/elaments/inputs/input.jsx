
import React from "react";
import"./input.css";

export default function InputComponent(prpos){
    return(
        <div>
        <label for={prpos.id} className="from-label">
            {prpos.label} 
        </label>
        <input 
        type={prpos.type}
        className="from-control"
        id={prpos.id} 
         placeholder={prpos.placeholder}/>
    </div>
    );
}