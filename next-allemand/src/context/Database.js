import React, { useState } from 'react';

const DatabaseContext = React.createContext({
    isDark: null,
    toggleDatabase: () => {},
});

const DatabaseContextProvider = ({ children }) => {
    const database = useMemo(() => )

    return (
        <DatabaseContext.Provider value={{ isDark, toggleDatabase }}>
            {children}
        </DatabaseContext.Provider>
    );
};

const useDatabaseContext = () => useContext(DatabaseContext);


export { DatabaseContext, DatabaseContextProvider, useDatabaseContext };
