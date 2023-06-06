import { log } from "console";
import React from "react";
import { useState } from "react";

export const OnOff = () => {

    let [on, setOn] = useState<boolean>(false);

    const styleOn = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        background: on ? 'green' : 'white',
        color: on ? 'white' : 'black'
    }

    const styleOff = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        background: on ? 'white' : 'red',
    }
    const cycle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '100%',
        display: 'inline-block',
        marginLeft: '10px',
        background: on ? 'green' : 'red',
    }
    return <div>
        <div onClick={() => { setOn(true) }} style={styleOn}>On</div>
        <div onClick={() => { setOn(false) }} style={styleOff}>Off</div>
        <div style={cycle}></div>
    </div>
}