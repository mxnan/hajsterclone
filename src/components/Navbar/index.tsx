import { hajsterlogo } from "../../assets";
import { HiMenuAlt4 } from "react-icons/hi";

export const Navbar = () => {
  return <header className="wrapper relative z-10">
    <div className="fixed w-full h-24
    px-6 
    flex items-center justify-between">
       <img src={hajsterlogo} alt="logo" className="w-16 h-16" />
       <button className="rounded-full p-[4px] border-[#292828] border-[2px]">
        <HiMenuAlt4 className="w-8 h-8" />
       </button>
       
    </div>
  </header>;
};
