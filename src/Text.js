import React, { useState, useEffect } from "react";

export const Text = () =>
{
    const [text,setText] = useState("");
    useEffect(()=>{console.log("component mounted")})
    return (
        <div>
            <input type="text" onChange={(e => setText(e.target.value))} />
            <h1>{text}</h1>
        </div>
    );
} 