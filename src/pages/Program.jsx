import line from "../assets/line-dec.png";
import bell from "../assets/features-first-icon.png";

export default function Program() {
  return (
    <>
      <section
        aria-labelledby="program"
        className="wrapper-second grid gap-20 py-35"
      >
        <div className="flex flex-col items-center gap-5">
          <h2
            id="program"
            className="text-3xl font-bold uppercase text-[#232D39]"
          >
            Choose <span className="text-[#ED563B]">Program</span>
          </h2>
          <img src={line} alt="line" />
          <p className="text-[#232d39]/60 text-center text-sm md:w-[50%]">
            Training Studio is free CSS template for gyms and fitness centers.
            You are allowed to use this layout for your business website.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(25rem,100%),1fr))] gap-8">
          {/* Card One */}
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <img src={bell} alt="bell" className="px-1" />
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer md:hidden">
                discover more
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h4 className="text-[#232d39] text-xl font-semibold">
                Basic Fitness
              </h4>
              <p className="text-[#232d39]/60 text-sm leading-6 text-wrap">
                Please do not re-distribute this template ZIP file on any
                template collection website. This is not allowed.
              </p>
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer hidden md:block">
                discover more
              </p>
            </div>
          </div>
          {/* Card Two */}
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <img src={bell} alt="bell" className="px-1" />
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer  md:hidden">
                discover more
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h4 className="text-[#232d39] text-xl font-semibold">
                New Gym Training
              </h4>
              <p className="text-[#232d39]/60 text-sm leading-6 text-wrap">
                If you wish to support TemplateMo website via PayPal, please
                feel free to contact us. We appreciate it a lot.
              </p>
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer hidden md:block">
                discover more
              </p>
            </div>
          </div>
          {/* Card Three */}
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <img src={bell} alt="bell" className="px-1" />
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer md:hidden">
                discover more
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h4 className="text-[#232d39] text-xl font-semibold">
                Basic Muscle Course
              </h4>
              <p className="text-[#232d39]/60 text-sm leading-6 text-wrap">
                Credit goes to{" "}
                <span className="text-[#008EFF] hover:text-[#0059B5] cursor-pointer">
                  Pexels website
                </span>{" "}
                for images and video background used in this HTML template.
              </p>
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer hidden md:block">
                discover more
              </p>
            </div>
          </div>
          {/* Card Four */}
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <img src={bell} alt="bell" className="px-1" />
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer  md:hidden">
                discover more
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h4 className="text-[#232d39] text-xl font-semibold">
                Advanced Muscle Course
              </h4>
              <p className="text-[#232d39]/60 text-sm leading-6 text-wrap">
                You may want to browse through{" "}
                <span className="text-[#008EFF] hover:text-[#0059B5] cursor-pointer">
                  Digital Marketing
                </span>
                or
                <span className="text-[#008EFF] hover:text-[#0059B5] cursor-pointer">
                  Corporate
                </span>{" "}
                HTML CSS templates on our website.
              </p>
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer hidden md:block">
                discover more
              </p>
            </div>
          </div>
          {/* Card Five */}
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <img src={bell} alt="bell" className="px-1" />
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer md:hidden">
                discover more
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h4 className="text-[#232d39] text-xl font-semibold">
                Yoga Training
              </h4>
              <p className="text-[#232d39]/60 text-sm leading-6 text-wrap">
                This template is built on Bootstrap v4.3.1 framework. It is easy
                to adapt the columns and sections.
              </p>
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer hidden md:block">
                discover more
              </p>
            </div>
          </div>
          {/* Card Six */}
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <img src={bell} alt="bell" className="px-1" />
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer md:hidden">
                discover more
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h4 className="text-[#232d39] text-xl font-semibold">
                Body Building Course
              </h4>
              <p className="text-[#232d39]/60 text-sm leading-6 text-wrap">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </p>
              <p className="uppercase text-[#ED563B] font-normal text-sm cursor-pointer hidden md:block">
                discover more
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
