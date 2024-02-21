import { motion } from "framer-motion";
import { herovideo } from "../../assets";

export const Hero = () => {
  return (
    <section className="wrapper relative">
      <div
        className=" relative h-screen w-full bg-[rgb(229,221,221)] flex flex-col 
      "
      >
        {/*content*/}
        <div
          className="flex flex-col 
        lg:flex-row  gap-16   h-full z-10  
        items-start md:items-center lg:justify-between
        
       
         px-6 lg:px-12 max-lg:pt-52 lg:py-32  "
        >
          <h1
            className="capitalize
           md:text-center lg:text-start
           text-7xl lg:text-9xl xl:text-[9rem] lg:w-2/3
           font-semibold lg:font-bold "
          >
            Doing climate right
          </h1>
          <h1 className="text-xl md:text-[24px] 
          lg:text-2xl xl:text-3xl md:text-center lg:text-start 
          font-medium lg:font-semibold">
            Heating,
            <br /> cooling, <br /> and hot water <br />
            with minimal costs and <br /> without harming the environment.
          </h1>
        </div>

        {/*video */}
        <motion.div
          className="w-full h-1/3 opacity-90 min-h-[790px] overflow-y-hidden  
        "
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className=" w-full  absolute bottom-0"
          >
            <source src={herovideo} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
};
