import { useContext } from "react"
import { NumberContext } from "../context/NumberContext"

function NumberTriplo() {
    const {numberTriplo} = useContext(NumberContext)

    return(
        <>
            <h2>Triplo de Number: {numberTriplo}</h2>
        </>
    )
}

export default NumberTriplo