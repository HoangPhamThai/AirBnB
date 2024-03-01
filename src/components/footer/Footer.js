import { Divider } from "antd";
import React from "react";

export default function Footer() {
  const renderItem = (label) => {
    return <p className="py-1 text-gray-500 text-sm">{label}</p>;
  };

  const renderTitle = (label) => {
    return <h1 className="font-bold mb-3 text-md">{label}</h1>;
  };

  return (
    <div className=" bg-gray-100 py-5 mt-10">
      <div className="container grid grid-cols-4 gap-10 mb-10">
        <div>
          {renderTitle("GIỚI THIỆU")}
          {renderItem("Trang tin tức")}
          {renderItem("Nhà đầu tư")}
          {renderItem("Airbnb Plus")}
          {renderItem("Airbnb Luxe")}
          {renderItem("HotelTonight")}
          {renderItem("Airbnb for Work")}
          {renderItem("Nhờ có Host, mọi điều đều có thể")}
          {renderItem("Cơ hội nghề nghiệp")}
          {renderItem("Thư của nhà sáng lập")}
        </div>

        <div>
          {renderTitle("CỘNG ĐỒNG")}
          {renderItem("Sự đa dạng và Cảm giác thân thuộc")}
          {renderItem("Tiện nghi phù hợp cho người khuyết tật")}
          {renderItem("Đối tác liên kết Airbnb")}
          {renderItem("Chỗ ở cho tuyến đầu")}
          {renderItem("Lượt giới thiệu của khách")}
          {renderItem("Airbnb.org")}
        </div>

        <div>
          {renderTitle("ĐÓN TIẾP KHÁCH")}
          {renderItem("Cho thuê nhà")}
          {renderItem("Tổ chức Trải nghiệm trực tuyến")}
          {renderItem("Tổ chức Trải nghiệm")}
          {renderItem("Trung tâm tài nguyên")}
          {renderItem("Trung tâm cộng đồng")}
        </div>

        <div>
          {renderTitle("HỖ TRỢ")}
          {renderItem("Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi")}
          {renderItem("Trung tâm trợ giúp")}
          {renderItem("Các tuỳ chọn huỷ")}
          {renderItem("Hỗ trợ khu dân cư")}
          {renderItem("Tin cậy và an toàn")}
        </div>
      </div>

      <div className="container mb-5">
        <Divider />
      </div>

      <div className="container grid grid-cols-2 mb-3 text-gray-500">
        <div>
          <span>© 2022 Airbnb, Inc.</span>
          <a className="ms-4 pe-4 text-secondary text-decoration-none" href="">
            Quyền riêng tư
          </a>

          <a className="ms-4 pe-4 text-secondary text-decoration-none" href="">
            Điều khoản
          </a>

          <a className="ms-4 pe-4 text-secondary text-decoration-none" href="">
            Sơ đồ trang web
          </a>
        </div>

        <div className="text-right">
          <i className="fa fa-globe me-2 fs-6"></i>
          <span>Tiếng việt(VN)</span>
          <span className="px-2">$ USD</span>
        </div>
      </div>
    </div>
  );
}
