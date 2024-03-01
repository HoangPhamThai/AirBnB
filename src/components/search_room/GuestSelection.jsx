import { Button, Modal } from "antd";
import React from "react";
import { useState } from "react";
import {
  labelAbove13,
  labelAddGuests,
  labelAdult,
  labelBaby,
  labelBelow2,
  labelConfirm,
  labelEnfant,
  labelFrom2To12,
  labelGuest,
  labelPet,
  labelPets,
} from "../../constants/constants";
import IncDec from "../IncDec";

export default function GuestSelection({ onChanged }) {
  const [guest, setGuest] = useState({
    adult: 1,
    enfant: 0,
    baby: 0,
    pet: 0,
  });

  const renderGuestDisplay = () => {
    let totalGuest = guest.adult + guest?.enfant + guest?.baby;
    let totalPets = guest?.pet;
    let label = labelAddGuests;
    if (totalGuest) {
      label = `${totalGuest} ${labelGuest}`;
    }
    if (totalPets) {
      label += `, ${totalPets} ${labelPet}`;
    }
    return label;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (onChanged) {
      onChanged(guest);
    }

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button className="border-none text-[#BFBFBF]" onClick={showModal}>
        {renderGuestDisplay()}
      </Button>

      <Modal
        title={labelAddGuests}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={false}
      >
        <p className="flex items-center mb-2">
          <div className="mr-2 w-3/5">
            <div>{labelAdult}</div>
            <div>{labelAbove13}</div>
          </div>
          <IncDec
            initValue={guest.adult}
            className="w-2/5"
            onChanged={(value) => {
              setGuest({
                ...guest,
                adult: value,
              });
            }}
          />
        </p>
        <p className="flex items-center mb-2">
          <div className="mr-2 w-3/5">
            <div>{labelEnfant}</div>
            <div>{labelFrom2To12}</div>
          </div>
          <IncDec
            initValue={guest.enfant}
            className="w-2/5"
            onChanged={(value) => {
              setGuest({
                ...guest,
                enfant: value,
              });
            }}
          />
        </p>
        <p className="flex items-center mb-2">
          <div className="mr-2 w-3/5">
            <div>{labelBaby}</div>
            <div>{labelBelow2}</div>
          </div>
          <IncDec
            initValue={guest.baby}
            className="w-2/5"
            onChanged={(value) => {
              setGuest({
                ...guest,
                baby: value,
              });
            }}
          />
        </p>
        <p className="flex items-center mb-2">
          <div className="mr-2 w-3/5">{labelPets}</div>
          <IncDec
            initValue={guest.pet}
            className="w-2/5"
            onChanged={(value) => {
              setGuest({
                ...guest,
                pet: value,
              });
            }}
          />
        </p>
        <div className="text-right mt-3">
          <Button className="bg-blue-200 text-black" onClick={handleOk}>
            {labelConfirm}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
