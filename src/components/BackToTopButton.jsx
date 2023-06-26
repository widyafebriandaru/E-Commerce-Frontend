import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let timeoutId;
    const handleScrollDelay = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Adjust the timeout duration (in milliseconds) as needed
    };

    window.addEventListener("scroll", handleScrollDelay);
    return () => {
      window.removeEventListener("scroll", handleScrollDelay);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible
          ? "fixed bottom-4 right-4 opacity-100 transition-opacity duration-500 ease-in"
          : "opacity-0 transition-opacity duration-500 ease-out"
      } bg-black hover:bg-slate-400 text-white text-xs px-3 py-2 rounded-full z-50`}
      onClick={scrollToTop}
    >
      Back to Top
    </button>
  );
};

export default BackToTopButton;
