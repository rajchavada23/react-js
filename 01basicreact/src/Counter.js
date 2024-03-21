import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(15);

  //   let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1)
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default Counter;
