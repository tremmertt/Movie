import React, { useState } from "react";
//Modal video
import ModalVideo from "react-modal-video";
//SCSS
import "./CarouselMovie.scss";
//IMGAGE
import carousel1 from "../../img/carousel/carousel1.jpg";
import carousel2 from "../../img/carousel/carousel2.png";
import carousel3 from "../../img/carousel/carousel3.png";
import carousel4 from "../../img/carousel/carousel4.jpg";
import playVideo from "../../img/play-video.png";
import dropDown from "../../img/dropdown-icon.png";

export default function CarouselMovie() {
  //modal
  const [isOpen, setisOpen] = useState(false);
  const openModal = () => {
    setisOpen(true);
  };
  return (
    <section className="carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="J8riYadR3Nk"
          onClose={() => setisOpen(false)}
        />
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          <li data-target="#carouselExampleIndicators" data-slide-to={3} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={carousel1} />
            <img
              className="play-button"
              src={playVideo}
              alt
              onClick={() => {
                openModal();
              }}
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carousel2} />
            <img
              className="play-button"
              src={playVideo}
              alt
              onClick={() => {
                openModal();
              }}
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carousel3} />
            <img
              className="play-button"
              src={playVideo}
              alt
              onClick={() => {
                openModal();
              }}
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carousel4} />
            <img
              className="play-button"
              src={playVideo}
              alt
              onClick={() => {
                openModal();
              }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="ticket">
        <div className="container ticket-content">
          <div className="row ticket-list">
            <div className="col-4 ticket-item">
              <span>Phim</span>
              <img src={dropDown} alt />
            </div>
            <div className="col-2 ticket-item">
              <span>Rạp</span>
              <img src={dropDown} alt />
            </div>
            <div className="col-2 ticket-item">
              <span>Ngày xem</span>
              <img src={dropDown} alt />
            </div>
            <div className="col-2 ticket-item">
              <span>Suất chiếu</span>
              <img src={dropDown} alt />
            </div>
            <div className="col-2 ticket-btn">MUA VÉ NGAY</div>
          </div>
        </div>
      </div>
    </section>
  );
}
