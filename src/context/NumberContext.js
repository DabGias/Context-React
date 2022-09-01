import { createContext, useEffect, useState } from "react";

export const NumberContext = createContext()

export function NumberContextProvider({children}) {
    const [number, setNumber] = useState(0)
    const [numberDobro, setNumberDobro] = useState(0)
    const [numberTriplo, setNumberTriplo] = useState(0)

    useEffect(() => {
        setNumberDobro(number * 2)
        setNumberTriplo(number * 3)
    }, [number])

    const aumentar = () => {
        setNumber(number + 1)
    }

    return(
        <NumberContext.Provider value={{number, numberDobro, numberTriplo, aumentar}}>
            {children}
        </NumberContext.Provider>
    )
}