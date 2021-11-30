import React, { useContext } from 'react';
import LogContext from "./LogContext";

export default function Log() {
    const context = useContext(LogContext)
    console.log(context)

    function clear() {
    context.addMessage([]);
    }

    const DisplayLog = () => {
        return context.log.length > 0 ?
            context.log.map((msg, i) =>
                    <li key={i}>
                    {msg}
                </li>

                )
            : <div></div>
    }

    return (
        <>
            <h2>Messages</h2>
            <DisplayLog />
            <br/>
            <button className="clear" onClick={clear}> clear </button>
        </>
    )
}
