import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import tixLogo from "../../img/header/web-logo.png";
import tixLocation from "../../img/header/location-header.png";
import tixUser from "../../img/header/avatar.png";
export default function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="#home">
          <img src={tixLogo} alt="tix-logo" />
        </a>
        <img
          src={tixLogo}
          id="btn-header-options"
          className="btn-header-options d-md-none"
          alt
        />
        <div className="collapse navbar-collapse menu__center">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#showTimes">
                Lịch chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#list_movie">
                Cụm rạp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news">
                Tin tức
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#application">
                Ứng dụng
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse menu__right">
          <ul className="navbar-nav ml-auto w-30">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={tixUser} className="avatar_header" alt />
                Đăng nhập
              </a>
            </li>
            <li className="nav-item">
              <img className="icon_location" src={tixLocation} alt />
              <select id className="form-control region-select">
                <option href="#">Hồ Chí Minh</option>
                <option href="#">Hà Nội</option>
                <option href="#">Đà Nẵng</option>
                <option href="#">Hải Phòng</option>
                <option href="#">Biên Hòa</option>
                <option href="#">Nha Trang</option>
                <option href="#">Bình Dương</option>
                <option href="#">Phan Thiết</option>
                <option href="#">Hạ Long</option>
                <option href="#">Cần Thơ</option>
                <option href="#">Vũng Tàu</option>
                <option href="#">Quy Nhơ</option>
                <option href="#">Huế</option>
                <option href="#">Long Xuyên</option>
                <option href="#">Thái Nguyên</option>
                <option href="#">Buôn Mê Thuộc</option>
                <option href="#">Bắc Giang</option>
                <option href="#">Bến Tre</option>
                <option href="#">Việt Trì</option>
                <option href="#">Ninh Bình</option>
                <option href="#">Thái Bình</option>
                <option href="#">Vinh</option>
                <option href="#">Đà Lạt</option>
                <option href="#">Bảo Lộc</option>
                <option href="#">Yên Bái</option>
                <option href="#">Kiên Giang</option>
                <option href="#">Vĩnh Long</option>
                <option href="#">Cà Mau</option>
                <option href="#">Hậu Giang</option>
                <option href="#">Tây Ninh</option>
                <option href="#">Tuyên Quang</option>
                <option href="#">Thanh Hóa</option>
                <option href="#">Nam Định</option>
                <option href="#">Hải Dương</option>
                <option href="#">Gia Lai</option>
                <option href="#">Hà Tĩnh</option>
                <option href="#">Phú Yên</option>
                <option href="#">Bạc Liêu</option>
                <option href="#">Long An</option>
                <option href="#">Đồng Hới</option>
                <option href="#">Hà Nam</option>
                <option href="#">Bắc Ninh</option>
                <option href="#">Quảng Trị</option>
                <option href="#">Kon Tum</option>
                <option href="#">Sóc Trăng</option>
                <option href="#">Sơn La</option>
                <option href="#">Lạng Sơn</option>
                <option href="#">Quảng Ngãi</option>
                <option href="#">Mỹ Tho</option>
                <option href="#">Đồng Tháp</option>
                <option href="#">Hưng Yên</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <div className="small-menu d-md-none">
        <div className="small-menu-background" />
        <div className="small-menu-content">
          <div className="small-menu-content-first-row">
            <div className="login">
              <img src={tixUser} className="avatar_header" alt />
              Đăng nhập
            </div>
            <img
              src={tixLocation}
              className="small-menu-close"
              alt={tixLocation}
            />
          </div>
          <ul>
            <li>
              <a>Lịch chiếu</a>
            </li>
            <li>
              <a>Cụm rạp</a>
            </li>
            <li>
              <a>Tin tức</a>
            </li>
            <li>
              <a>Ứng dụng</a>
            </li>
            <li id="small-menu-region">
              <a>Hồ Chí Minh</a>
            </li>
          </ul>
        </div>
        <div className="region-select-modal" style={{ display: "none" }}>
          <p className="getRegion">Hồ Chí Minh</p>
          <hr />
          <p className="getRegion">Hà Nội</p>
          <hr />
          <p className="getRegion">Đà Nẵng</p>
          <hr />
          <p className="getRegion">Hải Phòng</p>
          <hr />
          <p className="getRegion">Biên Hòa</p>
          <hr />
          <p className="getRegion">Nha Trang</p>
          <hr />
          <p className="getRegion">Bình Dương</p>
          <hr />
          <p className="getRegion">Phan Thiết</p>
          <hr />
          <p className="getRegion">Hạ Long</p>
          <hr />
          <p className="getRegion">Cần Thơ</p>
          <hr />
          <p className="getRegion">Vũng Tàu</p>
          <hr />
          <p className="getRegion">Quy Nhơ</p>
          <hr />
          <p className="getRegion">Huế</p>
          <hr />
          <p className="getRegion">Long Xuyên</p>
          <hr />
          <p className="getRegion">Thái Nguyên</p>
          <hr />
          <p className="getRegion">Buôn Mê Thuộc</p>
          <hr />
          <p className="getRegion">Bắc Giang</p>
          <hr />
          <p className="getRegion">Bến Tre</p>
          <hr />
          <p className="getRegion">Việt Trì</p>
          <hr />
          <p className="getRegion">Ninh Bình</p>
          <hr />
          <p className="getRegion">Thái Bình</p>
          <hr />
          <p className="getRegion">Vinh</p>
          <hr />
          <p className="getRegion">Đà Lạt</p>
          <hr />
          <p className="getRegion">Bảo Lộc</p>
          <hr />
          <p className="getRegion">Yên Bái</p>
          <hr />
          <p className="getRegion">Kiên Giang</p>
          <hr />
          <p className="getRegion">Vĩnh Long</p>
          <hr />
          <p className="getRegion">Cà Mau</p>
          <hr />
          <p className="getRegion">Hậu Giang</p>
          <hr />
          <p className="getRegion">Tây Ninh</p>
          <hr />
          <p className="getRegion">Tuyên Quang</p>
          <hr />
          <p className="getRegion">Thanh Hóa</p>
          <hr />
          <p className="getRegion">Nam Định</p>
          <hr />
          <p className="getRegion">Hải Dương</p>
          <hr />
          <p className="getRegion">Gia Lai</p>
          <hr />
          <p className="getRegion">Hà Tĩnh</p>
          <hr />
          <p className="getRegion">Phú Yên</p>
          <hr />
          <p className="getRegion">Bạc Liêu</p>
          <hr />
          <p className="getRegion">Long An</p>
          <hr />
          <p className="getRegion">Đồng Hới</p>
          <hr />
          <p className="getRegion">Hà Nam</p>
          <hr />
          <p className="getRegion">Bắc Ninh</p>
          <hr />
          <p className="getRegion">Quảng Trị</p>
          <hr />
          <p className="getRegion">Kon Tum</p>
          <hr />
          <p className="getRegion">Sóc Trăng</p>
          <hr />
          <p className="getRegion">Sơn La</p>
          <hr />
          <p className="getRegion">Lạng Sơn</p>
          <hr />
          <p className="getRegion">Quảng Ngãi</p>
          <hr />
          <p className="getRegion">Mỹ Tho</p>
          <hr />
          <p className="getRegion">Đồng Tháp</p>
          <hr />
          <p className="getRegion">Hưng Yên</p>
        </div>
      </div>
    </header>
  );
}
