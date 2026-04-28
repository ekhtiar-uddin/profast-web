import { motion } from "framer-motion";
import extensionBanner from "/src/assets/extentionBanner.png";
const Extension = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-10 sm:mt-14 md:mt-20 flex flex-col lg:flex-row justify-between gap-10 items-start shortWidth"
    >
      <div>
        <h1 className="mainTitle text-left text-[28px] sm:text-[36px] lg:text-[40px] leading-[32px] sm:leading-[40px]">
          60+ Premium Modules
        </h1>
        <p className="text-left  text-xl font-bold text-deepBlue mb-5">
          Customize Profast for your business
        </p>

        <p className="w-full max-w-[550px] text-left commonDescription">
          Innovation drives excellence! We offer comprehensive features that
          will streamline your operations and delight your customers.
          Customizable modules make it simple to tailor our platform for your
          unique needs. Essential Add-ons: Smart Routing, Advanced Tracking,
          Real-time Notifications, Proof of Delivery, Dynamic Pricing, Live
          Support, Fleet Tracking, Quality Assurance, Automated Billing,
          Performance Analytics, Shift Planning, Secure Messaging, Intelligent
          Dispatching, Scheduled Pickups, Digital Documentation and more
        </p>

        <button className="mt-10 btnRegular  cursor-pointer px-8 py-4 hover:shadow-lg border border-p1">
          Get Starter With Free
        </button>
      </div>

      <div className="w-full lg:w-auto">
        <img
          className="w-full max-w-[650px] mx-auto lg:mx-0"
          src={extensionBanner}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Extension;
