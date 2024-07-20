// src/context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState('');

    const login = (type) => {
        setIsLoggedIn(true);
        setUserType(type);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserType('');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userType, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};