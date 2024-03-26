import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(15);

  //   let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    if(counter < 20) {
        setCounter(counter + 1)
    } else {
        alert("You have add more then 20 counter");
    } 
  };

  const removeValue = () => {
    if(counter >= 1) {
      setCounter(counter - 1)
    } else {
      alert("You have remove more then 20 counter");
    }
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
