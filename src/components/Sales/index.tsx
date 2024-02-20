import { sales1 } from "../../assets";
import { FaAngleRight } from "react-icons/fa";

export const Sales = () => {
  return (
    <section
      className="wrapper h-screen w-full
    lg:px-6
    "
    >
      <div
        className="w-full h-full bg-[#d1cdc9] overflow-x-clip rounded-3xl
      
      "
      >
        {/*heading*/}
        <div
          className="flex items-center justify-between
        py-6 px-6
        "
        >
          <h1 className="text-2xl font-semibold">Sales launch spring 2024</h1>
          <h1 className="text-2xl font-semibold">hajster</h1>
        </div>
        {/*heading end */}
        {/* image section*/}
        <div
          className="h-full w-full
        flex flex-col items-center
        gap-4 pt-12"
        >
          {/*img 1*/}
          <div className="flex flex-col gap-2">
            <div>
              <img src={sales1} alt="sales1" className="w-52 h-52" />
            </div>
            <button className="flex justify-between items-center 
            w-full 
            rounded-3xl border border-[#292828] py-2 px-4
            ">
              <span>more details</span>
              <FaAngleRight  />
            </button>
          </div>
             {/*img 2*/}
             <div className="flex flex-col gap-2">
            <div>
              <img src={sales1} alt="sales1" className="w-52 h-52" />
            </div>
            <button className="flex justify-between items-center 
            w-full 
            rounded-3xl border border-[#292828] py-2 px-4
            ">
              <span>more details</span>
              <FaAngleRight  />
            </button>
          </div>
             {/*img 3*/}
             <div className="flex flex-col gap-2">
            <div>
              <img src={sales1} alt="sales1" className="w-52 h-52" />
            </div>
            <button className="flex justify-between items-center 
            w-full 
            rounded-3xl border border-[#292828] py-2 px-4
            ">
              <span>more details</span>
              <FaAngleRight  />
            </button>
          </div>
        </div>
        {/* image section end*/}
      </div>
    </section>
  );
};
