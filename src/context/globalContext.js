import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

        const products = []
        const [session, setSession] = useState(null)

        const data = {
                products,
                session,
                setSession
        }


        return (
                <GlobalContext.Provider value={data}>
                        {children}
                </GlobalContext.Provider>
        )
}

export { GlobalContext, GlobalProvider }