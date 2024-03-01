import { Tag } from "antd";

export const toDateAndTime = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

export const getElementById = (id, listMetadata) =>{
  return listMetadata.find((item) => item.id === id)
}

export const renderRoomIcon = (icon, value) => {
  if (value) {
    return (
      <span>
        <i className={icon}></i> {value}{" "}
      </span>
    );
  }
};

export const renderServiceIcon = (icon, value, title) => {
  if (value) {
    return (
      <Tag color="success" className="my-1">
        {title}
        <i className={icon + " mx-2"}></i>{" "}
        <i className="fa-solid fa-check text-green-500"></i>
      </Tag>
    );
  }
  return (
    <Tag color="error" className="my-1">
      {title} <i className={icon + " mx-2"}></i>
      <i className="fa-solid fa-xmark text-red-500"></i>
    </Tag>
  );
};