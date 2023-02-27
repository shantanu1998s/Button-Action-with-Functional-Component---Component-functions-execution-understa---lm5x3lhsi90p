import React from "react";
import { useState } from "react";

export default function Para(){
    const[msg, setMsg]=useState(false);
    function handleClick(){
        setMsg(true)
    }
    return(
        <div>
            <button id="click" onClick={handleClick}>click me</button>
            {msg? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>: ""}
            
        </div>
    )
}
