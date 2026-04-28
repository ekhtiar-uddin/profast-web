import { motion } from "framer-motion";
import Lottie from "lottie-react";
import RiderForm from "./RiderForm";
import rider from "/src/animations/rider.json";
const Rider = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="customWidth mt-10 py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-[102px] rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white"
    >
      <h1 className="mainTitle text-left">Be a Rider</h1>
      <p className="text-blackNav mt-4 pb-8 sm:pb-[50px] ">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal <br className="hidden sm:block" /> packages to
        business shipments — we deliver on time, every time.
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="2"
        viewBox="0 0 1282 2"
        fill="none"
      >
        <path d="M0 1H1282" stroke="black" strokeOpacity="0.1" />
      </svg>

      {/*  */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
        <div className="mt-8 sm:mt-[50px] ">
          <h1 className="text-[28px] font-extrabold text-workText mb-5">
            Tell us about yourself
          </h1>

          <RiderForm />
        </div>

        <div className="-mb-6 lg:-mb-14 w-full max-w-[520px] mx-auto lg:mx-0">
          {/* <img className="" src="/src/animations/rider.json" alt="" /> */}
          <Lottie animationData={rider} loop={true} />;
        </div>
      </div>
    </motion.div>
  );
};

export default Rider;
