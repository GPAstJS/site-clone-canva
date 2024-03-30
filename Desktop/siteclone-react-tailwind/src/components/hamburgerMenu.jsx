import MenuIcon from "../assets/menu-icon.svg";
import CloseIcon from "../assets/close-icon.svg";

import { useState } from "react";

export default function HamburgerMenu() {
  const [visibility, setVisibility] = useState("none");

  function displayHandler() {
    visibility === "none" ? setVisibility("block") : setVisibility("none");
  }

  return (
    <div className="flex flex-col relative ">
      <img
        className="bg-white rounded"
        style={{
          position: visibility === "block" ? "static" : "fixed",
        }}
        onClick={displayHandler}
        src={MenuIcon}
        alt="Menu Icon"
      />

      <div
        className="flex flex-col text-black z-[1] opacity-85 rounded bg-white z-10 rounded  shadow-xl h-[36rem]  left-[-15rem]  w-[40rem] absolute"
        style={{
          display: visibility,
        }}
      >
        <header className="flex flex-row justify-end">

        <img onClick={displayHandler} className="mr-5" src={CloseIcon} alt="Close Icon"/>
        </header>

        <div className="flex flex-col w-full mt-[8rem]  gap-5 text-3xl font-bold  items-center" >
        <p>Destaque</p>
        <p>Empresarial</p>
        <p>Educação</p>
        <p>Planos e preços</p>
        <p>Aprenda</p>

        </div>

      </div>
    </div>
  );
}
