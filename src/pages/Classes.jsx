import { useState } from "react";
import line from "../assets/line-dec.png";
import bell from "../assets/tabs-first-icon.png";
import trainingOne from "../assets/training-image-01.jpg";
import trainingTwo from "../assets/training-image-02.jpg";
import trainingThree from "../assets/training-image-03.jpg";
import trainingFour from "../assets/training-image-04.jpg";

export default function Classes() {
  const [isActive, setIsActive] = useState("first");

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
            Our <span className="text-[#ED563B]">Classes</span>
          </h2>
          <img src={line} alt="line" />
          <p className="text-[#232d39]/60 text-center text-sm md:w-[50%]">
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </p>
        </div>

        <div className="md:flex  md:gap-20 grid gap-8">
          <div className="flex flex-col gap-5 flex-0.5 [&>*]:cursor-pointer">
            <button
              className={`flex tems-center gap-5 p-7 shadow-md text-xl text-[#232D39] font-semibold ${
                isActive === "first" ? "text-[#ed563b]" : "text-[#232d39]"
              }`}
              onClick={() => setIsActive("first")}
            >
              <img src={bell} alt="bell" />
              <h3>First Class Training</h3>
            </button>
            <button
              className={`flex tems-center gap-5 p-7 shadow-md text-xl text-[#232D39] font-semibold ${
                isActive === "second" ? "text-[#ed563b]" : "text-[#232d39]"
              }`}
              onClick={() => setIsActive("second")}
            >
              <img src={bell} alt="bell" />
              <h3>Second Class Training</h3>
            </button>
            <button
              className={`flex tems-center gap-5 p-7 shadow-md text-xl text-[#232D39] font-semibold ${
                isActive === "three" ? "text-[#ed563b]" : "text-[#232d39]"
              }`}
              onClick={() => setIsActive("three")}
            >
              <img src={bell} alt="bell" />
              <h3>Third Class Training</h3>
            </button>
            <button
              className={`flex tems-center gap-5 p-7 shadow-md text-xl text-[#232D39] font-semibold ${
                isActive === "four" ? "text-[#ed563b]" : "text-[#232d39]"
              }`}
              onClick={() => setIsActive("four")}
            >
              <img src={bell} alt="bell" />
              <h3>Fourth Class Training</h3>
            </button>
            <div className="rounded-[5px] text-center p-5 shadow-md bg-[#ed563b] hover:bg-[#F9735B]">
              <button className="text-white text-xl font-semibold ">
                View All Schedule
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 flex-1">
            {isActive === "first" && (
              <>
                <img
                  className="rounded-[5px]"
                  src={trainingOne}
                  alt="training-01"
                />
                <h3 className="text-2xl text-[#232D39] font-semibold">
                  First Class Training
                </h3>
                <p className="text-[#232d39]/60 text-sm leading-6">
                  Phasellus convallis mauris sed elementum vulputate. Donec
                  posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit
                  erat, sed vehicula ligula. Aliquam ut sem fermentum sem
                  tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                  imperdiet, molestie nunc ut, accumsan diam.
                </p>
                <button className="w-fit uppercase font-medium bg-[#ed563b] p-3 px-5 text-white  text-sm hover:bg-[#F9735B]  cursor-pointer">
                  View Schedule
                </button>
              </>
            )}

            {isActive === "second" && (
              <>
                <img
                  className="rounded-[5px]"
                  src={trainingTwo}
                  alt="training-02"
                />
                <h3 className="text-2xl text-[#232D39] font-semibold">
                  Second Training Class
                </h3>
                <p className="text-[#232d39]/60 text-sm leading-6">
                  Integer dapibus, est vel dapibus mattis, sem mauris luctus
                  leo, ac pulvinar quam tortor a velit. Praesent ultrices erat
                  ante, in ultricies augue ultricies faucibus. Nam tellus nibh,
                  ullamcorper at mattis non, rhoncus sed massa. Cras quis
                  pulvinar eros. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
                <button className="w-fit uppercase font-medium bg-[#ed563b] p-3 px-5 text-white  text-sm hover:bg-[#F9735B]  cursor-pointer">
                  View Schedule
                </button>
              </>
            )}

            {isActive === "three" && (
              <>
                <img
                  className="rounded-[5px]"
                  src={trainingThree}
                  alt="training-03"
                />
                <h3 className="text-2xl text-[#232D39] font-semibold">
                  Third Training Class
                </h3>
                <p className="text-[#232d39]/60 text-sm leading-6">
                  Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor,
                  id auctor neque posuere sit amet. Aliquam pharetra, augue vel
                  cursus porta, nisi tortor vulputate sapien, id scelerisque
                  felis magna id felis. Proin neque metus, pellentesque pharetra
                  semper vel, accumsan a neque.
                </p>
                <button className="w-fit uppercase font-medium bg-[#ed563b] p-3 px-5 text-white  text-sm hover:bg-[#F9735B]  cursor-pointer">
                  View Schedule
                </button>
              </>
            )}

            {isActive === "four" && (
              <>
                <img
                  className="rounded-[5px]"
                  src={trainingFour}
                  alt="training-04"
                />
                <h3 className="text-2xl text-[#232D39] font-semibold">
                  Third Training Class
                </h3>
                <p className="text-[#232d39]/60 text-sm leading-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aenean ultrices elementum
                  odio ac tempus. Etiam eleifend orci lectus, eget venenatis
                  ipsum commodo et.
                </p>
                <button className="w-fit uppercase font-medium bg-[#ed563b] p-3 px-5 text-white  text-sm hover:bg-[#F9735B]  cursor-pointer">
                  View Schedule
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
