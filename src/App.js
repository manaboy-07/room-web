/** @format */

import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./App.css";

import images from "./slides";
import Nav from "./components/Nav";
import DIscover from "./components/DIscover";
import About from "./components/About";

function App() {
  const [id, setId] = useState(0);
  const incrementID = () => {
    setId((prevState) => prevState + 1);
    if (id === images.length - 1) {
      setId(0);
    }
  };
  const decrementID = () => {
    setId((prevState) => prevState - 1);
    if (id <= 0) {
      setId(images.length - 1);
    }
  };
  const [activeImage, setActiveImage] = useState(images[0].src);

  useEffect(() => {
    setActiveImage(images[id].src);
  }, [id]);

  return (
    <div className='App flex flex-col'>
      <div className='flex'>
        <div>
          <Nav />
          <img src={activeImage} alt='' className='image' />
        </div>

        <div className='controls'>
          <DIscover />
          <button
            onClick={decrementID}
            className='text-3xl bg-black text-white hover:bg-accent p-4'>
            <AiOutlineLeft />
          </button>
          <button
            onClick={incrementID}
            className='text-3xl bg-black text-white hover:bg-accent p-4'>
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <About />
    </div>
  );
}

export default App;
