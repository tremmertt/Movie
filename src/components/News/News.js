import React, { useState } from "react";
import "./News.scss";
// IMAGE

export default function News() {
  const openNew = () => {
    setdisplay("flex");
  };
  const [display, setdisplay] = useState("none");
  return (
    <section class="news" id="news">
      <div className="padding-class">
        {/* Nav tabs */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#dienAnh">
              Điện ảnh 24h
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#review">
              Review
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#khuyenMai">
              Khuyến mãi
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane container active" id="dienAnh">
            <div className="row" id="dienAnh1">
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="/img/news/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988971479.png"
                  alt
                />
                <a href="#">
                  Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm
                  Chiêu
                </a>
                <p>
                  Sau khi tiết lộ nhân tố đầu tiên là NSND Lê Khanh sẽ tiếp tục
                  tham gia phần tiếp theo của Gái già lắm chiêu với mái tóc được
                  cắt ngắn đầy mạnh mẽ và nam tính. Kaity Nguyễn sẽ là mỹ nhân
                  tiếp theo nối gót hai đàn chị là Diễm My 9X và Ninh Dương Lan
                  Ngọc gia nhập vũ trụ điện ảnh Gái Già Lắm Chiêu.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331487131.png"
                  alt
                />
                <a href="#">
                  5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ
                  Pinocchio
                </a>
                <p>
                  Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé
                  Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục thế
                  hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy sắc màu
                  nhưng cũng vô cùng mới lạ. Cùng điểm qua 5 lý do khiến bộ phim
                  đặc biệt đến vậy nhé!
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
                  alt
                />
                <a href="#">
                  TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                </a>
                <p>
                  Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông
                  báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các
                  thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg"
                  alt
                />
                <a href="#">
                  Khi phụ nữ không còn ở thế trốn chạy của nạn nhân
                </a>
                <p>
                  Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                  Hình mang đến một góc nhìn mới về hình ảnh những người phụ nữ
                  thời hiện đại. Điều đó được thể hiện qua câu chuyện về hai
                  người phụ nữ cùng hợp sức để vạch mặt tên tội phạm có sở thích
                  bệnh hoạn với phụ nữ.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__smallItemContainer">
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png"
                      alt
                    />
                  </a>
                  <a href="#">
                    Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518582544.png"
                      alt
                    />
                  </a>
                  <a href="#">Diễn viên đặc biệt của Bằng Chứng Vô Hình</a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png"
                      alt
                    />
                  </a>
                  <a href="#">
                    Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png"
                      alt
                    />
                  </a>
                  <a href="#">
                    Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!
                  </a>
                </div>
              </div>
            </div>
            <div className="row" id="dienAnh2" style={{ display: display }}>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                  alt
                />
                <a href="#">
                  ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                </a>
                <p>
                  Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của
                  đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng
                  tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                  alt
                />
                <a href="#">American Sniper - Chính nghĩa hay phi nghĩa?</a>
                <p>
                  American Sniper khắc họa một tay súng bắn tỉa “huyền thoại”
                  của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện
                  phim chậm rãi đưa người xem qua từng thời khắc khác nhau của
                  Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham
                  chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/review-spider-man-into-the-spider-verse-15870356357626.png"
                  alt
                />
                <a href="#">Review: Spider-Man: Into The Spider-Vesre</a>
                <p>
                  Năm 2018 là một năm đầy thành công của nhân vật Người Nhện.
                  Sau thành công của Spider-Man: Homecoming, “nhện nhọ” có màn
                  hành động thuyết phục khán giả trong Avengers: Infinity War.
                  Và rồi chúng ta lại có bộ phim hoạt hình đỉnh cao nhất của
                  nhân vật "nhện nhọ".
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843500427339.jpg"
                  alt
                />
                <a href="#">
                  COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                </a>
                <p>
                  Là một bộ phim chính kịch được ra mắt vào năm 2011, với bộ đôi
                  đạo diễn và biên kịch là Steven Soderbergh và Scott Z. Burns,
                  cùng sự tham gia của dàn sao như Gwyneth Paltrow, Matt Damon,
                  Kate Winslet, Marion Cotillard, Laurence Fishburne, Bryan
                  Cranston và Jude Law.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__smallItemContainer">
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ
                    lầy lội và hài hước đến thế
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                    hùng Valiant
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049795008.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm
                    động của Khả Như và Kiều Minh Tuấn
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047862392.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình
                    thân
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-outline-secondary"
                id="btnDienAnh"
                onClick={() => {
                  openNew();
                }}
              >
                XEM THÊM
              </button>
            </div>
          </div>
          <div className="tab-pane container fade" id="review">
            <div className="row" id="review1">
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                  alt
                />
                <a href="#">
                  ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                </a>
                <p>
                  Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của
                  đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng
                  tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                  alt
                />
                <a href="#">American Sniper - Chính nghĩa hay phi nghĩa?</a>
                <p>
                  American Sniper khắc họa một tay súng bắn tỉa “huyền thoại”
                  của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện
                  phim chậm rãi đưa người xem qua từng thời khắc khác nhau của
                  Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham
                  chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/review-spider-man-into-the-spider-verse-15870356357626.png"
                  alt
                />
                <a href="#">Review: Spider-Man: Into The Spider-Vesre</a>
                <p>
                  Năm 2018 là một năm đầy thành công của nhân vật Người Nhện.
                  Sau thành công của Spider-Man: Homecoming, “nhện nhọ” có màn
                  hành động thuyết phục khán giả trong Avengers: Infinity War.
                  Và rồi chúng ta lại có bộ phim hoạt hình đỉnh cao nhất của
                  nhân vật "nhện nhọ".
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843500427339.jpg"
                  alt
                />
                <a href="#">
                  COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                </a>
                <p>
                  Là một bộ phim chính kịch được ra mắt vào năm 2011, với bộ đôi
                  đạo diễn và biên kịch là Steven Soderbergh và Scott Z. Burns,
                  cùng sự tham gia của dàn sao như Gwyneth Paltrow, Matt Damon,
                  Kate Winslet, Marion Cotillard, Laurence Fishburne, Bryan
                  Cranston và Jude Law.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__smallItemContainer">
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ
                    lầy lội và hài hước đến thế
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                    hùng Valiant
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049795008.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm
                    động của Khả Như và Kiều Minh Tuấn
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047862392.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình
                    thân
                  </a>
                </div>
              </div>
            </div>
            <div className="row" id="review2" style={{ display: display }}>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988971479.png"
                  alt
                />
                <a href="#">
                  Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm
                  Chiêu
                </a>
                <p>
                  Sau khi tiết lộ nhân tố đầu tiên là NSND Lê Khanh sẽ tiếp tục
                  tham gia phần tiếp theo của Gái già lắm chiêu với mái tóc được
                  cắt ngắn đầy mạnh mẽ và nam tính. Kaity Nguyễn sẽ là mỹ nhân
                  tiếp theo nối gót hai đàn chị là Diễm My 9X và Ninh Dương Lan
                  Ngọc gia nhập vũ trụ điện ảnh Gái Già Lắm Chiêu.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331487131.png"
                  alt
                />
                <a href="#">
                  5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ
                  Pinocchio
                </a>
                <p>
                  Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé
                  Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục thế
                  hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy sắc màu
                  nhưng cũng vô cùng mới lạ. Cùng điểm qua 5 lý do khiến bộ phim
                  đặc biệt đến vậy nhé!
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
                  alt
                />
                <a href="#">
                  TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                </a>
                <p>
                  Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông
                  báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các
                  thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg"
                  alt
                />
                <a href="#">
                  Khi phụ nữ không còn ở thế trốn chạy của nạn nhân
                </a>
                <p>
                  Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                  Hình mang đến một góc nhìn mới về hình ảnh những người phụ nữ
                  thời hiện đại. Điều đó được thể hiện qua câu chuyện về hai
                  người phụ nữ cùng hợp sức để vạch mặt tên tội phạm có sở thích
                  bệnh hoạn với phụ nữ.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__smallItemContainer">
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png"
                      alt
                    />
                  </a>
                  <a href="#">
                    Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518582544.png"
                      alt
                    />
                  </a>
                  <a href="#">Diễn viên đặc biệt của Bằng Chứng Vô Hình</a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png"
                      alt
                    />
                  </a>
                  <a href="#">
                    Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png"
                      alt
                    />
                  </a>
                  <a href="#">
                    Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                className="btn btn-outline-secondary"
                id="btnReview"
                onClick={() => {
                  openNew();
                }}
              >
                XEM THÊM
              </button>
            </div>
          </div>
          <div className="tab-pane container fade" id="khuyenMai">
            <div className="row" id="khuyenMai1">
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/mua-1-tang-1-khi-mua-2-ve-phim-bang-chung-vo-hinh-15943590328480.jpg"
                  alt
                />
                <a href="#">
                  MUA 1 TẶNG 1 khi mua 2 vé phim Bằng Chứng Vô Hình
                </a>
                <p>
                  ZaloPay mang đến ưu đãi khủng cho lần đầu thanh toán. Mở TIX
                  đặt vé phim Bằng Chứng Vô Hình ngay thôi!
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/cgv-ve-chi-79-000d-ca-tuan-15936832504031.jpg"
                  alt
                />
                <a href="#">CGV VÉ CHỈ 79.000Đ CẢ TUẦN!</a>
                <p>
                  Tận hưởng Ưu Đãi lên đến 3 VÉ CGV mỗi tuần chỉ với GIÁ
                  79.000Đ/VÉ khi trên TIX và thanh toán bằng ZaloPay.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                  alt
                />
                <a href="#">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</a>
                <p>
                  Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                  59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục
                  Vé Phim trên ZaloPay.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889409277632.png"
                  alt
                />
                <a href="#">Beta Cineplex trở lại với hàng loạt ưu đãi lớn</a>
                <p>
                  Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên
                  toàn quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt
                  khuyến mại KHỦNG đổ bộ cùng lúc dàng cho các tín đồ của TIX
                  đây.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__smallItemContainer">
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                    Trai Yêu Quái
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp
                    Sư Mù: Ai Chết Giơ Tay
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                      alt
                    />
                  </a>
                  <a href="#">[Mega GS] Một đoá hoa thay ngàn lời yêu</a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976629297.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim
                    Thang
                  </a>
                </div>
              </div>
            </div>
            <div className="row" id="khuyenMai2" style={{ display: display }}>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988971479.png"
                  alt
                />
                <a href="#">
                  Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm
                  Chiêu
                </a>
                <p>
                  Sau khi tiết lộ nhân tố đầu tiên là NSND Lê Khanh sẽ tiếp tục
                  tham gia phần tiếp theo của Gái già lắm chiêu với mái tóc được
                  cắt ngắn đầy mạnh mẽ và nam tính. Kaity Nguyễn sẽ là mỹ nhân
                  tiếp theo nối gót hai đàn chị là Diễm My 9X và Ninh Dương Lan
                  Ngọc gia nhập vũ trụ điện ảnh Gái Già Lắm Chiêu.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331487131.png"
                  alt
                />
                <a href="#">
                  5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ
                  Pinocchio
                </a>
                <p>
                  Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé
                  Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục thế
                  hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy sắc màu
                  nhưng cũng vô cùng mới lạ. Cùng điểm qua 5 lý do khiến bộ phim
                  đặc biệt đến vậy nhé!
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
                  alt
                />
                <a href="#">
                  TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                </a>
                <p>
                  Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông
                  báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các
                  thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg"
                  alt
                />
                <a href="#">
                  Khi phụ nữ không còn ở thế trốn chạy của nạn nhân
                </a>
                <p>
                  Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                  Hình mang đến một góc nhìn mới về hình ảnh những người phụ nữ
                  thời hiện đại. Điều đó được thể hiện qua câu chuyện về hai
                  người phụ nữ cùng hợp sức để vạch mặt tên tội phạm có sở thích
                  bệnh hoạn với phụ nữ.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__smallItemContainer">
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png"
                      alt
                    />
                  </a>
                  <a href="#">
                    Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518582544.png"
                      alt
                    />
                  </a>
                  <a href="#">Diễn viên đặc biệt của Bằng Chứng Vô Hình</a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png"
                      alt
                    />
                  </a>
                  <a href="#">
                    Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png"
                      alt
                    />
                  </a>
                  <a href="#">
                    Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!
                  </a>
                </div>
              </div>
            </div>
            <div className="row" id="khuyenMai3" style={{ display: display }}>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                  alt
                />
                <a href="#">
                  ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                </a>
                <p>
                  Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của
                  đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng
                  tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-6 news__largeItem">
                <img
                  className="news__img"
                  src="./img/news/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                  alt
                />
                <a href="#">American Sniper - Chính nghĩa hay phi nghĩa?</a>
                <p>
                  American Sniper khắc họa một tay súng bắn tỉa “huyền thoại”
                  của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện
                  phim chậm rãi đưa người xem qua từng thời khắc khác nhau của
                  Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham
                  chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/review-spider-man-into-the-spider-verse-15870356357626.png"
                  alt
                />
                <a href="#">Review: Spider-Man: Into The Spider-Vesre</a>
                <p>
                  Năm 2018 là một năm đầy thành công của nhân vật Người Nhện.
                  Sau thành công của Spider-Man: Homecoming, “nhện nhọ” có màn
                  hành động thuyết phục khán giả trong Avengers: Infinity War.
                  Và rồi chúng ta lại có bộ phim hoạt hình đỉnh cao nhất của
                  nhân vật "nhện nhọ".
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__mediumItem">
                <img
                  className="news__img"
                  src="./img/news/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843500427339.jpg"
                  alt
                />
                <a href="#">
                  COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                </a>
                <p>
                  Là một bộ phim chính kịch được ra mắt vào năm 2011, với bộ đôi
                  đạo diễn và biên kịch là Steven Soderbergh và Scott Z. Burns,
                  cùng sự tham gia của dàn sao như Gwyneth Paltrow, Matt Damon,
                  Kate Winslet, Marion Cotillard, Laurence Fishburne, Bryan
                  Cranston và Jude Law.
                </p>
                <div className="new__facebookLikeAndComment">
                  <img src="./img/news/like.png" alt />
                  <span>1</span>
                  <img src="./img/news/comment.png" alt />
                  <span>0</span>
                </div>
              </div>
              <div className="col-12 col-md-4 news__smallItemContainer">
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ
                    lầy lội và hài hước đến thế
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                    hùng Valiant
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049795008.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm
                    động của Khả Như và Kiều Minh Tuấn
                  </a>
                </div>
                <div className="news__smallItem">
                  <a href="#">
                    <img
                      src="./img/news/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047862392.jpg"
                      alt
                    />
                  </a>
                  <a href="#">
                    [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình
                    thân
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-outline-secondary"
                id="btnKhuyenMai"
                onClick={() => {
                  openNew();
                }}
              >
                XEM THÊM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
