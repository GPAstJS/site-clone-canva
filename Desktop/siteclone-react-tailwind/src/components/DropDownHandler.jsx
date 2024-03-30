import { useState } from "react";

export default function DropDownHandler(props) {
  const [handler, setHandler] = useState(false);

  function onMouseEnter() {
    setHandler(true);
  }

  function onMouseLeave() {
    setHandler(false);
  }

  return (
    <div className=":w-full sm:w-40">
      <button
        className=" text-sm font-roboto 3xl:text-center h-10 rounded hover:bg-slate-200 relative sm:w-full sm:text-left"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {props.innerText}

        <div
          style={{
            display: handler === true ? "block" : "none",
          }}
          className="w-[80rem] h-[25rem]  rounded-2xl bg-transparent z-0 absolute"
        >
          {props.children}
        </div>
      </button>
    </div>
  );
}
