import React, { useState } from "react";
import { useSelector } from "react-redux";

//Component & library
import CardMovie from "../CardMovie/CardMovie";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ModalVideo from "react-modal-video";

//SCSS
import "./Showtime.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Showtime() {
  const listPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);
  console.log("listPhim:", listPhim);
  // Setting for carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    arrows: true,
    nextArrow: <RightOutlined />,
    prevArrow: <LeftOutlined />,
  };
  //State for Modal
  const [isOpen, setisOpen] = useState(false);
  const openModal = () => {
    setisOpen(true);
  };
  return (
    <section className="showTimes mt-5 d-none d-md-block" id="showTimes">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="pWdKf3MneyI"
        onClose={() => setisOpen(false)}
      />
      <div className="padding-class">
        {/* Nav tabs */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#dangChieu">
              Đang chiếu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#sapChieu">
              Sắp chiếu
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane active" id="dangChieu">
            <Slider {...settings}>
              {listPhim?.map((phim, index) => {
                return <CardMovie phim={phim} isOpen={setisOpen} />;
              })}
            </Slider>
          </div>
          <div className="tab-pane container fade" id="sapChieu">
            <h3 className="text-center lead">Không có dữ liệu</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
