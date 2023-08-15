import React, { useContext, useMemo } from "react";

export const AppContext = React.createContext({} as any)

interface IAppProvider {
    children: React.ReactNode;
}

export function AppProvider({ children }: IAppProvider) {

    const [hello, setHello] = React.useState('testerere');


    const memoedValue = useMemo(
        () => ({
          hello
        }),
        [
            hello
        ]
      );

    return (
        <AppContext.Provider value={memoedValue}>{children}</AppContext.Provider>
    );
}

export function useAppContext(): any {
    return useContext(AppContext);
}