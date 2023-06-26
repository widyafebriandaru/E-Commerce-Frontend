function SecondContent() {
  // Container
  return (
    <div id="container-secondcontent " className="mt-11">
      {/* <!-- Start Description product --> */}
      <div id="description-product" className="flex justify-center items-center py-11 px-8 max-md:flex-col max-md:5">
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
        <img src="https://cdn.shopify.com/s/files/1/1365/9261/products/id-11134201-23020-9f4o5wqk0wnvf7_900x.jpg?v=1677755200" alt="Jaket Screamous" className="w-[30rem]" />
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
            <span className="border border-black py-[0.10rem] px-2">Green</span>
            <span className="py-2">Ukuran</span>
            <ul className="flex justify-evenly w-10/12 text-[0.75rem] items-center my-4">
              <li className="border border-black px-3 py-1 cursor-pointer hover:bg-slate-300">S</li>
              <li className="border border-black px-3 py-1 cursor-pointer hover:bg-slate-300">M</li>
              <li className="border border-black px-3 py-1 cursor-pointer hover:bg-slate-300">L</li>
              <li className="border border-black px-3 py-1 cursor-pointer hover:bg-slate-300">XL</li>
              <li className="border border-black px-3 py-1 cursor-pointer hover:bg-slate-300">XXL</li>
            </ul>
            <div className="flex flex-col justify-around h-28">
              <button className="w-full border border-black decoration-1 py-2">Add To Chart</button>
              <button className="bg-black text-white w-72 border hover:opacity-80 py-2">Buy It Now</button>
            </div>
            <span className="my-6 text-xs font-sans font-semibold text-orange-500 hover:text-black cursor-pointer">Full Detail -&gt </span>
          </div>
        </div>
      </div>

      {/* <!-- End Singel Product --> */}
    </div>
  )
}

export default SecondContent
