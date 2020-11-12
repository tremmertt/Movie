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
import Loading from "../../components/Loading/Loading";
export default function Home(props) {
  const dispatch = useDispatch();
  const [done, setdone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setdone(true);
      dispatch(layDanhSachPhimApiAction());
    }, 1800);
  }, [done]);

  return (
    <>
      {!done ? (
        <Loading />
      ) : (
        <>
          <CarouselMovie />
          <Showtime />
          <News />
          <Application />
        </>
      )}
    </>
  );
}
