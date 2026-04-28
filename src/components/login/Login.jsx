import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import loading from "/src/animations/login.json";
import logo from "/src/assets/logo.png";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");

    const accepted = e.target.terms.checked;
  };
  return (
    <section className=" font-Inter bg-white">
      {/* w-[1440px] mx-auto */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 2sm:gap-16 lg:gap-20 cw:gap-[211px]">
        <div className="flex-1 pt-8 sm:pt-12 cw:pt-14 px-4 sm:px-8 cw:pl-14 cw:pr-0">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-end ">
              <div className="">
                <img className="w-10 sm:w-auto" src={logo} alt="" />
              </div>

              <div className=" ">
                <h3
                  className="text-[22px] sm:text-[24px] ml-[-16px] leading-[24px] font-extrabold text-blackOne
                 "
                >
                  Profast
                </h3>
              </div>
            </div>

            <div className="">
              <Link to="/" className="flex items-center gap-2">
                <button className="hover:cursor-pointer py-[11px] px-[19px] hover:font-bold bg-p1 text-[#5B6A2E] rounded-full cursor-pointer  navIcon mt-3 ">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full max-w-[400px] mx-auto mt-10 sm:mt-[65px] cw:mr-16">
            <form onSubmit={handleLogin} className=" rounded  ">
              <h2 className="text-[#000] text-[32px] sm:text-[42px] font-extrabold">
                Welcome Back
              </h2>

              <p className="text-[#000] mb-5">Login with Profast</p>

              <div>
                <h3 className="formLevel font-medium text-[#0F172A]">Email</h3>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="riderFormInput mb-3  w-full"
                />
              </div>

              <div>
                <h3 className="formLevel font-medium text-[#0F172A]">
                  Passowrd
                </h3>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="riderFormInput mb-3  w-full"
                />
              </div>

              <div className="mb-3  ">
                <a className="text-[#71717A]  underline ">Forget Password?</a>
              </div>

              <button className="cursor-pointer rounded-[6px] py-2 mx-auto w-full  bg-p1 mb-3    font-medium">
                Login
              </button>

              <p className=" font-medium mb-3  text-[#71717A]   ">
                Don’t have any account?
                <Link to="/register">
                  <a className=" cursor-pointer text-p1"> Register </a>{" "}
                </Link>
              </p>
              <p className=" font-medium   text-[#71717A] text-center mt-2 mb-3  ">
                Or
              </p>
            </form>
            <div className="rounded-[6px] cursor-pointer w-full justify-center flex items-center gap-2 mt-2 px-4 sm:px-8 py-2 text-base border bg-[#E9ECF1]">
              <div className="flex items-center gap-2 text-[#000] font-medium">
                <FcGoogle className="text-2xl"></FcGoogle>
                Login with google
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full lg:w-[500px] cw:w-[500px] bg-[#FAFDF0] h-auto lg:h-screen cw:h-screen transition-all duration-500 flex justify-center items-center py-10 lg:py-0">
          <div className="w-full flex justify-center px-4 sm:px-8">
            <Lottie
              className="h-[320px] w-[320px] xs:h-[360px] xs:w-[360px] sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px] lg:h-[600px] lg:w-[600px]"
              animationData={loading}
              loop={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
