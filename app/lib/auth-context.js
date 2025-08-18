'use client'; // Direktif untuk menandakan ini adalah komponen client-side

import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Cek cookie saat aplikasi dimuat
    useEffect(() => {
        const username = Cookies.get("username");
        if (username) {
            setUser({ username });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
