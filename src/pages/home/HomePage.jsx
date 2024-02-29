import React from "react";
import ListRoomView from "./components/ListRoomView";
import LiveEverywhere from "./components/LiveEverywhere";
import LocationCategory from "./components/LocationCategory";

export default function HomePage() {
  return (
    <div>
      <LocationCategory />
      <ListRoomView />
      <div className="mt-5">
        <LiveEverywhere />
      </div>
    </div>
  );
}
