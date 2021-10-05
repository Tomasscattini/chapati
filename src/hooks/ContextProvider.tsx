import React, { createContext, useContext } from 'react';

interface AppContextInterface {
    user?: any;
}

export const AppContext = createContext<AppContextInterface | null>(null);

export const AppCtxProvider: React.FC = (props) => {
    const value: AppContextInterface = {};

    return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
