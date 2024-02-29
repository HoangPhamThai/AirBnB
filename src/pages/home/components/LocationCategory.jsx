import { Carousel } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { labelExploreDestination } from "../../../constants/constants";
import { getLocationMetadata } from "../../../redux/metadataSlice";

export default function LocationCategory() {
  const maxItemInCarousel = 8;
  const dispatch = useDispatch()
  const listLocation = useSelector(state => state.metadataSlice.listLocation)


  useEffect(() => {
    dispatch(getLocationMetadata())
  }, []);

  const renderGroupItem = (listItem) => {
    return (
      <div className=" grid grid-cols-4 mb-2">
        {listItem.map((item) => {
          return (
            <div className="flex p-2 rounded-md" key={item.id}>
              <img
                src={item.hinhAnh}
                className="mr-2 w-[40px] h-[30px] rounded-lg"
              />
              <h1 className="font-bold">{item.tinhThanh}</h1>
            </div>
          );
        })}
      </div>
    );
  };

  const renderLocations = () => {
    const itemCount = Math.ceil(
      (listLocation.length * 1.0) / maxItemInCarousel
    );
    return (
      <div>
        <h1 className="mt-3 font-bold text-xl">{labelExploreDestination}</h1>
        <Carousel className="bg-blue-100 px-3 py-2 rounded-lg my-3">
          {Array.from(Array(itemCount).keys()).map((groupItemKey) => {
            return (
              <div key={groupItemKey}>
                {renderGroupItem(
                  listLocation.slice(
                    groupItemKey * maxItemInCarousel,
                    (groupItemKey + 1) * maxItemInCarousel
                  )
                )}
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  };

  return <div>{renderLocations()}</div>;
}
