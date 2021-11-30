import React from 'react';

const LogContext = React.createContext({
    log: [],
    addMessage: () => { }
})

export default LogContext