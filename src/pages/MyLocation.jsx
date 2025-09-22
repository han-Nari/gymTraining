import line from "../assets/line-dec.png";

export default function Location() {
  return (
    <section aria-labelledby="location" className="wrapper-second">
      <div>
        <div className="pb-30 flex flex-col items-center gap-5">
          <h2
            id="location"
            className="text-3xl  font-bold uppercase text-[#232D39]"
          >
            My <span className="text-[#ED563B]">Location</span>
          </h2>
          <img src={line} alt="line" />
        </div>
        <div className="flex flex-col md:flex-row gap-10 [&>*]:flex-1 h-[100vh] md:h-[60vh] ">
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.901288931222!2d120.9739985748714!3d14.718172474187828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b3dcce1a8ba7%3A0xd2ac7d6d5875be8e!2s29%20P.%20Gregorio%20Street%2C%20Valenzuela%2C%20Kalakhang%20Maynila!5e0!3m2!1sfil!2sph!4v1758521227248!5m2!1sfil!2sp"
            className="w-fullborder-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="w-full">
            <form className="flex flex-col gap-5  p-5 [&>*]:rounded-[5px] [&>*]:p-3 [&>*]:shadow-md [&>*]:border-none [&>*]:outline-0">
              <input type="text" placeholder="Enter name" />
              <input type="text" placeholder="Enter subject" />
              <textarea placeholder="Enter Message"></textarea>
              <button className="uppercase  bg-[#ed563b] p-3 px-5 text-white  text-sm hover:bg-[#F9735B]  cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
