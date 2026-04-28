import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { testimonials } from "./customers.constants";
import customerTop from "/src/assets/customer-top.png";
import arrowleft from "/src/assets/customers/arrow-left.svg";
import arrowright from "/src/assets/customers/arrow-right.svg";
import ellipseTwo from "/src/assets/customers/Ellipse 2.svg";
import ellipseSix from "/src/assets/customers/Ellipse 6.svg";
import reviewQuote from "/src/assets/reviewQuote.png";
const ContentBottom = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // start from first item
  const [visibleCount, setVisibleCount] = useState(5);

  const totalItems = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      // Breakpoints from theme:
      // 3xs:328, 2xs:410, xs:512, sm:640, 2sm:704, md:768, 2md:832, lg:1024
      if (width >= 1024) setVisibleCount(5);
      else if (width >= 704) setVisibleCount(3);
      else if (width >= 512) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const activeCardIndex = useMemo(
    () => Math.floor(visibleCount / 2),
    [visibleCount],
  );

  // Get visible items for current window
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(testimonials[(currentIndex + i) % totalItems]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-12 sm:mt-16 md:mt-20 lg:mt-[100px]"
    >
      <div className="max-w-max mx-auto">
        <img loading="lazy" src={customerTop} alt="" />
      </div>
      {/* What our customers are sayings */}
      <div>
        <h1 className="mainTitle text-[26px] sm:text-[34px] lg:text-[40px] leading-[32px] sm:leading-[40px]">
          What our customers are sayings
        </h1>
        <p className="commonDescription">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>

        <div
          className="mt-8 sm:mt-10 grid grid-cols-1 xs:grid-cols-2 2sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mx-0 cw:mx-[-260px] transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / visibleCount) * 0}%)`,
          }}
        >
          {visibleTestimonials.map((testimonial, idx) => (
            <div
              key={testimonial?.id}
              className={`p-5 sm:p-6 lg:p-8 bg-white rounded-3xl transition-all duration-500 ${
                idx === activeCardIndex
                  ? "max-h-max opacity-100"
                  : visibleCount === 1
                    ? "opacity-100"
                    : "mt-6 sm:mt-[50px] opacity-30"
              }`}
            >
              <img loading="lazy" src={reviewQuote} alt="" />

              <p className="mt-2 font-medium text-workDesc">
                A posture corrector works by providing support and gentle
                alignment to your shoulders, back, and spine, encouraging you to
                maintain proper posture throughout the day.
              </p>

              <div className="mt-6">
                <svg width="100%" height="1" className="block">
                  <line
                    x1="0"
                    y1="1"
                    x2="100%"
                    y2="1"
                    stroke="#03464D"
                    strokeWidth="1"
                    strokeDasharray="8,4"
                  />
                </svg>
              </div>

              <div className="flex gap-4 mt-6">
                <div>
                  <img
                    loading="lazy"
                    className="w-[48px] h-[48px] rounded-full"
                    src={testimonial?.customerImage}
                    alt=""
                  />
                </div>

                <div>
                  <h4 className="text-[18px] sm:text-[20px] font-extrabold text-workText">
                    {testimonial?.customerName}
                  </h4>
                  <h4 className="mt2 text-workDesc font-medium">
                    {testimonial?.customerRole}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 sm:mb-16 md:mb-[128px] mt-6 md:mt-[-20px] flex gap-6 sm:gap-8 items-center justify-center">
          <div
            className="w-10 h-10 hover:shadow-lg cursor-pointer rounded-full bg-white flex justify-center items-center hover:bg-gray-50 transition-colors "
            onClick={prevSlide}
          >
            <img loading="lazy" src={arrowleft} alt="" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 items-center max-w-[90vw]">
            {testimonials?.map((_, idx) => (
              <img
                loading="lazy"
                key={idx}
                src={idx === currentIndex ? ellipseTwo : ellipseSix}
                alt=""
                className="cursor-pointer"
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>

          <div
            className="w-10 rounded-full cursor-pointer h-10  hover:shadow-lg bg-p1 flex justify-center items-center hover:opacity-80 transition-opacity"
            onClick={nextSlide}
          >
            <img loading="lazy" src={arrowright} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentBottom;
