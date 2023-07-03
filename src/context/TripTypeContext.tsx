import { createContext, useState } from "react";

export type Trip = {
    selectedTripType: string
}

type TripContextType = {
    TripType: Trip | null
    setTripType: React.Dispatch<React.SetStateAction<Trip | null>>
}


type TripTypeContextProviderProps = {
    children: React.ReactNode
}

export const TripTypeContext = createContext({} as TripContextType)

export const TripTypeContextProvider = ({children,}: TripTypeContextProviderProps) => {
    const [TripType, setTripType] = useState<Trip | null>({selectedTripType: "One-way"})
    return <TripTypeContext.Provider value={{TripType, setTripType}}> {children} </TripTypeContext.Provider>
}
