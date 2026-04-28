import { motion } from "framer-motion";

import FrequentQuestion from "../contentBottom/FrequentQuestion";
import Pricing from "../pricing/Pricing";
import { agents } from "./agent.constants";
import Rider from "./Rider";
import worker from "/src/assets/agent-pending.png";
import deliveryman from "/src/assets/tiny-deliveryman.png";
const Agents = () => {
  return (
    <div className="mb-12 sm:mb-16 md:mb-20">
      {/* How Earning Works */}

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="customWidth bg-white rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col lg:flex-row justify-center items-center py-10 sm:py-14 lg:py-20 gap-10 lg:gap-20 px-4 sm:px-8 cw:px-0"
      >
        <div>
          <div className="">
            <img loading="lazy" src={deliveryman} alt="" />
          </div>

          <h1 className="mt-4 mainTitle text-left ">How Earning Works</h1>
          <p className="mt-4 text-blackNav ">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal <br /> packages to business shipments —
            we deliver on time, every time.
          </p>
          <div id="beRider" className="flex items-center mt-8 ">
            <button className="navBeRider w-[220px] xs:w-[260px] lg:w-[310px] rounded-full">
              Be a Rider
            </button>
            <button className="cursor-pointer bg-navArrow rounded-full w-[56px] h-[56px] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M6.33398 14.1668L14.6673 5.8335"
                  stroke="#CAEB66"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.33398 5.8335H14.6673V14.1668"
                  stroke="#CAEB66"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-auto">
          <img
            loading="lazy"
            className="w-full max-w-[520px] mx-auto lg:mx-0"
            src={worker}
            alt=""
          />
        </div>
      </motion.div>

      {/* Our Top Agents */}
      <section id="about" className="shortWidth mt-12 sm:mt-16 md:mt-24">
        <h1 className="  mainTitle">Our Top Agents</h1>
        <p className="commonDescription">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. adipisicing elit.
        </p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {agents?.map((agent) => (
            <div key={agent?.id} className="bg-white p-4 rounded-2xl">
              <img
                loading="lazy"
                className="h-[260px] xs:h-[280px] lg:h-[303px] w-full object-cover rounded-xl"
                src={agent?.img}
                alt=""
              />
              <h4 className="text-[28px] mt-4 font-bold text-workText">
                {agent?.name}
              </h4>

              <div className="flex justify-between items-center mt-2 ">
                <p className="font-medium text-blackNav">{agent?.area}</p>
                <p className=" shortTitle">{agent?.experience}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <div className="">
        <h1 className="mainTitle mt-24 ">Flexible Earning Opportunity</h1>
        <p className="commonDescription">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>

      <Rider />

      {/*       <Pricing /> */}
      <Pricing />

      {/*     <FrequentQuestion /> */}
      <FrequentQuestion />

      {/*  Be a Rider*/}
    </div>
  );
};

export default Agents;
