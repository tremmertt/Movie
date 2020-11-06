import axios from "axios";
import {
  LAY_CHI_TIET_PHIM,
  LAY_DANH_SACH_PHIM,
} from "../constants/QuanLyPhimConstant";

export const layDanhSachPhimApiAction = () => {
  //Thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
  return async (dispatch) => {
    const { data } = await axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    });
    //Sau khi lấy dữ liệu từ backend về sử dụng hàm dispatch đưa dữ liệu lên reducer
    const action = {
      type: LAY_DANH_SACH_PHIM,
      dsPhim: data,
    };
    dispatch(action);
  };
};

export const layChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    const { data } = await axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
    const action = {
      type: LAY_CHI_TIET_PHIM,
      chiTietPhim: data,
    };
    dispatch(action);
  };
};
