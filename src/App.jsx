import Lottie from "lottie-react";
import { lazy, Suspense } from "react";
import "./App.css";
import Agents from "./components/agents/Agents";

import ContentBottom from "./components/contentBottom/ContentBottom";
import ContentTop from "./components/contentTop/ContentTop";
import Footer from "./components/footer/Footer";
import loading from "/src/animations/loading.json";

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Banner = lazy(() => import("./components/banner/Banner"));

function App() {
  return (
    <section className="cw:px-2 md:px-5 px-3">
      <Suspense
        fallback={
          <div className="h-[110vh]  flex justify-center items-center">
            <Lottie
              className="h-[900px]  w-[1000px] mx-auto"
              animationData={loading}
              loop={true}
            />
          </div>
        }
      >
        {" "}
        <Navbar />
        <Banner />
      </Suspense>

      <ContentTop />
      <ContentBottom />
      <Agents />
      <Footer />
    </section>
  );
}

export default App;
