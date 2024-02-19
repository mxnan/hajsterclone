import { hajsterlogo } from "../../assets";
import { HiMenuAlt4 } from "react-icons/hi";

export const Navbar = () => {
  return <header className="wrapper relative">
    <div className="fixed w-full h-24
    px-6 
    flex items-center justify-between">
       <img src={hajsterlogo} alt="logo" className="w-16 h-16" />
       <button className="rounded-full p-1 border-[#292828] border-[1.5px]">
        <HiMenuAlt4 className="w-10 h-10" />
       </button>
       
    </div>
  </header>;
};
