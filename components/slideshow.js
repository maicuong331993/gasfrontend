import { useEffect, useRef, useState } from "react";

const slideImages = [
  "/assets/images/041.jpg",
  "/assets/images/042.jpg",
  "/assets/images/043.jpg",
];
let count = 0;
export default function SlideShow() {
  const slideRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    startSlider();
  }, []);
  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 30000);
  };
  const handleOnNextClick = () => {
    count = (count + 1) % slideImages.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    const slideImageLength = slideImages.length;
    count = (currentIndex + slideImageLength - 1) % slideImageLength;
    setCurrentIndex(count);
  };

  return (
    <section
      ref={slideRef}
      className="relative select-none w-full aspect-video xs:aspect-square lg:aspect-[21/9]"
    >
      <img
        className="h-full w-full object-cover"
        src={slideImages[currentIndex]}
        alt="Something went wrong"
      />
      <div className="absolute top-1/2 transform translate-y-1/2  px-6  w-full flex justify-between items-center">
        <button onClick={handleOnPrevClick}> Prev</button>
        <button onClick={handleOnNextClick}> Next</button>
      </div>
    </section>
  );
}
