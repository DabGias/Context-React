// import Comp1 from "./components/Comp1";
import MultiploNumber from "./components/MultiploNumber";
import Number from "./components/Number";
import { NumberContextProvider } from "./context/NumberContext";

function App() {
    // const nome = "JavaScript"  

    return (
        <NumberContextProvider>
          <Number/>
          <MultiploNumber/>
        </NumberContextProvider>
    )
}

export default App;
