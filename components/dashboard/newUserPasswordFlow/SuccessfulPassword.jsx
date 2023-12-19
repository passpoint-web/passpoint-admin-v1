import ModalWrapper from "@/components/modals/ModalWrapper";
import Button from "@/components/ui/Button";
import { SuccessIconBig } from "@/icons/icon";
import React from "react";

const SuccessfulPassword = ({ setModal }) => {
  return (
    <ModalWrapper setModal={setModal}>
      <div className="flex flex-col items-center p-[10px_0_30px]">
        <SuccessIconBig />
        <article className="m-[10px_0_24px] font-graphik text-center">
          <h2 className="text-2xl text-grey-1 font-medium tracking-[-0.5px]">
            Password Updated Successful
          </h2>
          <p className="text-grey-3 ">
            Your password update was successful you can now manage your
            dashboard
          </p>
        </article>
        <Button
          onClick={() => setModal(false)}
          text="Go to Dashboard"
          variant="secondary"
          size="md"
          className="w-full font-medium rounded-[12px]"
        />
      </div>
    </ModalWrapper>
  );
};

export default SuccessfulPassword;
