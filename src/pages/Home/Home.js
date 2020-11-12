import React, { useEffect, useState } from "react";
import axios from "axios"; //Thư viện kết nối BE api
import { layDanhSachPhimApiAction } from "../../redux/actions/QuanLyPhimAction";
import { connect, useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import DemoHOC from "../HOC/DemoHOC";
import Application from "../../components/Application/Application";
import CarouselMovie from "../../components/CarouselMovie/CarouselMovie";
import Showtime from "../../components/Showtime/Showtime";
import News from "../../components/News/News";
export default function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhimApiAction());
  }, []);

  return (
    <>
      <CarouselMovie />
      <Showtime />
      <News />
      <Application />
    </>
  );
}
