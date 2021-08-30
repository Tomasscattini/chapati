import React, { createContext, useContext } from 'react';

export const AppContext = createContext();

export const AppCtxProvider = (props) => {
    const value = {};

    return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
