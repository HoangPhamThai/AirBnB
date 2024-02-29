import { Button, Dropdown, Modal } from "antd";
import React from "react";
import { useState } from "react";
import {
  fieldKey,
  labelAbove13,
  labelAddGuests,
  labelAdult,
  labelBaby,
  labelBelow2,
  labelConfirm,
  labelEnfant,
  labelFrom2To12,
  labelPets,
} from "../../constants/constants";
import IncDec from "../IncDec";

export default function GuestSelection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button className="border-none text-[#BFBFBF]" onClick={showModal}>
        {labelAddGuests}
      </Button>

      <Modal
        title={labelAddGuests}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p className="flex items-center mb-2">
          <div className="mr-2 w-3/5">
            <div>{labelAdult}</div>
            <div>{labelAbove13}</div>
          </div>
          <IncDec className="w-2/5" />
        </p>
        <p className="flex items-center mb-2">
          <div className="mr-2 w-3/5">
            <div>{labelEnfant}</div>
            <div>{labelFrom2To12}</div>
          </div>
          <IncDec className="w-2/5" />
        </p>
        <p className="flex items-center mb-2">
          <div className="mr-2 w-3/5">
            <div>{labelBaby}</div>
            <div>{labelBelow2}</div>
          </div>
          <IncDec className="w-2/5" />
        </p>
        <p className="flex items-center mb-2">
          <div className="mr-2 w-3/5">{labelPets}</div>
          <IncDec className="w-2/5" />
        </p>
        <div className="text-right">
          <Button className="bg-blue-200 text-black" onClick={handleOk}>
            {labelConfirm}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
