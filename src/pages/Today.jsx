import cta from "../assets/cta-bg.jpg";

export default function Today() {
  return (
    <>
      <section
        aria-labelledby="today"
        style={{ backgroundImage: `url(${cta})` }}
        className="bg-cover bg-center bg-no-repeat h-[70vh] text-center flex flex-col items-center justify-center gap-5 text-white md:h-[50vh]"
      >
        <h2 id="today" className="uppercase text-4xl font-bold">
          Don’t <span className="text-[#ED563B]">think</span>, begin{" "}
          <span className="text-[#ED563B]">today</span>!
        </h2>
        <p className="md:w-[65%]">
          Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
          ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a
          nisi luctus imperdiet.
        </p>
        <button className="uppercase font-medium bg-[#ed563b] p-3 px-5 text-white  text-sm hover:bg-[#F9735B]  cursor-pointer">
          become a member
        </button>
      </section>
    </>
  );
}
