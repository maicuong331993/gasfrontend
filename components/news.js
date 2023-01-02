export default function News() {
  return (
    <section className="xs:hidden lg:flex relative -top-40 bg-transparent">
      <div className="relavite flex w-full h-auto bg-transparent justify-center items-start">
        <div className="sm:hidden md:flex lg:w-4/5 justify-between shadow-lg">
          <div className="flex-1 flex-col bg-white hover:bg-blue-900 hover:bg-opacity-20 hover:backdrop-blur-sm transform translate duration-700">
            <div className="flex flex-col flex-1 m-4 ">
              <a href="#">
                <div className="flex p-4 text-white justify-center items-center bg-sky-500 z-50">
                  News
                </div>
              </a>
              <img
                className="flex aspect-[4/3]"
                src="assets/images/how-to-ground-the-refrigeration-dryer-title-eng-min.jpg"
              />
              <h3 className="flex bg-white font-semibold text-lg p-4">
                How to ground
              </h3>
              <p className="flex bg-white text-justify  p-4 z-50">
                Grounding the refrigeration dryer All of our refrigeration
                dryers have wires and terminals drawn out for...
              </p>
              <a
                className="flex px-4 py-8 bg-white text-blue-500 hover:text-blue-700 text-sm"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="flex-1 flex-col bg-white hover:bg-blue-900 hover:bg-opacity-20 hover:backdrop-blur-sm transform translate duration-700">
            <div className="flex flex-col flex-1 m-4 ">
              <a href="#">
                <div className="flex p-4 text-white justify-center items-center bg-sky-500 z-50">
                  Event
                </div>
              </a>
              <img
                className="flex aspect-[4/3]"
                src="assets/images/how-to-ground-the-refrigeration-dryer-title-eng-min.jpg"
              />
              <h3 className="flex bg-white font-semibold text-lg p-4">
                How to ground
              </h3>
              <p className="flex bg-white text-justify  p-4 z-50">
                Grounding the refrigeration dryer All of our refrigeration
                dryers have wires and terminals drawn out for...
              </p>
              <a
                className="flex px-4 py-8 bg-white text-blue-500 hover:text-blue-700 text-sm"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="flex-1 flex-col bg-white hover:bg-blue-900 hover:bg-opacity-20 hover:backdrop-blur-sm transform translate duration-300">
            <a href="#">
              <div className="flex p-4 mt-4 ml-4 mr-4 text-white justify-center items-center bg-sky-500">
                Corporate Video
              </div>
            </a>
            <div className="flex m-4 aspect-w-16 aspect-h-9 justify-center overflow-hidden">
              {/* <iframe
                className="flex transform transition duration-500 hover:scale-110"
                src="https://www.youtube.com/embed/5ngu0uUavzw"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
            <div className="flex m-4 aspect-w-16 aspect-h-9 justify-center overflow-hidden">
              {/* <iframe
                className="flex transform transition duration-500 hover:scale-110"
                src="https://www.youtube.com/embed/7dBKtQ5I6-o"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
          <div className="flex-1 flex-col bg-white hover:bg-sky-100 hover:bg-opacity-90 hover:backdrop-blur-sm transform translate duration-300">
            <a href="#">
              <div className="flex p-4 mt-4 ml-4 mr-4 justify-center items-center bg-blue-900 text-white">
                Inquiry
              </div>
            </a>
            <a href="#">
              <div className="flex p-4 m-4 justify-center items-center bg-blue-900 text-white">
                Find us
              </div>
            </a>
            <p className="uppercase text-center py-1">
              TEL : +82 31-798-0171~3
            </p>
            <p className="uppercase text-center py-1">FAX : +82 31-798-0175</p>
          </div>
        </div>
      </div>
    </section>
  );
}
