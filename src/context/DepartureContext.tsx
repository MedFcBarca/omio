import { createContext, useState } from "react";

export type Departure = {
    city: string
}

type DepartureContext = {
    Departure: Departure | null
    setDeparture: React.Dispatch<React.SetStateAction<Departure | null>>;
}


type DepartureContextProviderProps = {
    children: React.ReactNode
}

export const DepartureContextCreate = createContext({} as DepartureContext)

export const DepartureContextProvider = ({children,}: DepartureContextProviderProps) => {
    const [Departure, setDeparture] = useState<Departure | null>({city: ""})
    return <DepartureContextCreate.Provider value={{Departure, setDeparture}}> {children} </DepartureContextCreate.Provider>
}
