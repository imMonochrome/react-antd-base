/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
    const [loading, setLoading] = useState(false);

    const stores = {
        loading: loading,
        setLoading: setLoading
    };

    return <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>;
};
