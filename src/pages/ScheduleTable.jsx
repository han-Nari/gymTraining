import { useState } from "react";

export default function ScheduleTable() {
  const [isActive, setIsActive] = useState("monday");
  return (
    <>
      <div className="wrapper-second  flex flex-col gap-10 text-center text-white">
        <div className="[&>*]:cursor-pointer flex justify-center flex-wrap gap-4 text-sm">
          <button
            className={isActive === "monday" ? "text-[#ed563b]" : "text-white"}
            onClick={() => setIsActive("monday")}
          >
            Monday
          </button>
          <p>/</p>
          <button
            className={isActive === "tuesday" ? "text-[#ed563b]" : "text-white"}
            onClick={() => setIsActive("tuesday")}
          >
            Tuesday
          </button>
          <p>/</p>
          <button
            className={
              isActive === "wednesday" ? "text-[#ed563b]" : "text-white"
            }
            onClick={() => setIsActive("wednesday")}
          >
            Wednesday
          </button>
          <p>/</p>
          <button
            className={
              isActive === "thursday" ? "text-[#ed563b]" : "text-white"
            }
            onClick={() => setIsActive("thursday")}
          >
            Thursday
          </button>
          <p>/</p>
          <button
            className={isActive === "friday" ? "text-[#ed563b]" : "text-white"}
            onClick={() => setIsActive("friday")}
          >
            Friday
          </button>
        </div>

        {isActive === "monday" && (
          <>
            <table className="md:w-[80%] mx-auto text-center text-white text-sm">
              <tbody className="[&>tr>td]:py-10 [&>tr>td]:border ">
                <tr>
                  <td>Fitness Class</td>
                  <td>10:00AM - 11:30AM</td>
                  <td></td>
                  <td>William G. Stewart</td>
                </tr>
                <tr>
                  <td>Muscle Training</td>
                  <td></td>
                  <td></td>
                  <td>Paul D. Newman</td>
                </tr>
                <tr>
                  <td>Body Building</td>
                  <td></td>
                  <td>2:00PM - 3:30PM</td>
                  <td>Boyd C. Harris</td>
                </tr>
                <tr>
                  <td>Yoga Training Class</td>
                  <td></td>
                  <td></td>
                  <td>Hector T. Daigle</td>
                </tr>
                <tr>
                  <td>Advanced Training</td>
                  <td></td>
                  <td></td>
                  <td>Bret D. Bowers</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {isActive === "tuesday" && (
          <>
            <table class="md:w-[80%] mx-auto text-center text-white text-sm">
              <tbody className="[&>tr>td]:py-10 [&>tr>td]:border ">
                <tr>
                  <td>Fitness Class</td>
                  <td></td>
                  <td></td>
                  <td>William G. Stewart</td>
                </tr>
                <tr>
                  <td>Muscle Training</td>
                  <td></td>
                  <td></td>
                  <td>Paul D. Newman</td>
                </tr>
                <tr>
                  <td>Body Building</td>
                  <td></td>
                  <td></td>
                  <td>Boyd C. Harris</td>
                </tr>
                <tr>
                  <td>Yoga Training Class</td>
                  <td>10:00AM - 11:30AM</td>
                  <td></td>
                  <td>Hector T. Daigle</td>
                </tr>
                <tr>
                  <td>Advanced Training</td>
                  <td></td>
                  <td>2:00PM - 3:30PM</td>
                  <td>Bret D. Bowers</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {isActive === "wednesday" && (
          <>
            <table class="md:w-[80%] mx-auto text-center text-white text-sm">
              <tbody className="[&>tr>td]:py-10 [&>tr>td]:border ">
                <tr>
                  <td>Fitness Class</td>
                  <td></td>
                  <td>2:00PM - 3:30PM</td>
                  <td>William G. Stewart</td>
                </tr>
                <tr>
                  <td>Muscle Training</td>
                  <td></td>
                  <td></td>
                  <td>Paul D. Newman</td>
                </tr>
                <tr>
                  <td>Body Building</td>
                  <td>10:00AM - 11:30AM</td>
                  <td></td>
                  <td>Boyd C. Harris</td>
                </tr>
                <tr>
                  <td>Yoga Training Class</td>
                  <td></td>
                  <td></td>
                  <td>Hector T. Daigle</td>
                </tr>
                <tr>
                  <td>Advanced Training</td>
                  <td></td>
                  <td></td>
                  <td>Bret D. Bowers</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {isActive === "thursday" && (
          <>
            <table class="md:w-[80%] mx-auto text-center text-white text-sm">
              <tbody className="[&>tr>td]:py-10 [&>tr>td]:border ">
                <tr>
                  <td>Fitness Class</td>
                  <td></td>
                  <td></td>
                  <td>William G. Stewart</td>
                </tr>
                <tr>
                  <td>Muscle Training</td>
                  <td></td>
                  <td>2:00PM - 3:30PM</td>
                  <td>Paul D. Newman</td>
                </tr>
                <tr>
                  <td>Body Building</td>
                  <td></td>
                  <td></td>
                  <td>Boyd C. Harris</td>
                </tr>
                <tr>
                  <td>Yoga Training Class</td>
                  <td></td>
                  <td></td>
                  <td>Hector T. Daigle</td>
                </tr>
                <tr>
                  <td>Advanced Training</td>
                  <td>10:00AM - 11:30AM</td>
                  <td></td>
                  <td>Bret D. Bowers</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {isActive === "friday" && (
          <>
            <table class="md:w-[80%] mx-auto text-center text-white text-sm">
              <tbody className="[&>tr>td]:py-10  [&>tr>td]:border ">
                <tr>
                  <td>Fitness Class</td>
                  <td></td>
                  <td></td>
                  <td>William G. Stewart</td>
                </tr>
                <tr>
                  <td>Muscle Training</td>
                  <td>10AM - 11:30AM</td>
                  <td></td>
                  <td>Paul D. Newman</td>
                </tr>
                <tr>
                  <td>Body Building</td>
                  <td></td>
                  <td></td>
                  <td>Boyd C. Harris</td>
                </tr>
                <tr>
                  <td>Yoga Training Class</td>
                  <td></td>
                  <td>2:00PM - 3:30PM</td>
                  <td>Hector T. Daigle</td>
                </tr>
                <tr>
                  <td>Advanced Training</td>
                  <td></td>
                  <td></td>
                  <td>Bret D. Bowers</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}
