import Props from './component/Props';
import React, {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    function Increase() {
      setCount(count+1);
    }
    function Decrease() {
      setCount(count-1);
    }

    return (
    <div>
      <button onClick={Increase}>
        increase
      </button>
      <button onClick={Decrease}>
        decrease
      </button>
      <Props count={count}/>
    </div>
    );
}

export default App;