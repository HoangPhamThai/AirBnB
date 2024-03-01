import { Button, Dropdown } from "antd";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { labelRandomPlace } from "../../constants/constants";

export default function LocationSelection() {
  const listLocation = useSelector((state) => state.metadataSlice.listLocation);
  const [selectedValue, setSelectedValue] = useState();

  const renderOptions = () => {
    let options = [];
    listLocation.forEach((location) => {
      options.push({
        key: location.id,
        label: (
          <div
            className="flex p-2 rounded-md"
            key={location.id}
            onClick={() => {
              setSelectedValue(
                `${location.tenViTri}, ${location.tinhThanh}`
              );
            }}
          >
            <img
              src={location.hinhAnh}
              className="mr-2 w-[40px] h-[30px] rounded-lg"
              alt=''
            />
            <h1>
              {location.tenViTri}, {location.tinhThanh}, {location.quocGia}
            </h1>
          </div>
        ),
      });
    });
    return options;
  };

  const items = renderOptions();

  return (
    <div>
      <Dropdown menu={{ items }} arrows={false}>
        <Button className="border-none text-[#BFBFBF]">
          {selectedValue || labelRandomPlace}
        </Button>
      </Dropdown>
    </div>
  );
}
