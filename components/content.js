export default function Content({ menuConstruction }) {
  return (
    <div className="relative flex w-full bg-transparent justify-center">
      <div className=" w-full h-80 relative overflow-hidden">
        <img
          src="assets/images/about-us-title.jpg"
          alt="About us backgound"
          className="absolute h-full w-full object-cover"
        />
        <div className="flex absolute w-full text-white font-normal text-5xl bottom-1/2 justify-center">
          <p>About us</p>
        </div>
      </div>
    </div>
  );
}
