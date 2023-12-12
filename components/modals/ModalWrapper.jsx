import { ModalCloseIcon } from "@/icons/icon";
import React from "react";

const ModalWrapper = ({ title, subtitle, children, setModal }) => {
  const handleClose = () => {
    setModal("");
  };
  return (
    <main className="h-screen w-full top-0 left-0 fixed z-50 bg-[rgba(0,0,0,0.5)] font-graphik">
      <section className="w-[507px] max-h-[590px] max-w-[90%] bg-primary-white absolute p-[24px_24px_30px] rounded-xl border border-solid border-grey-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto scrollbar shadow-[0px_1px_3px_0px_rgba(50,50,71,0.10),0px_0px_1px_0px_rgba(12,26,75,0.20)]">
        <article>
          <h3 className="font-medium text-xl text-grey-1">{title}</h3>
          <p className="text-randomColor-3">{subtitle}</p>
        </article>
        <div className="mt-6">{children}</div>
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 p-2 border-none bg-none hover:scale-[1.2] transition-g"
        >
          <ModalCloseIcon />
        </button>
      </section>
    </main>
  );
};

export default ModalWrapper;
