import Header from "../Header";
function Contact() {
  return (
    <>
      <div className="bg-slate-600 h-[57px]">
        <Header />
      </div>
      <div className="flex flex-col mx-auto pt-20 px-10 bg-white items-center justify-center min-h-screen">
        <h1 className="text-lg mb-5">
          KELOMPOK 3{" "}
          <a href="" className="text-slate-500 hover:text-black">
            Harisenin.com
          </a>
        </h1>
        <form
          action="https://getform.io/f/c14e25fd-7936-4c53-a95c-fc7aadba59a1"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent  placeholder:text-stone-900  border-stone-900  border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent  placeholder:text-stone-900   border-stone-900  border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent  placeholder:text-stone-900   border-stone-900  border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-slate-400 bg-stone-900 drop-shadow-md hover:stroke-white hover:text-white "
          >
            Contact US
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
