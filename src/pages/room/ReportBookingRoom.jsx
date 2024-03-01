import React from "react";
import {
  labelCost,
  labelGuest,
  labelNumberOfDays,
  labelNumberOfGuests,
  labelPet,
} from "../../constants/constants";

export default function ReportBookingRoom({ room, dateStrings, guest }) {
  const totalGuest = guest?.adult + guest?.enfant + guest?.baby;
  const getTotalDays = () => {
    if (dateStrings?.length === 2) {
      return (
        (Date.parse(dateStrings[1]) - Date.parse(dateStrings[0])) /
          (1000 * 60 * 60 * 24) +
        1
      );
    }
    return 0;
  };

  const totalDays = getTotalDays();

  const renderGuestDisplay = () => {
    let totalPets = guest?.pet;
    let label = "";
    if (totalGuest) {
      label = `${totalGuest} ${labelGuest}`;
    }
    if (totalPets) {
      label += `, ${totalPets} ${labelPet}`;
    }
    return label;
  };

  const renderCost = () => {
    if (totalGuest) {
      return `$${totalGuest * room.giaTien * totalDays * 1}`;
    }
  };

  return (
    <div>
      <div>
        {labelNumberOfDays}: <span>{totalDays}</span>
      </div>
      <div>
        {labelNumberOfGuests}: <span>{renderGuestDisplay()}</span>
      </div>
      <div>
        {labelCost}: {renderCost()}
      </div>
    </div>
  );
}
