"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren, createContext } from "react";

export const Context = createContext<ContextData>({} as ContextData);

export const Providers = ({ children }: PropsWithChildren) => (
    <Context.Provider value={{}}>
        <SessionProvider>{children}</SessionProvider>
    </Context.Provider>
);
