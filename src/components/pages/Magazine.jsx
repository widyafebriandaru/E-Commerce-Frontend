import Header from "../Header";
import CarouselComponent from "../Carousel";
import Footer from "../Footer";

function Magazine() {
  return (
    <div>
      {/* Start HOW TO TAKE CARE OF YOUR CLOTHES */}
      <div id="container1">
        <div className="bg-slate-400 h-[57px]">
          <Header />
        </div>
        <div className="my-9">
          <h1 className="text-xl text-center font-bold ">News</h1>
          <hr className="border-[1px] border-black w-14 mx-auto my-4" />
        </div>
      </div>
      <div className="mx-5 ">
        <img
          src="https://www.screamous.com/cdn/shop/articles/tees_2052x.jpg?v=1617250928"
          alt="How Take Care Your Cloth "
          className="w-[46rem]  mx-auto"
        />
      </div>
      <div className="mx-5 my-8  lg:flex lg:justify-center lg:gap-4 lg:w-[46rem] lg:mx-auto">
        <div>
          <h1 className="text-lg font-medium  ">April 1, 2021</h1>
          <hr className="border-[1px] border-black w-14  my-4" />
        </div>
        <div className="">
          <strong className="text-xl">
            {" "}
            HOW TO TAKE CARE OF YOUR HEART CLOTHES{" "}
          </strong>
          <p className="font-medium">
            Memakai outfit dari brand favoritmu tentunya akan membuat penampilan
            semakin keren. Jadi pasti ga mau dong kalo outfit yang baru kamu
            beli jadi cepat rusak karena tidak tahu bagaimana cara merawatnya.
            Ini dia DO & DON’T’S bagaimana cara merawat outfit kamu. T-SHIRT
            PISAHKAN CUCIAN BERWARNA DAN PUTIH Sebelum dicuci, pisahkan terlebih
            dahulu t-shirt berwarna dan putih. Hal ini di lakukan untuk
            menghindari terjadi nya kelunturan warna serta menjaga agar kondisi
            dan kualitas warna t-shirt tetap terjaga.JANGAN MEMAKAI MESIN CUCI
            Ini merupakan cara yang cukup ampuh untuk menjaga kualitas t-shirt,
            walaupun menggunakan mesin cuci lebih mudah dan praktis, namun
            menggunakan mesin cuci dapat membuat kondisi t-shirt menjadi melar
            dan sablonan baju akan rusak. Cara...
          </p>
          <p className="flex align-middle justify-start items-center my-5">
            <a
              href="#"
              className="italic font-bold text-orange-700 text-sm hover:text-gray-700"
            >
              Continue reading -&gt;
            </a>
          </p>
        </div>
      </div>

      {/* Akhir HOW TO TAKE CARE OF YOUR CLOTHES */}

      {/* Start SCREAMOUS X USUGROW */}
      <div className="mx-5 my-5">
        <img
          src="https://www.screamous.com/cdn/shop/articles/scrms_x_u_300x300.jpg?v=1617250612"
          alt="How Take Care Your Cloth "
          className="w-[46rem]  mx-auto"
        />
      </div>
      <div className="mx-5 my-8 lg:flex lg:justify-center lg:gap-4 lg:w-[46rem] lg:mx-auto">
        <div>
          <h1 className="text-lg font-medium  ">April 1, 2021</h1>
          <hr className="border-[1px] border-black w-14  my-4" />
        </div>
        <div>
          <strong className="text-xl"> SCREAMOUS X USUGROW </strong>
          <p className="font-medium">
            SCREAMOUS CLOTHING Memasuki tahun ke-16 berkarya dan mengawali tahun
            ini dengan bangga kami mengumumkan akan kembali berkolaborasi dengan
            Usugrow, seniman Jepang asal Fukushima yang sangat kami kagumi
            karyanya. Ada banyak alasan mengapa kami memutuskan berkolaborasi
            untuk yang kedua kalinya dengan Usugrow. Selain karena kami sangat
            mengapresiasi karya-karyanya, juga karena ada keterhubungan yang
            kuat dengan konsistensi proses berkaryanya. Hal tersebut
            menginspirasi kami sebagai brand yang mengelaborasikan art dan music
            menjadi produk yang comfy dan timeless. USUGROWUsugrow merupakan
            seniman bereputasi dan berkelas dunia yang selalu diburu karyanya
            karena sejak memulai karirnya di tahun 1993, ia sudah memiliki ciri
            khas detail: goresan tinta hitam di atas kertas putih polos dengan
            desain tengkorak. Baginya tengkorak adalah simbol alam semesta. Ia
            juga dikenal piawai berkarya lewat ilustrasi, lukisan...
          </p>
          <p className="flex align-middle justify-start items-center my-5 hover:text-gray-700">
            <a
              href="#"
              className="italic font-bold text-orange-700 text-sm hover:text-gray-600"
            >
              Continue reading -&gt;
            </a>
          </p>
        </div>
        {/* Responsive untuk tag  */}
        <div className="tag flex gap-4  lg:hidden">
          <strong className="">Tags:</strong>
          <a
            href="#"
            className="text-orange-700 font-medium hover:text-gray-700"
          >
            EVENT
          </a>
          <a
            href="#"
            className="text-orange-700 font-medium hover:text-gray-700"
          >
            NEWS
          </a>
        </div>
      </div>
      {/* Responsive untuk tag min-width 1024 px */}
      <div className="tag flex gap-4  max-lg:hidden w-[46rem] mx-auto ">
        <strong className="">Tags:</strong>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          EVENT
        </a>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          NEWS
        </a>
      </div>
      {/* Akhir SCREAMOUS X USUGROW */}

      {/* Start KICKFEST BANDUNG XIII */}

      <div className="mx-5 my-5">
        <img
          src="https://www.screamous.com/cdn/shop/articles/E-Poster_Map_ebd7cff7-aa09-45d5-8eaf-04bbe39dabab_1728x.jpg?v=1572445154"
          alt="How Take Care Your Cloth "
          className="w-[46rem]  mx-auto"
        />
      </div>
      <div className="mx-5 my-8 lg:flex lg:justify-center lg:gap-4 lg:w-[46rem] lg:mx-auto">
        <h1 className="text-lg font-medium ">October 30, 2019</h1>
        <hr className="border-[1px] border-black w-14  my-4" />
        <div>
          <strong className="text-xl"> KICKFEST BANDUNG XIII </strong>
          <p className="font-medium">
            Ada yang berbeda di Kickfest XIII yang hadir tanggal 31 Oktober-3
            November 2019. Selain durasi perayaan yang lebih panjang menjadi 4
            hari, Screamous akan hadir dengan tampilan yang fresh! Screamous
            mengajak youth generation untuk berani mengekspresikan diri melalui
            produk Screamous yang terelaborasi menjadi produk yang comfy,
            colorful, vibrant & high quality. Memberi dorongan untuk berani beda
            adalah cara kami untuk memperkuat identitas dalam keseharian dan
            bersikap. Itu yang coba kami usung dalam semua image identity
            Screamous. Di Kickfest kali ini kami sudah menyiapkan special
            merchandise; scarf eksklusif dan Screamous Festival Survival Kit
            untuk kamu semua yang berbelanja di booth Screamous dengan minimal
            pembelanjaan 250.000 rupiah. Tidak hanya itu, untuk para member,
            kami akan memberikan tambahan diskon 10% khusus yang berbelanja...
          </p>
          <p className="my-5 ">
            <a
              href="#"
              className="italic font-bold text-orange-700 text-sm hover:text-gray-700"
            >
              Continue reading -&gt;
            </a>
          </p>
        </div>
      </div>

      {/* Akhir KICKFEST BANDUNG XIII */}

      {/* Start Intimate Session with Coldiac */}

      <div className="mx-5 my-5">
        <img
          src="https://www.screamous.com/cdn/shop/articles/0a0e3655-4b36-401f-8d8e-d729e438b7c6_2048x.JPG?v=1571037705%202048w"
          alt="How Take Care Your Cloth "
          className="w-[46rem]  mx-auto"
        />
      </div>
      <div className="mx-5 my-8 lg:flex lg:justify-center lg:gap-4 lg:w-[46rem] lg:mx-auto">
        <h1 className="text-lg font-medium ">October 14, 2019</h1>
        <hr className="border-[1px] border-black w-14  my-4" />
        <div>
          <strong className="text-xl"> Intimate Session with Coldiac </strong>
          <p className="font-medium">
            Merayakan dibukanya store ke-7 Screamous di Malang, kami menggelar
            Intimate Session with Coldiac, yang menjadi bagian dari Tiba-tiba
            Ngegigs Vol. 2 yang digelar tanggal 30 September 2019 lalu. Diadakan
            di Screamous shophouse Malang, Jalan Soekarno Hatta A5, momentum ini
            sekaligus menjadi ajang temu bagi para fans Coldiac. Sekitar 80
            orang hadir untuk menonton performance Coldiac selama 2 jam penuh
            dengan suguhan lagu-lagu hitsnya seperti Vow, Don’t Love Me, White
            Room, Belong. Diselingi canda tawa, suasana yang dibangun oleh
            Sambadha, Tama, Derry dan Bima benar-benar intim, seru dan menjadi
            moment yang sangat menyenangkan. Terima kasih untuk semua yang
            hadir, it was an awesome experience! Sampai ketemu di Tiba-Tiba
            Ngegigs Vol.3!
          </p>
          <p className="my-5 ">
            <a
              href="#"
              className="italic font-bold text-orange-700 text-sm hover:text-gray-700"
            >
              Continue reading -&gt;
            </a>
          </p>
        </div>
      </div>

      {/* Akhir Intimate Session with Coldiac */}

      {/* Start Tag */}

      <div className="tag flex gap-4 mx-5 flex-wrap lg:w-[46rem] lg:justify-center lg:mx-auto ">
        <strong className="">Tags:</strong>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          Coldiac
        </a>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          Intimate Session
        </a>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          Intimate Session with Coldiac
        </a>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          Screamous
        </a>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          Screamous Malang
        </a>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          Scremous shophouse Malang
        </a>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          Store ke-7
        </a>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          Tiba-tiba ngegigs
        </a>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          Tiba-tiba ngegigs Vol-2
        </a>
      </div>

      {/* Start Tag */}

      {/* Start Launching of Arkiv X Screamous */}

      <div className="mx-5 my-5">
        <img
          src="https://www.screamous.com/cdn/shop/articles/Cover-Web_e7fab89a-b70c-43b6-9f9e-f27810863d44_2048x.jpg?v=1564393034"
          alt="How Take Care Your Cloth "
          className="w-[46rem]  mx-auto"
        />
      </div>
      <div className="mx-5 my-8 lg:flex lg:justify-center lg:gap-4 lg:w-[46rem] lg:mx-auto">
        <h1 className="text-lg font-medium ">July 28, 2019</h1>
        <hr className="border-[1px] border-black w-14  my-4" />
        <div>
          <strong className="text-xl"> Launching of Arkiv X Screamous </strong>
          <p className="font-medium">
            Merayakan pencapaian 15 tahun perjalanan kami, adalah sebuah
            kebanggaan bisa mengajak seorang seniman muda berbakat asal Bandung
            yang karyanya sangat dikenal di dunia internasional, Arkiv Vilmansa
            untuk berkolaborasi dengan kami. Tak banyak seniman muda yang
            memiliki karir cemerlang seperti Arkiv, sehingga kami tidak hanya
            mengapresiasi dan tapi juga bersemangat merespon karya Arkiv setara
            dengan kolaborator lain, karena kami merasa memiliki spirit berkarya
            yang sama, tumbuh dan berkembang di industri kreatif kota Bandung.
            Selain itu, ada sentimental value dalam project ini sangat bisa
            mengukuhkan identitas Screamous. ARKIV VILMANSA Memulai karirnya di
            tahun 2005, Arkiv dikenal sebagai toy desainer pertama dari
            Indonesia dan juga seorang urban painter. Karya seni Arkiv yang unik
            dan gampang dikenali membuatnya sangat mudah menarik perhatian para
            kolektor dan penikmat seni. Dalam perjalanannya, Arkiv memulai karir
            dengan membuat...
          </p>
          <p className="my-5 ">
            <a
              href="#"
              className="italic font-bold text-orange-700 text-sm hover:text-gray-700"
            >
              Continue reading -&gt;
            </a>
          </p>
        </div>
        <div className="tag flex gap-4 lg:hidden ">
          <strong className="">Tags:</strong>
          <a
            href="#"
            className="text-orange-700 font-medium hover:text-gray-700"
          >
            EVENT
          </a>
          <a
            href="#"
            className="text-orange-700 font-medium hover:text-gray-700"
          >
            NEWS
          </a>
        </div>
      </div>
      {/* Tag Responsive */}
      <div className="tag flex gap-4  max-lg:hidden w-[46rem] mx-auto ">
        <strong className="">Tags:</strong>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          EVENT
        </a>
        <a href="#" className="text-orange-700 font-medium hover:text-gray-700">
          NEWS
        </a>
      </div>

      {/* Akhir Launching of Arkiv X Screamous */}

      {/* Start Next Page */}
      <div className="flex justify-center gap-3 text-lg font-medium my-8 ">
        <span>
          <a
            href="#"
            className="hover:border-b-4 hover:border-black transition-all hover:pb-3"
          >
            1
          </a>
        </span>
        <span>
          <a
            href="#"
            className="hover:border-b-4 hover:border-black transition-all hover:pb-3"
          >
            2
          </a>
        </span>
        <span>
          <a
            href="#"
            className="hover:border-b-4 hover:border-black transition-all hover:pb-3"
          >
            3
          </a>
        </span>
        <span>
          <a
            href="#"
            className="hover:border-b-4 hover:border-black transition-all hover:pb-3"
          >
            4
          </a>
        </span>
        <span>
          <a
            href="#"
            className="hover:border-b-4 hover:border-black transition-all hover:pb-3"
          >
            5
          </a>
        </span>
        <span>
          <a
            href="#"
            className="hover:border-b-4 hover:border-black transition-all hover:pb-3"
          >
            -&gt;{" "}
          </a>
        </span>
      </div>

      <hr className="border-[1px] border-black w-14  my-4 mx-auto" />
      {/* Akhir Next Page */}
      <CarouselComponent/>
      <Footer />
    </div>
  );
}

export default Magazine;
