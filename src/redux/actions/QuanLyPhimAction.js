import { DOMAIN } from "../../ultity/ConfigWeb";
import callApi from "../../ultity/Request";
//Import constant
import {
  LAY_CHI_TIET_PHIM,
  LAY_DANH_SACH_PHIM,
} from "../constants/QuanLyPhimConstant";

export const layDanhSachPhimApiAction = () => {
  //Thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
  return async (dispatch) => {
    callApi(DOMAIN + "api/QuanLyPhim/LayDanhSachPhim", "GET")
      .then((res) => {
        let { data } = res;
        dispatch({ type: LAY_DANH_SACH_PHIM, dsPhim: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const layChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    callApi(
      DOMAIN + `api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      "GET"
    )
      .then((res) => {
        let { data } = res;
        dispatch({
          type: LAY_CHI_TIET_PHIM,
          chiTietPhim: data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
