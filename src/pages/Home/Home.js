import React, { useEffect, useState } from "react";
import axios from "axios"; //Thư viện kết nối BE api
import { layDanhSachPhimApiAction } from "../../redux/actions/QuanLyPhimAction";
import { connect, useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import DemoHOC from "../HOC/DemoHOC";
import Application from "../../components/Application/Application";
import CarouselMovie from "../../components/CarouselMovie/CarouselMovie";
export default function Home(props) {
  const danhSachPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhimApiAction());
  }, []);

  const renderPhim = () => {
    return danhSachPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-white bg-warning">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
              onError={(e) => {
                e.target.src = "https://picsum.photos/300/300";
              }}
            />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">{phim.moTa}</p>

              <NavLink
                className="btn btn-success"
                to={`/detail/${phim.maPhim}`}
              >
                ĐẶT VÉ
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <CarouselMovie />
      {/* <div className="container">
        <div className="row">{renderPhim()}</div>
      </div> */}

      <Application />
    </>
  );
}
