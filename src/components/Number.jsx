import { useContext } from "react"
import { NumberContext } from "../context/NumberContext"

function Number() {
   const {number, aumentar} = useContext(NumberContext)
   
    return(
    <>
        <p>Número: {number}</p>
        <button onClick={aumentar}>Aumentar</button>
    </>
   ) 
}

export default Number