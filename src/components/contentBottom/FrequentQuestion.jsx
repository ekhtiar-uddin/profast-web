import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "./faq.constants";
const FrequentQuestion = () => {
  const [currentId, setCurrentId] = useState(null);

  const handleVisibility = (itemId) => {
    if (itemId === currentId) {
      setCurrentId(null);
    } else {
      setCurrentId(itemId);
    }
  };

  return (
    <div className="mt-10 sm:mt-14 md:mt-20 mb-12 sm:mb-16 md:mb-[100px]">
      <h1 className="text-workText text-center font-extrabold text-[26px] sm:text-[34px] lg:text-[40px] leading-[32px] sm:leading-[40px] mb-4">
        Frequently Asked Question (FAQ)
      </h1>
      <p className="text-blackNav text-center mb-8 sm:mb-10 px-2">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce <br /> pain, and strengthen your body
        with ease!
      </p>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-[1062px] mx-auto px-3 md:px-5 cw:px-0"
      >
        {faqs.map((item) => (
          <div
            onClick={() => handleVisibility(item?.id)}
            key={item?.id}
            className={`${
              item?.id === currentId
                ? "bg-faqAnswerbg rounded-sm border border-borderTwo "
                : ""
            } ${item?.id === currentId && currentId === 1 ? "mb-4" : "my-4"}`}
          >
            <div
              className={`${
                item?.id === currentId
                  ? "bg-faqAnswerbg rounded-sm border-none"
                  : "bg-white"
              }  border border-borderOne py-5 px-6  rounded-sm  cursor-pointer  flex 
            justify-between gap-4`}
            >
              <h1 className="shortTitle flex-1 leading-snug">
                {item?.question}
              </h1>{" "}
              {item?.id === currentId ? (
                <Minus className="w-6 h-6 sm:w-7 sm:h-7" />
              ) : (
                <Plus className="w-6 h-6 sm:w-7 sm:h-7" />
              )}
            </div>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                item?.id === currentId ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-blackNav text-left pl-6 pb-6">
                  {item?.answer}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col xs:flex-row justify-center items-center mt-10 gap-3 xs:gap-0">
          <button className="navBeRider w-full xs:w-auto">
            See More FAQ’s
          </button>
          <button className="cursor-pointer bg-navArrow rounded-full w-[56px] h-[56px] flex items-center justify-center">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M9.33337 22.6668L22.6667 9.3335"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33337 9.3335H22.6667V22.6668"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FrequentQuestion;
