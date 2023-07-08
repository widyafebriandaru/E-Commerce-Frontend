/* eslint-disable react/prop-types */
import * as Icon from "react-feather";
import { useNavigate } from "react-router-dom";

const AllProductsCart = ({
  link,
  title,
  rating,
  imgUrl,
  price,
  discountPrice,
  discountPercent,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Icon.Star color="#FEA974" size={18} className="inline" key={i} />
      );
    }
    return stars;
  };


  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(link);
    
  };
  return (
    
    <a
    href={link} 
      onClick={handleNavigate}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-item hover:opacity-80 text-[#232324] rounded-md overflow-hidden font-sans mx-3 max-w-[277px] "
    >
         
      <div className="hover-price text-sm text-red-900 font-semibold border-2 border-red-900 rounded-3xl relative w-20 left-4 top-4 flex items-center">
        <div className="text-center"> Save {discountPercent}%OFF</div>
      </div>
      <div className="flex justify-center">
      <img
        src={imgUrl}
        alt="image"
        className="md:w-full w-52 h-36 md:h-48 object-cover mt-4"
      />
      </div>
      <div className="w-full sm:px-8 ">
        <h2 className="text-base md:text-l pt-2 md:mb-1 font-normal text-center">
          {title}
        </h2>
        <h2 className="text-center text-l md:text-xl font-semibold">
          {" "}
          Rp
          <del className="text-red-500">{discountPrice}</del> {price}
        </h2>
        <p className="flex justify-center text-md md:text-l">{renderStars()}</p>
      </div>
    </a>
  );
};

export default AllProductsCart;
