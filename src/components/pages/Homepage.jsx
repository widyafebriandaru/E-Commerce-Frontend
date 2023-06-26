import Header from "../Header";

import MainText from "../Main";
import { Grid } from "../Main";
import { useNavigate } from "react-router-dom";
import SecondContent from "./SecondContent";
import CarouselComponent from "../Carousel";



const Homepage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="hero-img min-h-screen bg-cover bg-no-repeat bg-center">
        <Header />
        <div className="h-screen flex justify-center">
          <button
            onClick={() => navigate("/all-products")}
            href=""
            className="button my-auto text-white border bg-[#1f2021] py-3 px-5 font-medium hover:bg-white hover:text-black hover:opacity-90 transition ease-in-out duration-[400ms] hover:scale-110"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <MainText />
      <Grid />
      <SecondContent />
      <CarouselComponent/>
      
    </>
  );
};

export default Homepage;
