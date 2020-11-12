import React, { useState } from "react";

// Component or library

// IMAGE
import star from "../../img/star1.png";
import starhalf from "../../img/star1.2.png";
import playbutton from "../../img/play-video.png";
import filmtype from "../../img/film_type_1.png";

//SCSS
import "./CardMovie.scss";
export default function CardMovie(props) {
  let { phim } = props;
  let { isOpen } = props;
  //modal

  return (
    <div className="showTimes-item">
      <div className="showTimes-item_overlay">
        <img
          src={playbutton}
          alt
          onClick={() => {
            isOpen(true);
          }}
        />
      </div>
      <img src={phim.hinhAnh} alt={phim.hinhAnh} className="film_thumbnail" />
      <div className="showTimes-item_content">
        <p>
          <span className="para-color_orange mr-1">C18</span>
          {phim.tenPhim}
        </p>
        <p>116 Phút</p>
      </div>
      <div className="showTimes-item_content1">
        <p>MUA VÉ</p>
      </div>
      {/* div đánh giá sao */}
      <div className="showTimes-item_rank">
        <p>{phim.danhGia}</p>
        <div className="showTimes-item_star">
          <img src={star} alt />
          <img src={star} alt />
          <img src={star} alt />
          <img src={star} alt />
          <img src={starhalf} alt />
        </div>
      </div>
    </div>
  );
}
