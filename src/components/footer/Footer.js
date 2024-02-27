import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="bg-body-secondary">
          <div className="container p-3">
            <div className="footer-links fs-6 d-flex row">
              <div className="col-3 d-flex flex-column">
                <h6>Hỗ trợ</h6>
                <a href="/">Trung tâm trợ giúp</a>
                <a href="/">AirCover</a>
                <a href="/">Thông tin an toàn</a>
                <a href="/">Hỗ trợ người khuyết tật</a>
                <a href="/">Các tùy chọn hủy</a>
                <a href="/">
                  Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
                </a>
                <a href="/">Báo cáo lo ngại của hàng xóm</a>
              </div>
              <div className="col-3 d-flex flex-column">
                <h6>Cộng đồng</h6>
                <a href="/">Airbnb.org: nhà ở cứu trợ</a>
                <a href="/">Hỗ trợ dân tị nạn Afghanistan</a>
                <a href="/">Chống phân biệt đối xử</a>
              </div>
              <div className="col-3 d-flex flex-column">
                <h6>Đón tiếp khách</h6>
                <a href="">Thử đón tiếp khách</a>
                <a href="">AirCover cho Chủ nhà</a>
                <a href="">Xem tài nguyên đón tiếp khách</a>
                <a href="">Truy cập diễn đàn cộng đồng</a>
                <a href="">Đón tiếp khách có trách nhiệm</a>
              </div>
              <div className="col-3 d-flex flex-column">
                <h6>Airbnb</h6>
                <a href="/">Trang tin tức</a>
                <a href="">Tìm hiểu các tính năng mới</a>
                <a href="">Thư ngỏ từ các nhà sáng lập</a>
                <a href="">Cơ hội nghề nghiệp</a>
                <a href="">Nhà đầu tư</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <div className="text-secondary copyrights">
            <span>© 2022 Airbnb, Inc.</span>
            <a
              className="ms-4 pe-4 text-secondary text-decoration-none"
              href=""
            >
              Quyền riêng tư
            </a>
            .
            <a
              className="ms-4 pe-4 text-secondary text-decoration-none"
              href=""
            >
              Điều khoản
            </a>
            .
            <a
              className="ms-4 pe-4 text-secondary text-decoration-none"
              href=""
            >
              Sơ đồ trang web
            </a>
            .
          </div>
          <div className="right-tab">
            <i class="fa fa-globe me-2 fs-6"></i>
            <span>Tiếng việt(VN)</span>
            <span className="px-2">$ USD</span>
            <span>Hỗ trợ tài nguyên^</span>
          </div>
        </div>
      </div>
    );
  }
}
