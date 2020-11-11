import React from "react";
import "./Footer.scss";
//import img
import boCongThuong from "../../img/footer/bocongthuong-logo.png";
import zion from "../../img/footer/zion-logo.jpg";

import fb from "../../img/footer/social/facebook-logo.png";
import zalo from "../../img/footer/social/zalo-logo.png";

import ios from "../../img/footer/mobileapp/apple.png";
import android from "../../img/footer/mobileapp/android.png";

import cgv from "../../img/footer/doitac/cgv.png";
import bhd from "../../img/footer/doitac/bhd.png";
import galaxycine from "../../img/footer/doitac/galaxycine.png";
import cinestar from "../../img/footer/doitac/cinestar.png";
import lotte from "../../img/footer/doitac/lotte.png";

import megagsl from "../../img/footer/doitac/megagsl.png";
import bt from "../../img/footer/doitac/bt.jpg";
import dongda from "../../img/footer/doitac/dongda.png";
import TOUCH from "../../img/footer/doitac/TOUCH.png";
import cnx from "../../img/footer/doitac/cnx.jpg";

import STARLIGHT from "../../img/footer/doitac/STARLIGHT.png";
import DCine from "../../img/footer/doitac/DCine.jpg";
import zalopay_icon from "../../img/footer/doitac/zalopay_icon.png";
import payoo from "../../img/footer/doitac/payoo.jpg";
import VCB from "../../img/footer/doitac/VCB.png";

import AGRIBANK from "../../img/footer/doitac/AGRIBANK.png";
import VIETTINBANK from "../../img/footer/doitac/VIETTINBANK.png";
import IVB from "../../img/footer/doitac/IVB.png";
import go123 from "../../img/footer/doitac/123go.png";
import laban from "../../img/footer/doitac/laban.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="padding-class">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-4 col-sm-12 footer-left">
              <div className="container">
                <h3>TIX</h3>
                <div className="row">
                  <div className="col-lg-6 footer-left_item1 footer-left_item ">
                    <p>FAQ</p>
                    <p>Brand Guidelines</p>
                  </div>
                  <div className="col-lg-6 footer-left_item footer-left_item2">
                    <p>Thỏa thuận sử dụng</p>
                    <p>Chính sách bảo mật</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 footer-bottom">
              <div className="container">
                <h3>ĐỐI TÁC</h3>
                <div className="row footer-bottom_brand">
                  <div className="col footer-bottom_item">
                    <img src={cgv} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={bhd} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={galaxycine} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={cinestar} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={lotte} alt />
                  </div>
                </div>
                <div className="row footer-bottom_brand">
                  <div className="col footer-bottom_item">
                    <img src={megagsl} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={bt} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={dongda} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={TOUCH} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={cnx} alt />
                  </div>
                </div>
                <div className="row footer-bottom_brand">
                  <div className="col footer-bottom_item">
                    <img src={STARLIGHT} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={DCine} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={zalopay_icon} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={payoo} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={VCB} alt />
                  </div>
                </div>
                <div className="row footer-bottom_brand">
                  <div className="col footer-bottom_item">
                    <img src={AGRIBANK} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={VIETTINBANK} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={IVB} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={go123} alt />
                  </div>
                  <div className="col footer-bottom_item">
                    <img src={laban} alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 footer-right">
              <div className="row">
                <div className="col-lg-6 footer-right_brand footer-right_brand1">
                  <h3>MOBILE APP</h3>
                  <div className="footer-right_item">
                    <img src={ios} alt={ios} />
                    <img src={android} alt={android} />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 footer-right_brand footer-right_brand2">
                  <h3>SOCIAL</h3>
                  <div className="footer-right_item">
                    <img src={fb} alt={fb} />
                    <img src={zalo} alt={zalo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-12 footer-end_left">
                <img src={zion} alt={zion} />
              </div>
              <div className="col-lg-9 col-sm-12 footer-end_bottom">
                <h3>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h3>
                <p>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </p>
                <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                <p>
                  đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                  kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </p>
                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                <p>
                  Email: <span>support@tix.vn</span>
                </p>
              </div>
              <div className="col-lg-2 col-sm-12 footer-end_right">
                <img src={boCongThuong} alt={boCongThuong} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
