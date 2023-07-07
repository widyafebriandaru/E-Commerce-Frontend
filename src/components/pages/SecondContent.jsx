import { useNavigate } from "react-router"
import { useState } from "react";

function SecondContent() {
  
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  // Container
  return (
    <div id="container-secondcontent " >
      {/* <!-- Start Description product --> */}
      <div id="description-product" className="flex justify-center items-center pt-5 pb-7 px-8 max-md:flex-col max-md:5">
        {/* <!-- Sisipan Gambar  --> */}
        <img src="https://cdn.shopify.com/s/files/1/1365/9261/files/DSCF7675_540x.jpg?v=1677780326" alt="Image-description" className="w-96 max-md:w-[45rem]" />

        {/* <!-- Description --> */}
        <div className="p-8 pr-0 max-md:px-0">
          <h2 className="font-semibold mb-3 text-lg">GOOD VIBRATIONS - CAPSULE SERIES</h2>
          <p className="text-xs mb-3 font-medium">
            After years of uncertainty, restrain,
            <br />
            <br />
            and dismay - it&#8217;s time to celebrate a new beginning.
            <br />
            A moment to put the past behind and going forward
            <br />
            <br />
            with new spirit in mind.
            <br />
            <br />
            The hope of proclaiming the good and positive energy
            <br />
            is reflected in our latest collection, Good
            <br />
            Vibration. Bursting with vibrant colors and bold
            <br />
            graphics to represent the new beginning we keen to
            <br />
            embrace along with brand new clothing cuts to
            <br />
            <br />
            represent the change in our society.
            <br />
            <br />
            The start of a new chapter of our lives - a feeling, a
            <br />
            <br />
            celebration, a good vibration.
          </p>
          <a href="#" className="bg-[#1f2021] text-[#f7f7f7] px-4 py-2 text-sm hover:opacity-75 transition cursor-pointer">
            Discover More...
          </a>
        </div>
      </div>

      {/* end Description product */}

      {/* <!-- Start Singel Product --> */}
      <div id="product-singel" className="flex justify-center items-center px-6 max-md:flex-col pb-7 max-md:transition">
        {/* <!-- Sisipan Gambar --> */}
        <img src="https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-li77pj321yi4e5_360x.jpg?v=1687173662" alt="Jaket Screamous" className="w-[30rem]" />
        {/* <!-- Detail Product --> */}
        <div id="wrapper-detail-product-singel">
          <h2 className="text-center mb-2">Screamous / Daily Wear</h2>
          <h1 className="font-semibold text-center mb-2 text-3xl">
            CAPSULE SERIES
            <br />
            Sweater Crewneck
            <br />
            MARCO GREEN
          </h1>
          <div id="wrapper-harga " className="flex justify-center pb-4">
            <span className="pr-2 line-through decoration-1 font-bold">499.000</span>
            <span className="text-red-500">225.000</span>
          </div>
          <hr className="w-10 border-2 border-black mx-auto" />
          <div className="flex flex-col justify-around items-center">
            <span className="my-3">Warna</span>
            <span className="border border-black py-[0.10rem] px-2">Abu-abu</span>
            <span className="py-2">Ukuran</span>
            <ul className="flex justify-evenly w-10/12 text-[0.75rem] items-center my-4">
      <li
        className={`border border-black px-3 py-1 cursor-pointer ${
          selectedSize === 'S' ? 'bg-black text-white' : 'hover:bg-slate-300'
        }`}
        onClick={() => handleSizeClick('S')}
      >
        S
      </li>
      <li
        className={`border border-black px-3 py-1 cursor-pointer ${
          selectedSize === 'M' ? 'bg-black text-white' : 'hover:bg-slate-300'
        }`}
        onClick={() => handleSizeClick('M')}
      >
        M
      </li>
      <li
        className={`border border-black px-3 py-1 cursor-pointer ${
          selectedSize === 'L' ? 'bg-black text-white' : 'hover:bg-slate-300'
        }`}
        onClick={() => handleSizeClick('L')}
      >
        L
      </li>
      <li
        className={`border border-black px-3 py-1 cursor-pointer ${
          selectedSize === 'XL' ? 'bg-black text-white' : 'hover:bg-slate-300'
        }`}
        onClick={() => handleSizeClick('XL')}
      >
        XL
      </li>
      <li
        className={`border border-black px-3 py-1 cursor-pointer ${
          selectedSize === 'XXL' ? 'bg-black text-white' : 'hover:bg-slate-300'
        }`}
        onClick={() => handleSizeClick('XXL')}
      >
        XXL
      </li>
    </ul>
            <div className="flex flex-col justify-around h-28">
              <button onClick={() => navigate("/products/6")} className="bg-black text-white w-72 border hover:opacity-80 py-2">Buy It Now</button>
            </div> 
          </div>
        </div>
      </div>

      {/* <!-- End Singel Product --> */}
    </div>
  )
}

export default SecondContent
