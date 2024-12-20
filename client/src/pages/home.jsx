import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../home.css";
import HomeContent from "./homecContent";

function Home() {
  return (
    <>
      <Parallax
        pages={1.9}
        style={{ top: "0", left: "0" }}
        className="animation block w-full h-full"
      >
        <ParallaxLayer offset={0} speed={0.5}>
          {" "}
          <div className="w-full h-full" id="waterfall"></div>{" "}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          {" "}
          <div className="h-full flex flex-col justify-center items-center  ">
            <h1 className="font-bold text-6xl bg-whiteSee border-black border-8 p-5 font-josefin text-black drop-shadow-md">
              Antim-sanskar
            </h1>
            <p className="text-black font-semibold text-lg">
              Even in grief, you're not alone.
            </p>
          </div>{" "}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          {" "}
          <div className="w-full h-full " id="river-bay"></div>{" "}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.9}>
          {" "}
          <div className="w-full h-full" id="pandits"></div>{" "}
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="bg-gradient-to-r from-[#a6aed2] to-[#a2aace] w-full h-full bg-cover -mt-84.5">
            <h1 className="font-josefin pt-20 font-extrabold pl-5 underline">Why Us?</h1>
            <HomeContent />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;
