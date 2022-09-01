import { useContext } from "react"
import { NumberContext } from "../context/NumberContext"

function NumberDobro() {
    const {numberDobro} = useContext(NumberContext)

    return(
        <>
            <h2>Dobro de Number: {numberDobro}</h2>
        </>
    )
}

export default NumberDobro