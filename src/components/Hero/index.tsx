import { motion } from "framer-motion";
import { herovideo } from "../../assets";

export const Hero = () => {
  return (
    <section className="wrapper relative">
      <div
        className=" relative h-screen w-full flex flex-col 
      "
      >
        {/*content*/}
        <div className="flex flex-col gap-16 h-full z-10  px-6 pt-52  ">
          <h1 className="capitalize text-7xl font-semibold ">
            Doing climate right
          </h1>
          <h1 className="text-xl font-medium">
            Heating,
            <br /> &nbsp; cooling, <br /> &nbsp;&nbsp; and hot water <br />
            &nbsp;&nbsp;&nbsp; with minimal costs and <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp; without harming the environment.
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
