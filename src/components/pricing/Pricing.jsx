import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "./pricingPlans";
const Pricing = () => {
  return (
    <section id="pricing" className="mt-24 customWidth">
      <h1 className="  mainTitle">Plans & Pricing</h1>
      <p className="commonDescription">
        Our maximum is their minimum — unlimited units for unlimited value.
      </p>

      <div className="flex flex-wrap items-center gap-3 justify-center mt-3 mb-10 sm:mb-16 px-2">
        <p className="text-navArrow font-semibold">Monthly</p>
        <div className=" ">
          <div className="text-sm font-Inter  font-medium transition-all duration-300 pl-4  rounded-full bg-workText text-white ">
            <button className="bg-white  m-0.5  p-3 ml-4 rounded-full h-[35px] w-[35px]"></button>
          </div>
        </div>
        <p className=" text-center  font-semibold  ">
          Yearly{" "}
          <span className="text-workDesc font-medium">
            (one month free)
          </span>{" "}
        </p>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-[1062px] mx-auto"
      >
        {pricingPlans?.map((plan, index) => (
          <div
            key={index}
            className={`pb-10 transform  transition-all duration-150 shadow p-4 border-t-4  rounded-sm ${
              plan?.id === "pro"
                ? "h-[105%] text-white -translate-y-3 md:hover:-translate-y-5 bg-workText border-secondary-600"
                : "md:hover:-translate-y-1 border-workText bg-white"
            }`}
          >
            <div className="">
              <div
                className={`flex justify-between ${
                  plan?.id === "pro" ? "mt-4" : ""
                }  mt-1 `}
              >
                <h3
                  className={`font-semibold ${
                    plan?.id === "pro" ? "text-white " : "text-navArrow"
                  } text-xl`}
                >
                  {plan?.title}
                </h3>
                {plan?.id === "pro" && (
                  <span className="addFlexItems h-[22px]  px-1 rounded bg-[#fab400] text-[12px] font-semibold ">
                    Most Popular
                  </span>
                )}
              </div>
              <p
                className={`${
                  plan?.id === "pro" ? "text-white " : "text-workDesc"
                } text-[13px]  font-semibold`}
              >
                {plan?.tagline}
              </p>
              <h1 className="mt-8 text-3xl font-semibold">
                {plan?.monthlyPrice} <span className="text-lg">.50</span>/
                <span className="font-semibold">m</span>
              </h1>
              <p
                className={`${
                  plan?.id === "pro" ? "text-white " : "text-workDesc"
                } mt-1 text-sm font-medium  `}
              >
                ${plan?.annualPrice} if billed annually
              </p>
              <button
                className={`${
                  plan?.id === "pro"
                    ? "bg-p1 text-navArrow hover:bg-p1/90 "
                    : "bg-white border  border-p1 hover:text-navArrow hover:bg-p1 "
                } my-3   transition-all duration-100 px-3 py-1 text-sm rounded-[5px]  font-bold cursor-pointer w-full  `}
              >
                Start 14-day trial
              </button>

              <p className="font-bold text-sm my-6">{plan?.includesTitle}</p>

              <div>
                {plan?.includes?.map((item, index) => (
                  <div
                    key={index}
                    className="font-medium  flex items-center gap-2"
                  >
                    <Check className=" w-[15px]" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="flex  text-center justify-center my-14 ">
        <div className="space-y-4  ">
          <p className="text-sm text-blackOne ">
            {" "}
            Prices exclude any applicable taxes.
          </p>

          <p className="text-sm text-blackOne">
            Onboarding available. Onboarding fees apply based on portfolio size.
          </p>

          <button className="bg-p1 hover:bg-white  border border-background hover:shadow-lg cursor-pointer hover:border-p1 px-12 rounded-full font-bold  mt-4 py-4">
            Compare all features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
