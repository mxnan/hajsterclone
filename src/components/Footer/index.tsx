import { footersahara, hajsterlogo } from "../../assets";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="wrapper h-[80vh] w-full">
      <div
        className="h-full w-full 
    flex flex-col items-center justify-around
    px-6 "
      >
        <div className="h-max w-full ">
          <div className="flex flex-col gap-16">
            <div className=" w-full flex justify-between">
              <img src={hajsterlogo} alt="logo" className="w-16 h-16" />
              <div>
                <span>
                  Founded by the <br /> Company
                </span>
                <img src={footersahara} alt="logo" />
              </div>
            </div>
            <div className="text-xl font-semibold flex gap-8">
              <button className="p-1">product</button>
              <button className="p-1">about</button>
              <button className="p-1">contacts</button>
              <button className="p-1">blog</button>
            </div>
          </div>
          <div className=" flex flex-col gap-6 pt-10 justify-center">
            <h1 className="text-2xl">
              Be aware of our updates - subscribe to our <br /> newsletter .
            </h1>
            <input
              type="text"
              className="w-1/2 p-3 rounded-2xl bg-[#fffce3] "
            />
          </div>
        </div>
        <div className="w-full h-max flex flex-col gap-20">
          <div className="flex justify-between items-center">
            <div className="icon flex flex-row gap-8">
              <FaFacebook className="w-10 h-10" />
              <FaInstagram className="w-10 h-10" />
              <FaYoutube className="w-10 h-10" />
              <FaLinkedin className="w-10 h-10" />
            </div>
            <span>info@hajster.com</span>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex flex-row gap-8">
              <span className="text-2xl font-semibold">Privacy Policy</span>
              <span className="text-2xl font-semibold">Terms & Conditions</span>
            </div>
            <div className="flex justify-between">
              <button>en arrowicon</button>
              <span>@2024 Hajster</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
