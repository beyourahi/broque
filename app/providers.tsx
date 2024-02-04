"use client";

import { PropsWithChildren, createContext } from "react";

export const Context = createContext<ContextData>({} as ContextData);

export const Providers = ({ children }: PropsWithChildren) => (
    <Context.Provider value={{}}>{children}</Context.Provider>
);
