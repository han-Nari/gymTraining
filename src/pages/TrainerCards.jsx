import first from "../assets/first-trainer.jpg";
import second from "../assets/second-trainer.jpg";
import third from "../assets/third-trainer.jpg";

export default function TrainerCards() {
  return (
    <>
      {/* <img src={first} alt="firstTrainer" />
      <img src={second} alt="secondTrainer" />
      <img src={third} alt="thirdTrainer" /> */}

      <div className="wrapper-second grid grid-cols-[repeat(auto-fit,minmax(min(20rem,100%),1fr))] gap-5">
        <div className="shadow-xl grid gap-6 p-8 rounded-xl ">
          <img src={first} alt="firstTrainer" className="w-[100%]" />
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-[#ed563b]">
              Strength Trainer
            </p>
            <h5 className="text-xl font-semibold text-[#232d39]">
              Bret D. Bowers
            </h5>
            <p className="text-[#232d39]/60 text-sm pt-2">
              Bitters cliche tattooed 8-bit distillery mustache. Keytar
              succulents gluten-free vegan church-key pour-over seitan flannel.
            </p>
          </div>
          <div className="flex gap-3 text-sm text-[#232d39]">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-behance"></i>
          </div>
        </div>

        <div className="shadow-xl grid gap-6 p-8 rounded-xl ">
          <img src={second} alt="secondTrainer" className="w-[100%]" />
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-[#ed563b]">
              Muscle Trainer
            </p>
            <h5 className="text-xl font-semibold text-[#232d39]">
              Hector T. Daigl
            </h5>
            <p className="text-[#232d39]/60 text-sm pt-2">
              Bitters cliche tattooed 8-bit distillery mustache. Keytar
              succulents gluten-free vegan church-key pour-over seitan flannel.
            </p>
          </div>
          <div className="flex gap-3 text-sm text-[#232d39]">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-behance"></i>
          </div>
        </div>

        <div className="shadow-xl  grid gap-6 p-8 rounded-xl ">
          <img src={third} alt="thirdTrainer" className="w-[100%]" />
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-[#ed563b]">
              Power Trainer
            </p>
            <h5 className="text-xl font-semibold text-[#232d39]">
              Paul D. Newman
            </h5>
            <p className="text-[#232d39]/60 text-sm pt-2">
              Bitters cliche tattooed 8-bit distillery mustache. Keytar
              succulents gluten-free vegan church-key pour-over seitan flannel.
            </p>
          </div>
          <div className="flex gap-3 text-sm text-[#232d39]">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-behance"></i>
          </div>
        </div>
      </div>
    </>
  );
}
