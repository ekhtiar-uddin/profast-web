import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import banner1_avif from "/src/assets/banner/banner1.avif";
import banner1_png from "/src/assets/banner/banner1.png";
import banner1_webp from "/src/assets/banner/banner1.webp";
import banner2_avif from "/src/assets/banner/banner2.avif";
import banner2_png from "/src/assets/banner/banner2.png";
import banner2_webp from "/src/assets/banner/banner2.webp";
import banner3_avif from "/src/assets/banner/banner3.avif";
import banner3_png from "/src/assets/banner/banner3.png";
import banner3_webp from "/src/assets/banner/banner3.webp";

import { useState } from "react";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  const banners = [
    { avif: banner1_avif, webp: banner1_webp, png: banner1_png },
    { avif: banner2_avif, webp: banner2_webp, png: banner2_png },
    { avif: banner3_avif, webp: banner3_webp, png: banner3_png },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      div
      className="customWidth mt-[60px]  relative"
    >
      <Carousel className=" w-full ">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="">
              <div className="">
                <picture className="">
                  <source srcSet={banner?.avif} type="image/avif" />
                  <source srcSet={banner.webp} type="image/webp" />
                  <img
                    className="w-full  rounded-4xl"
                    src={banner.png}
                    alt=""
                  />
                </picture>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-navArrow cursor-pointer text-p1 bottom-3 right-16 size-10 [&>svg]:!w-5 [&>svg]:!h-5 sm:bottom-[50px] sm:right-30 sm:size-14 sm:[&>svg]:!w-6 sm:[&>svg]:!h-6 sm:ml-[50px]" />
        <CarouselNext className="cursor-pointer bg-[#03464D] font-bold text-white bottom-3 right-3 size-10 [&>svg]:!w-5 [&>svg]:!h-5 sm:bottom-[50px] sm:right-0 sm:size-14 sm:[&>svg]:!w-6 sm:[&>svg]:!h-6 sm:mr-[50px]" />
      </Carousel>
    </motion.div>
  );
};

export default Banner;
