import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Header } from "./Components/Header";
import { Parentitem } from "./Components/Parentitem";
import { useState } from "react";
function App() {
  const [Cart, setCart] = useState(0);

  const callback = (val) => {
    setCart((prev) => prev + val);
    // console.log(val)
  };
  return (
    <>
      <Navbar passCart={Cart} />
      <Header />
      <Parentitem callback={callback} />
    </>
  );
}

export default App;
