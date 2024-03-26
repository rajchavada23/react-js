import Card from "./components/Card";

// import Chai from "./Chai";

function App() {
  // const username = "chai aur code"
  let myObj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      {/* <h1>Chai aur react | {username}</h1>
      <Chai /> */}
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card username="chaiaurcode" someObj={myObj} btnText="Click Me" />
      <Card username="hitesh" btnText="Visit Me" />
    </>
  );
}

export default App;
