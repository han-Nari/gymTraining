import line from "../assets/line-dec.png";
import TrainerCards from "./TrainerCards";
export default function Trainers() {
  return (
    <>
      <section
        aria-labelledby="classes"
        className="wrapper-second grid gap-20 py-35"
      >
        <div className="flex flex-col items-center gap-5">
          <h2
            id="classes"
            className="text-3xl font-bold uppercase text-[#232D39]"
          >
            Expert <span className="text-[#ED563B]">Trainers</span>
          </h2>
          <img src={line} alt="line" />
          <p className="text-[#232d39]/60 text-center text-sm md:w-[50%]">
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </p>
        </div>
        <TrainerCards />
      </section>
    </>
  );
}
