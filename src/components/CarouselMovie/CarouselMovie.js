import React from "react";
import "./CarouselMovie.scss";
import carousel1 from "../../img/carousel/carousel1.jpg";
import carousel2 from "../../img/carousel/carousel2.png";
import carousel3 from "../../img/carousel/carousel3.png";
import carousel4 from "../../img/carousel/carousel4.jpg";
import carousel5 from "../../img/carousel/carousel5.png";
import playVideo from "../../img/play-video.png";
import dropDown from "../../img/dropdown-icon.png";
export default function CarouselMovie() {
  return (
    <section className="carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
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
            <img className="play-button" src={playVideo} alt />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carousel2} />
            <img className="play-button" src={playVideo} alt />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carousel3} />
            <img className="play-button" src={playVideo} alt />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carousel4} />
            <img className="play-button" src={playVideo} alt />
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
