import CanvaLogo from "../assets/canva-logo.png";
import Dropdown from "./dropdown";
import HamburgerMenu from "./hamburgerMenu";
import { useBreakpoint } from "../utils/useBreakpoint";

export default function Header() {
  const breakpoint = useBreakpoint();
  console.log("breakpoint", breakpoint);

  return (
    <header className="flex 3xl:flex-row sm:flex-row 3xl:justify-between sm:justify-evenly  3xl:items-center sm:items-center 3xl:text-center sm:w-[40rem] 3xl:w-full">
      <nav className="3xl:w-full flex 3xl:flex-row sm:flex-row 3xl:justify-between sm:justify-between  3xl:items-center sm:items-center sm:w-full">
        <div className="flex flex-row 3xl:items-center  justify-center 3xl:w-[15rem] w-[8rem] ">

        <img className="3xl:mr-10 sm:mr-0 w-[6rem]" src={CanvaLogo} alt="Canva Logo" />
        </div>
        
        {breakpoint <= 640 ? <HamburgerMenu /> : <Dropdown />}

        <div className="flex flex-row 3xl:w-[25rem] sm:w-[15rem] h-[5rem] justify-evenly items-center">
               <button className="bg-slate-100   hover:bg-slate-200 3xl:h-[3rem] sm:h-[2rem] sm:w-[6rem] 3xl:w-[9rem] text-black sm:text-sm 3xl:font-bold sm:font-semibold rounded font-roboto ">
          Entrar
        </button>
        <button className="bg-violet-800 3xl:text-lg sm:text-sm hover:bg-violet-900 3xl:h-[3rem] sm:h-[2rem] sm:w-[6rem] 3xl:w-[9rem] text-white 3xl:font-bold rounded sm:font-semibold font-roboto  ">
          Registre-se
        </button>
        </div>

   
      </nav>
    </header>
  );
}
