import React from "react";
import "./Application.scss";
import Carousel from "react-elastic-carousel";
import slide1 from "../../img/application/slide1.jpg";
import slide2 from "../../img/application/slide2.jpg";
import slide3 from "../../img/application/slide3.jpg";
import slide4 from "../../img/application/slide4.jpg";
import slide5 from "../../img/application/slide5.jpg";
import slide6 from "../../img/application/slide6.jpg";
import slide7 from "../../img/application/slide7.jpg";
import slide8 from "../../img/application/slide8.jpg";
import slide9 from "../../img/application/slide9.jpg";

export default function Application() {
  return (
    <section className="application mt-4" id="application">
      <div className="padding-class application-list row">
        <div className="col-12 col-lg-6 application-left text-center text-lg-left">
          <div className="application-left_item">
            <p className="para-1">Ứng dụng tiện lợi dành cho</p>
            <p className="para-1">người yêu điện ảnh</p>
            <p className="para-2">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm
            </p>
            <p className="para-2">điểm rạp và đổi quà hấp dẫn.</p>
            <button className="btn-orange">App miễn phí - Tải về ngay!</button>
            <p className="para-3">
              TIX có hai phiên bản <span>iOS</span> &amp; <span>Android</span>
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6 application-right">
          <Carousel
            className="application-background"
            showArrows={false}
            pagination={false}
            enableAutoPlay="true"
            autoPlaySpeed={3000}
          >
            <div className="application-item">
              <img src={slide1} alt />
            </div>
            <div className="application-item">
              <img src={slide2} alt />
            </div>
            <div className="application-item">
              <img src={slide3} alt />
            </div>
            <div className="application-item">
              <img src={slide4} alt />
            </div>
            <div className="application-item">
              <img src={slide5} alt />
            </div>
            <div className="application-item">
              <img src={slide6} alt />
            </div>
            <div className="application-item">
              <img src={slide7} alt />
            </div>
            <div className="application-item">
              <img src={slide8} alt />
            </div>
            <div className="application-item">
              <img src={slide9} alt />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
