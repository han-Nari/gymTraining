import bg from "../assets/gym-video.mp4";

export default function Hero() {
  return (
    <main className="relative h-screen" aria-labelledby="home">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bg}
        autoPlay
        loop
        muted
        id="home"
      />

      <div className="absolute inset-0 bg-[#212A35]/80"></div>

      <div className="relative z-10 flex flex-col gap-10  items-center justify-center h-full uppercase text-white font-bold">
        <h4 className="text-xl text-center">work harder, get stronger</h4>
        <h1 className="text-7xl font-extrabold text-wrap text-center">
          easy with our <span className="text-[#ED563B]">gym</span>
        </h1>
        <button className="uppercase font-medium bg-[#ed563b] p-3 px-5 text-white  text-sm hover:bg-[#F9735B]  cursor-pointer">
          become a member
        </button>
      </div>
    </main>
  );
}
