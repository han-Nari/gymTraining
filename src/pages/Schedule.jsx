import line from "../assets/line-dec.png";
import sched from "../assets/schedule-bg.jpg";
import ScheduleTable from "./ScheduleTable";

export default function Schedule() {
  return (
    <>
      <section
        aria-labelledby="schedules"
        style={{ backgroundImage: `url(${sched})` }}
        className="flex flex-col gap-10 py-20 bg-center bg-no-repeat"
      >
        <div className="flex flex-col items-center gap-5">
          <h2
            id="schedules"
            className="text-3xl font-bold uppercase text-white"
          >
            Classes <span className="text-[#ED563B]">Schedule</span>
          </h2>
          <img src={line} alt="line" />
          <p className="text-white text-center text-sm px-5 md:w-[40%] leading-6">
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </p>
        </div>
        <ScheduleTable />
      </section>
    </>
  );
}
