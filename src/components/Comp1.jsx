import Comp2 from "./Comp2";

function Comp1(props) {
    return(
        <>
            <h2>Comp1 - {props.nome}</h2>
            <Comp2 nome={props.nome}/>
        </>
    )
}

export default Comp1