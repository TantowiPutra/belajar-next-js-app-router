"use client"

import { createContext, useContext, useState, ReactNode } from "react"

const CountContext = createContext<any>(null);

export function CountProvider({ children } : {children: ReactNode}) {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            { children }
        </CountContext.Provider>
    );
}
export function useCount() {
    return useContext(CountContext);
}